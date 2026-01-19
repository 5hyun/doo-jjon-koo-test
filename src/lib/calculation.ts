import { TestScores } from '@/types/test';

/**
 * MBTI 계산 함수
 * 각 지표의 점수를 기준으로 MBTI 알파벳 결정
 *
 * @param answers 각 지표별 누적 점수
 * @returns MBTI 문자열 (예: 'INTJ', 'ENFP')
 */
export function calculateMBTI(answers: TestScores): string {
  const mbti: string[] = [];

  // EI: 2.5점 기준 (5문항 중 절반)
  mbti.push(answers.EI >= 2.5 ? 'E' : 'I');

  // SN: 2.5점 기준
  mbti.push(answers.SN >= 2.5 ? 'S' : 'N');

  // TF: 2.5점 기준
  mbti.push(answers.TF >= 2.5 ? 'T' : 'F');

  // JP: 2.5점 기준
  mbti.push(answers.JP >= 2.5 ? 'J' : 'P');

  return mbti.join('');
}

/**
 * Variant (A/B) 결정 함수
 *
 * A: 타인/관계/수용 성향
 * B: 자아/성취/주도 성향
 *
 * @param answers 각 지표별 누적 점수
 * @returns 'A' | 'B'
 */
export function calculateVariant(answers: TestScores): 'A' | 'B' {
  // 전체 점수 합산
  const totalAnswers = answers.EI + answers.SN + answers.TF + answers.JP;

  // 총점 기준 (20개 문항이므로 최대 20점)
  // 12점 이상이면 성향이 강한 B, 아니면 A
  // 또는 외향성(E) 지표가 4 이상이면 B로 판단

  if (totalAnswers >= 12 || answers.EI >= 4) {
    return 'B';
  }

  return 'A';
}

/**
 * 전체 결과 ID 생성
 *
 * @param answers 각 지표별 누적 점수
 * @returns 결과 ID (예: 'INTJ-A', 'ENFP-B')
 */
export function calculateResultId(answers: TestScores): string {
  const mbti = calculateMBTI(answers);
  const variant = calculateVariant(answers);

  return `${mbti}-${variant}`;
}
