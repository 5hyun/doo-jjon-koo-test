/**
 * 특정 단계의 랜덤 변주 선택
 */
export function selectRandomVariant(): 'A' | 'B' | 'C' | 'D' {
  const variants: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
  const randomIndex = Math.floor(Math.random() * 4);
  return variants[randomIndex];
}
