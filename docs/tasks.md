# 🍪 두바이 쫀득 쿠키 테스트 - 구현 Task List

## Phase 1: 프로젝트 기본 설정

- [ ] Tailwind CSS 설정 확인 및 커스텀 유틸리티 추가
- [ ] shadcn/ui 초기 설정 및 필수 컴포넌트 설치
- [ ] 모바일 컨테이너 레이아웃 구성

## Phase 2: 타입 정의 및 데이터 생성

- [ ] `src/types/test.ts` - 기본 타입 정의 (Dimension, Option, Question, TestResult)
- [ ] `src/data/questions.ts` - 80개 문항 데이터 작성 (20단계 × 4변주)
- [ ] `src/data/results.ts` - 32종 결과 데이터 작성 (16 MBTI × 2 Variant)

## Phase 3: 상태 관리 구현

- [ ] Zustand Store 설정 (`src/store/use-test-store.ts`)
- [ ] Persist Middleware 설정 (SessionStorage 연동)
- [ ] 답변 저장 및 현재 단계 관리 액션 구현

## Phase 4: 공통 레이아웃 및 컴포넌트

- [ ] `components/layouts/mobile-container.tsx` - 모바일 우선 레이아웃
- [ ] `components/test/progress-bar.tsx` - 진행률 표시 컴포넌트
- [ ] `components/test/question-card.tsx` - 문항 카드 컴포넌트
- [ ] `components/ui/button.tsx` - 버튼 컴포넌트 (shadcn/ui)

## Phase 5: 페이지 구현

- [ ] `app/page.tsx` - 랜딩 페이지 (시작하기 버튼)
- [ ] `app/test/[step]/page.tsx` - 문항 페이지 (Dynamic Route)
- [ ] `app/loading/page.tsx` - 결과 계산 대기 페이지
- [ ] `app/result/[type]/page.tsx` - 결과 페이지 (SNS 공유 기능 포함)

## Phase 6: 결과 산출 로직

- [ ] `src/lib/calculation.ts` - MBTI 점수 계산 함수
- [ ] `src/lib/calculation.ts` - Variant(A/B) 결정 로직
- [ ] `src/lib/question-selector.ts` - 랜덤 문항 선택 로직

## Phase 7: AdSense 통합

- [ ] `app/layout.tsx` - Google AdSense 스크립트 주입
- [ ] `components/ads/google-ad.tsx` - 광고 유닛 컴포넌트
- [ ] 문항 페이지 하단 광고 배치

## Phase 8: 테스트 및 최적화

- [ ] 페이지 전환 동작 확인
- [ ] 상태 관리 및 SessionStorage 동작 확인
- [ ] 모바일/PC 레이아웃 확인
- [ ] 결과 산출 정확도 검증
