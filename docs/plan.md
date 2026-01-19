# 🍪 두쫀쿠 테스트: 기술 설계 문서 (TDD)

## 1. 시스템 아키텍처 및 기술 스택

본 프로젝트는 **서버 사이드 로직 없이 클라이언트 사이드에서 모든 연산이 이루어지는 Serverless SPA/MPA 하이브리드 구조**를 가집니다.

| Layer     | Technology                   | Reason                                                                      |
| --------- | ---------------------------- | --------------------------------------------------------------------------- |
| Framework | Next.js 15 (App Router)      | 페이지 단위 라우팅을 통한 AdSense 노출 최적화 및 최신 React 19 기능 활용    |
| State     | Zustand + Persist Middleware | 질문 단계별 응답 데이터 유지 및 새로고침 시 이탈 방지 (SessionStorage 활용) |
| Routing   | Dynamic Routes               | `/test/[step]` 구조를 통한 선언적 페이지 전환 및 광고 유닛 갱신 유도        |
| Styling   | Tailwind CSS + shadcn/ui     | 유연한 UI 컴포넌트 구성 및 빠른 스타일링                                    |
| Package   | pnpm                         | 효율적인 의존성 관리 및 빠른 설치 속도                                      |

---

## 1.1. 디자인 시스템: 빈티지 카페 컨셉

### 색상 팔레트

```css
/* 주요 배경 */
--vintage-cream: #f5e6d3;
--vintage-beige: #e8d5c4;
--vintage-sand: #d4c4b0;

/* 브라운 계열 */
--coffee-dark: #4a362a;
--coffee-medium: #6b4423;
--coffee-light: #8b4513;

/* 피스타치오 그린 (포인트) */
--pistachio-dark: #93a788;
--pistachio-light: #a3b899;

/* 텍스트 */
--text-primary: #3e2723;
--text-secondary: #6b5d57;
--text-muted: #9e8a7f;
```

### 타이포그래피

- **제목 폰트**: Playfair Display (세리프) - Google Fonts
- **본문 폰트**: Geist (산세리프) - 이미 설정됨
- **최소 폰트 크기**: 16px (본문)
- **라인 높이**: 1.6~1.8

### UI 요소 스타일

- **카드**: 베이지/크림 배경, `shadow-lg`, `rounded-2xl`
- **버튼**: 브라운 계열, 호버 시 밝아지는 효과 (`brightness-110`)
- **배경**: 종이 텍스처 느낌의 부드러운 그라데이션
- **장식**: 커피콩/쿠키 이모지 은은하게 배치 (선택적)

---

## 2. 데이터 모델링 (Data Modeling)

### 2.1. 문항 데이터 (Questions)

각 문항은 MBTI의 4가지 지표 중 하나에 가중치를 부여합니다.

```typescript
/**
 * src/types/test.ts
 */
export type Dimension = 'EI' | 'SN' | 'TF' | 'JP';

export interface Option {
  label: string;
  value: number; // 선택 시 해당 지표에 더해질 점수 (보통 1점)
}

export interface Question {
  id: number;
  dimension: Dimension;
  title: string;
  subTitle?: string;
  imageUrl?: string;
  options: [Option, Option]; // 2지선다 강제
}
```

### 2.2. 결과 데이터 (Results)

16가지 MBTI에 점수 구간별 Variant(A/B)를 조합하여 총 **32가지 결과**를 정의합니다.

```typescript
export interface TestResult {
  id: string; // 예: 'ENFP-A', 'ENFP-B'
  mbti: string; // 'ENFP'
  variant: 'A' | 'B';
  title: string; // 예: "여친이 사다준 쫀득 쿠키"
  description: string;
  imageUrl: string;
  matching: string; // 환상의 짝꿍 쿠키 ID
}
```

---

## 3. 상태 관리 전략 (State Management)

Zustand를 사용하여 사용자의 응답을 전역적으로 관리합니다. 페이지가 전환되어도 데이터가 유지되어야 하므로 **persist 미들웨어**를 사용하여 **sessionStorage**에 임시 저장합니다.

```typescript
/**
 * src/store/use-test-store.ts
 */
interface TestState {
  answers: Record<Dimension, number>; // 각 지표별 누적 점수
  currentStep: number;
  actions: {
    setAnswer: (dimension: Dimension, score: number) => void;
    reset: () => void;
  };
}
```

---

## 4. 라우팅 및 광고 최적화 설계

### 4.1. 페이지 흐름 (Page Flow)

1. **`/`**: 랜딩 페이지 (시작하기 버튼)
2. **`/test/[step]`**: 개별 문항 페이지. step은 1부터 20까지 존재.
   - 사용자가 옵션 클릭 시 `setAnswer` 호출 후 `router.push('/test/${step + 1}')` 실행.
   - **핵심**: `Link` 컴포넌트 대신 `router.push`를 통한 페이지 전환으로 AdSense 광고 스크립트의 재호출 유도 고려.
