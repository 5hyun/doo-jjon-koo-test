/**
 * MBTI 4가지 지표
 * - EI: 외향(E) / 내향(I)
 * - SN: 감각(S) / 직관(N)
 * - TF: 사고(T) / 감정(F)
 * - JP: 판단(J) / 인식(P)
 */
export type Dimension = 'EI' | 'SN' | 'TF' | 'JP';

/**
 * 문항 선택지
 */
export interface Option {
  label: string;
  /** 선택 시 해당 지표에 더해질 점수 (일반적으로 1점) */
  value: number;
}

/**
 * 기본 문항 구조
 */
export interface Question {
  id: string;
  dimension: Dimension;
  title: string;
  option1: Option;
  option2: Option;
}

/**
 * 문항 변주 (4개의 변형)
 * 각 단계마다 A, B, C, D 중 하나를 랜덤 선택
 */
export interface QuestionVariant {
  id: string; // 예: '1-A', '1-B'
  step: number; // 1~20
  variant: 'A' | 'B' | 'C' | 'D';
  dimension: Dimension;
  title: string; // 단계 제목 (예: "오픈런 대기줄")
  option1: Option;
  option2: Option;
}

/**
 * 각 지표별 점수
 */
export interface TestScores {
  EI: number; // E에 가까울수록 높음
  SN: number; // S에 가까울수록 높음
  TF: number; // T에 가까울수록 높음
  JP: number; // J에 가까울수록 높음
}

/**
 * 쿠키 특성 점수 (0~100)
 */
export interface CookieScores {
  crunch: number; // 바삭함 (카다이프 비중)
  stickiness: number; // 쫀득함 (쿠키 반죽의 찰기)
  nutty: number; // 고소함 (피스타치오 함량)
}

/**
 * 케미 매칭
 */
export interface Matching {
  good: string; // 환상의 짝꿍 쿠키 ID
  bad: string; // 상극인 쿠키 ID
}

/**
 * 테스트 결과 (32종)
 */
export interface TestResult {
  id: string; // 예: 'INTJ-A', 'ENFP-B'
  mbti: string; // 예: 'INTJ', 'ENFP'
  variant: 'A' | 'B'; // A: 관계/감성 지향, B: 성취/주도 지향
  title: string; // 예: "전략적으로 숨겨둔 비상용 두바이 쫀득 쿠키"
  description: string; // 2~3줄 설명
  imageUrl?: string; // 결과 이미지 경로 (선택적)
  scores: CookieScores;
  matching: Matching;
}