3. **`/loading`**: 결과 계산 페이지. `setTimeout`을 통해 3~5초간 체류하며 전면 광고 노출.
4. **`/result/[type]`**: 최종 결과 페이지. SNS 공유 및 다시 하기 기능 제공.

### 4.2. 애드센스 주입 (AdSense Integration)

Next.js의 `Script` 컴포넌트를 사용하여 `layout.tsx`에 기본 스크립트를 주입하고, 각 문항 페이지 하단에 `AdComponent`를 배치합니다.

---

## 5. 결과 산출 알고리즘 (Logic)

### MBTI 결정

각 지표(EI, SN, TF, JP)의 누적 점수가 문항 수의 절반(2.5점)을 넘는지에 따라 알파벳 결정.

### Variant(A/B) 결정

전체 점수의 총합이 특정 임계치를 넘는지, 혹은 특정 지표(예: 외향성)가 만점인지에 따라 분기.

```typescript
if (score.EI >= 4) return 'A';
else return 'B';
```

---

## 6. 디렉토리 구조 (Directory Structure)

```
src/
├── app/
│   ├── test/[step]/     // 문항 페이지 (Server Component + Client Logic)
│   ├── result/[type]/   // 결과 페이지 (Dynamic Route)
│   ├── loading/         // 결과 산출 대기 페이지
│   └── layout.tsx       // AdSense 및 Global Provider 설정
├── components/
│   ├── ui/              // shadcn/ui 컴포넌트
│   ├── test/
│   │   ├── question-card.tsx
│   │   └── progress-bar.tsx
│   └── ads/
│       └── google-ad.tsx // 애드센스 광고 유닛 컴포넌트
├── data/
│   ├── questions.ts     // 문항 원본 데이터
│   └── results.ts       // 32종 결과 원본 데이터
├── lib/
│   └── calculation.ts   // 점수 계산 유틸리티 함수
└── store/
    └── use-test-store.ts // Zustand 스토어
```

---

## 7. 모바일 우선 UI 전략

### 7.1. 크로스 디바이스 일관성

**PC 환경에서도 모바일 레이아웃을 유지**하여 모든 디바이스에서 일관된 사용자 경험을 제공합니다.

```typescript
// layout.tsx 또는 최상위 wrapper
<div className='min-h-screen flex justify-center bg-gray-50'>
  <div className='w-full max-w-md bg-white shadow-xl'>{children}</div>
</div>
```

### 7.2. 핵심 원칙

#### 고정 최대 너비

- 컨테이너 최대 너비: `max-w-md` (448px) 또는 `max-w-lg` (512px)
- PC에서는 좌우 여백으로 중앙 정렬
- 모바일에서는 전체 너비 활용 (`w-full`)

#### 터치 최적화

- 버튼 최소 높이: `min-h-[44px]` (iOS 가이드라인)
- 탭 영역 간 간격: `gap-4` (16px) 이상
- 활성 상태 피드백: `active:scale-95` 등 트랜지션 효과

#### 가독성

- 본문 폰트 크기: `text-base` (16px) 이상
- 라인 높이: `leading-relaxed` (1.625) 또는 `leading-loose` (2)
- 텍스트 컬러 대비: WCAG AA 기준 준수 (`text-gray-900` vs `bg-white`)

### 7.3. Tailwind CSS 구성

```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      maxWidth: {
        mobile: '448px', // 모바일 컨테이너 고정 너비
      },
      fontSize: {
        'mobile-base': '16px',
        'mobile-lg': '18px',
      },
    },
  },
};
```

### 7.4. 반응형 전략

```jsx
// 모든 페이지에서 사용할 공통 레이아웃
<main className='w-full max-w-mobile mx-auto px-4 py-6'>{/* 컨텐츠 */}</main>
```

**브레이크포인트 사용 최소화**: 모바일 우선이므로 `sm:`, `md:`, `lg:` 등의 브레이크포인트는 특별한 경우가 아니면 사용하지 않습니다.

### 7.5. 구현 예시

```tsx
// components/layouts/mobile-container.tsx
export function MobileContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen flex justify-center bg-gradient-to-br from-amber-50 to-orange-50'>
      <div className='w-full max-w-md bg-white shadow-2xl min-h-screen'>
        {children}
      </div>
    </div>
  );
}
```

### 7.6. 주요 이점

1. **개발 효율성**: 단일 레이아웃으로 모든 디바이스 대응
2. **테스트 간소화**: 하나의 스타일만 검증하면 됨
3. **AdSense 최적화**: 고정된 광고 영역으로 일관된 노출
4. **사용자 경험**: 디바이스 전환 시에도 동일한 UI로 학습 곡선 최소화
