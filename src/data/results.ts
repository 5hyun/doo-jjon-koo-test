import { TestResult } from '@/types/test';

/**
 * 32종 두바이 쫀득 쿠키 결과 데이터
 * 16 MBTI × 2 Variant (A/B) = 32개
 *
 * results-design.md 기반으로 작성
 */

export const RESULTS: TestResult[] = [
  // NT 그룹: 분석가형
  {
    id: 'INTJ-A',
    mbti: 'INTJ',
    variant: 'A',
    title: '전략적으로 숨겨둔 비상용 두바이 쫀득 쿠키',
    description:
      '소중한 사람과만 나눠 먹으려고 서랍 깊숙이 숨겨둔 치밀한 맛. 당신은 신중하게 계획을 세우고 가치 있는 것을 아끼는 전략가입니다.',
    scores: { crunch: 70, stickiness: 85, nutty: 75 },
    matching: { good: 'ENFP-A', bad: 'ESFP-B' },
  },
  {
    id: 'INTJ-B',
    mbti: 'INTJ',
    variant: 'B',
    title: '0.1g의 오차도 없는 황금 비율 두바이 쫀득 쿠키',
    description:
      '카다이프의 바삭함과 피스타치오의 비율을 완벽히 계산한 공학적 맛. 정밀함과 완벽함을 추구하는 당신은 모든 것을 계획대로 실행하는 전략가입니다.',
    scores: { crunch: 85, stickiness: 60, nutty: 90 },
    matching: { good: 'ENFP-B', bad: 'ESFJ-A' },
  },
  {
    id: 'INTP-A',
    mbti: 'INTP',
    variant: 'A',
    title: '철학적 고뇌가 담긴 흑임자 두바이 쫀득 쿠키',
    description:
      '왜 두바인가?를 고민하다 보니 어느새 고소함에 중독된 무념무상 맛. 본질을 탐구하며 깊이 사고하는 당신은 이론가입니다.',
    scores: { crunch: 65, stickiness: 70, nutty: 95 },
    matching: { good: 'ENFJ-A', bad: 'ESTJ-B' },
  },
  {
    id: 'INTP-B',
    mbti: 'INTP',
    variant: 'B',
    title: '실험실에서 갓 구운 분자 요리 두바이 쫀득 쿠키',
    description:
      '기존의 틀을 깨는 새로운 카다이프 조리법을 발명해낸 괴짜의 맛. 호기심 많고 창의적인 당신은 혁신가입니다.',
    scores: { crunch: 90, stickiness: 55, nutty: 80 },
    matching: { good: 'ENFJ-B', bad: 'ESFJ-B' },
  },
  {
    id: 'ENTJ-A',
    mbti: 'ENTJ',
    variant: 'A',
    title: '시장 점유율 1위, 압도적 위엄의 두바이 쫀득 쿠키',
    description:
      '주변을 포섭하기 위해 가장 비싼 라인업을 싹쓸이한 비즈니스 맛. 목표 달성과 팀워크를 중시하는 당신은 리더입니다.',
    scores: { crunch: 75, stickiness: 80, nutty: 85 },
    matching: { good: 'INFP-A', bad: 'ISFP-B' },
  },
  {
    id: 'ENTJ-B',
    mbti: 'ENTJ',
    variant: 'B',
    title: '정상에서 맛보는 승리의 골드 두바이 쫀득 쿠키',
    description:
      '남들이 포기할 때 끝까지 오픈런해서 쟁취한 성취감 200%의 맛. 강력한 추진력으로 목표를 달성하는 당신은 통솔자입니다.',
    scores: { crunch: 85, stickiness: 75, nutty: 90 },
    matching: { good: 'INFP-B', bad: 'ISFJ-A' },
  },
  {
    id: 'ENTP-A',
    mbti: 'ENTP',
    variant: 'A',
    title: '민트초코와 불닭의 선 넘는 두바이 쫀득 쿠키',
    description:
      '이게 어울려?라는 논쟁을 즐기며 만든 세상에 없던 자극적인 맛. 재미있고 도전적인 당신은 논쟁가입니다.',
    scores: { crunch: 95, stickiness: 50, nutty: 70 },
    matching: { good: 'INFJ-A', bad: 'ISTJ-B' },
  },
  {
    id: 'ENTP-B',
    mbti: 'ENTP',
    variant: 'B',
    title: '레시피 파괴! 내 맘대로 커스텀 두바이 쫀득 쿠키',
    description:
      '정해진 정석은 거부한다. 내 직관이 이끄는 대로 재료를 쏟아부은 천재적 맛. 자유롭고 창의적인 당신은 발명가입니다.',
    scores: { crunch: 90, stickiness: 60, nutty: 75 },
    matching: { good: 'INFJ-B', bad: 'ISTJ-A' },
  },

  // NF 그룹: 외교관형
  {
    id: 'INFJ-A',
    mbti: 'INFJ',
    variant: 'A',
    title: '지친 마음을 달래줄 위로의 두바이 쫀득 쿠키',
    description:
      '말하지 않아도 마음을 알아주는 따뜻한 위로가 서린 깊은 맛. 타인의 감정을 이해하고 공감하는 당신은 옹호자입니다.',
    scores: { crunch: 60, stickiness: 90, nutty: 80 },
    matching: { good: 'ENTP-A', bad: 'ESTP-B' },
  },
  {
    id: 'INFJ-B',
    mbti: 'INFJ',
    variant: 'B',
    title: '새벽 세 시의 고독한 예술가 두바이 쫀득 쿠키',
    description:
      '자신의 내면 세계를 카다이프의 결처럼 섬세하게 표현한 신비로운 맛. 깊은 통찰력과 독창성을 가진 당신은 예언자입니다.',
    scores: { crunch: 70, stickiness: 85, nutty: 90 },
    matching: { good: 'ENTP-B', bad: 'ESTP-A' },
  },
  {
    id: 'INFP-A',
    mbti: 'INFP',
    variant: 'A',
    title: '여친이 사다준 몽글몽글 핑크 두바이 쫀득 쿠키',
    description:
      '사랑받고 있음을 확인하며 한 입씩 아껴 먹는 솜사탕 같은 맛. 순수하고 감성적인 당신은 낭만주의자입니다.',
    scores: { crunch: 50, stickiness: 95, nutty: 75 },
    matching: { good: 'ENTJ-A', bad: 'ESTJ-B' },
  },
  {
    id: 'INFP-B',
    mbti: 'INFP',
    variant: 'B',
    title: '꿈속을 걷는 듯한 구름 식감 두바이 쫀득 쿠키',
    description:
      '현실엔 없을 것 같은 환상적인 쫀득함을 찾아 헤매는 낭만주의자의 맛. 이상을 추구하며 자기만의 길을 가는 당신은 중재자입니다.',
    scores: { crunch: 55, stickiness: 90, nutty: 80 },
    matching: { good: 'ENTJ-B', bad: 'ESTJ-A' },
  },
  {
    id: 'ENFJ-A',
    mbti: 'ENFJ',
    variant: 'A',
    title: '모두를 행복하게 만드는 평화주의 두바이 쫀득 쿠키',
    description:
      '한 입 먹는 순간 모임의 분위기가 화사해지는 에너자이저 같은 맛. 따뜻하고 카리스마 있는 당신은 선도자입니다.',
    scores: { crunch: 65, stickiness: 85, nutty: 85 },
    matching: { good: 'INTP-A', bad: 'ISTP-B' },
  },
  {
    id: 'ENFJ-B',
    mbti: 'ENFJ',
    variant: 'B',
    title: '세상을 바꿀 선한 영향력의 리더 두바이 쫀득 쿠키',
    description:
      '맛있는 건 널리 알려야 제맛! 커뮤니티 추천 1위를 달리는 검증된 맛. 영향력 있고 열정적인 당신은 교육자입니다.',
    scores: { crunch: 70, stickiness: 80, nutty: 90 },
    matching: { good: 'INTP-B', bad: 'ISTP-A' },
  },
  {
    id: 'ENFP-A',
    mbti: 'ENFP',
    variant: 'A',
    title: '깜짝 이벤트로 배달된 서프라이즈 두바이 쫀득 쿠키',
    description:
      '예상치 못한 순간에 찾아와 도파민을 폭발시키는 텐션 업 맛. 에너지 넘치고 사교적인 당신은 활동가입니다.',
    scores: { crunch: 75, stickiness: 80, nutty: 80 },
    matching: { good: 'INTJ-A', bad: 'ISFJ-B' },
  },
  {
    id: 'ENFP-B',
    mbti: 'ENFP',
    variant: 'B',
    title: '전 세계 맛집 도장 깨기 여행가 두바이 쫀득 쿠키',
    description:
      '오늘은 오리지널, 내일은 변형! 매일이 새로운 모험 같은 다채로운 맛. 호기심 많고 열정적인 당신은 탐험가입니다.',
    scores: { crunch: 80, stickiness: 75, nutty: 85 },
    matching: { good: 'INTJ-B', bad: 'ISFJ-A' },
  },

  // SJ 그룹: 관리자형
  {
    id: 'ISTJ-A',
    mbti: 'ISTJ',
    variant: 'A',
    title: '교과서대로 구운 오리지널 두바이 쫀득 쿠키',
    description:
      '기본에 가장 충실하며 언제 먹어도 변함없는 신뢰의 클래식한 맛. 책임감 있고 성실한 당신은 현실주의자입니다.',
    scores: { crunch: 70, stickiness: 75, nutty: 80 },
    matching: { good: 'ENTP-B', bad: 'ENFP-B' },
  },
  {
    id: 'ISTJ-B',
    mbti: 'ISTJ',
    variant: 'B',
    title: '데이터가 증명하는 판매량 1위 두바이 쫀득 쿠키',
    description:
      '수만 개의 리뷰를 분석해 실패 없는 선택을 한 합리적인 맛. 논리적이고 체계적인 당신은 관리자입니다.',
    scores: { crunch: 75, stickiness: 70, nutty: 85 },
    matching: { good: 'ENTP-A', bad: 'ENFP-A' },
  },
  {
    id: 'ISFJ-A',
    mbti: 'ISFJ',
    variant: 'A',
    title: '엄마의 마음으로 챙겨주는 유기농 두바이 쫀득 쿠키',
    description:
      '소중한 사람의 건강을 위해 재료 하나하나 엄선한 다정한 맛. 헌신적이고 따뜻한 당신은 수호자입니다.',
    scores: { crunch: 60, stickiness: 85, nutty: 80 },
    matching: { good: 'ENFP-B', bad: 'ENTJ-B' },
  },
  {
    id: 'ISFJ-B',
    mbti: 'ISFJ',
    variant: 'B',
    title: '동네 사람들만 아는 숨겨진 장인 두바이 쫀득 쿠키',
    description:
      '화려하진 않지만 묵묵히 제 자리를 지켜온 고수의 내공이 담긴 맛. 조용하지만 신뢰할 수 있는 당신은 옹호자입니다.',
    scores: { crunch: 65, stickiness: 80, nutty: 85 },
    matching: { good: 'ENFP-A', bad: 'ENTJ-A' },
  },
  {
    id: 'ESTJ-A',
    mbti: 'ESTJ',
    variant: 'A',
    title: '체계적인 줄 세우기로 쟁취한 관리 두바이 쫀득 쿠키',
    description:
      '오픈런 대기줄마저 효율적으로 통제하며 얻어낸 승리자의 맛. 조직적이고 실용적인 당신은 경영자입니다.',
    scores: { crunch: 75, stickiness: 70, nutty: 80 },
    matching: { good: 'INFP-B', bad: 'INTP-A' },
  },
  {
    id: 'ESTJ-B',
    mbti: 'ESTJ',
    variant: 'B',
    title: '성공의 향기가 나는 프리미엄 두바이 쫀득 쿠키',
    description:
      '최고급 호텔 라운지에서나 볼 법한 품격 있고 묵직한 자본의 맛. 결단력 있고 직설적인 당신은 관리자입니다.',
    scores: { crunch: 80, stickiness: 65, nutty: 90 },
    matching: { good: 'INFP-A', bad: 'INTP-B' },
  },
  {
    id: 'ESFJ-A',
    mbti: 'ESFJ',
    variant: 'A',
    title: '홈파티의 주인공, 나눔의 두바이 쫀득 쿠키 플래터',
    description:
      '여럿이 모여 수다 떨며 나눠 먹을 때 가장 빛나는 사교적인 맛. 다정하고 협조적인 당신은 집정관입니다.',
    scores: { crunch: 65, stickiness: 80, nutty: 75 },
    matching: { good: 'INTP-B', bad: 'INTJ-B' },
  },
  {
    id: 'ESFJ-B',
    mbti: 'ESFJ',
    variant: 'B',
    title: '감사 인사를 전하는 센스 만점 답례 두바이 쫀득 쿠키',
    description:
      '예쁜 포장지에 정성을 담아 건네는 예의 바르고 깔끔한 맛. 세심하고 배려심 깊은 당신은 봉사자입니다.',
    scores: { crunch: 70, stickiness: 75, nutty: 80 },
    matching: { good: 'INTP-A', bad: 'INTJ-A' },
  },

  // SP 그룹: 예술가형
  {
    id: 'ISTP-A',
    mbti: 'ISTP',
    variant: 'A',
    title: '도구 탓 하지 않는 야생의 터프 두바이 쫀득 쿠키',
    description:
      '투박해 보이지만 입안에서 터지는 카다이프의 실력이 압도적인 맛. 논리적이고 융통성 있는 당신은 장인입니다.',
    scores: { crunch: 90, stickiness: 60, nutty: 75 },
    matching: { good: 'ENFJ-B', bad: 'INFJ-A' },
  },
  {
    id: 'ISTP-B',
    mbti: 'ISTP',
    variant: 'B',
    title: '기계처럼 정확한 타이밍의 쿨한 두바이 쫀득 쿠키',
    description:
      '군더더기 없는 깔끔함, 오직 본질에만 집중한 미니멀리즘 맛. 침착하고 객관적인 당신은 기술자입니다.',
    scores: { crunch: 95, stickiness: 55, nutty: 80 },
    matching: { good: 'ENFJ-A', bad: 'INFJ-B' },
  },
  {
    id: 'ISFP-A',
    mbti: 'ISFP',
    variant: 'A',
    title: '인스타 감성 뿜뿜, 사진 맛집 두바이 쫀득 쿠키',
    description:
      '먹기 아까울 정도로 비주얼이 완벽한 시각 중심의 예술적인 맛. 감수성 풍부하고 자유로운 당신은 모험가입니다.',
    scores: { crunch: 55, stickiness: 90, nutty: 70 },
    matching: { good: 'ENTJ-A', bad: 'ENTP-B' },
  },
  {
    id: 'ISFP-B',
    mbti: 'ISFP',
    variant: 'B',
    title: '나만의 작은 공방에서 힐링하는 두바이 쫀득 쿠키',
    description:
      '조용한 공간에서 혼자 즐기는 소박하지만 확실한 행복의 맛. 온화하고 유연한 당신은 예술가입니다.',
    scores: { crunch: 60, stickiness: 85, nutty: 75 },
    matching: { good: 'ENTJ-B', bad: 'ENTP-A' },
  },
  {
    id: 'ESTP-A',
    mbti: 'ESTP',
    variant: 'A',
    title: '칼로리 폭탄! 자극 끝판왕 두바이 쫀득 쿠키',
    description:
      '인생은 한 방! 피스타치오 스프레드가 넘쳐흐르는 도파민 맛. 에너지 넘치고 행동파인 당신은 사업가입니다.',
    scores: { crunch: 85, stickiness: 70, nutty: 90 },
    matching: { good: 'INFJ-B', bad: 'INTJ-A' },
  },
  {
    id: 'ESTP-B',
    mbti: 'ESTP',
    variant: 'B',
    title: '스포츠 경기 보며 뜯는 역동적 두바이 쫀득 쿠키',
    description:
      '지루할 틈 없는 강렬한 식감, 에너지가 솟구치는 액티브한 맛. 대담하고 현실적인 당신은 기업가입니다.',
    scores: { crunch: 90, stickiness: 65, nutty: 85 },
    matching: { good: 'INFJ-A', bad: 'INTJ-B' },
  },
  {
    id: 'ESFP-A',
    mbti: 'ESFP',
    variant: 'A',
    title: '숏폼 챌린지 떡상 중인 화제의 두바이 쫀득 쿠키',
    description:
      '지금 가장 핫한 트렌드를 놓치지 않는 핵인싸들의 트렌디한 맛. 즉흥적이고 활기찬 당신은 연예인입니다.',
    scores: { crunch: 75, stickiness: 85, nutty: 75 },
    matching: { good: 'INTJ-A', bad: 'ISTJ-B' },
  },
  {
    id: 'ESFP-B',
    mbti: 'ESFP',
    variant: 'B',
    title: '화려한 조명이 감싸는 스프링클 두바이 쫀득 쿠키',
    description:
      '눈과 입이 모두 즐거운, 어디서나 주인공이 되는 화려한 맛. 재미있고 낙천적인 당신은 엔터테이너입니다.',
    scores: { crunch: 80, stickiness: 80, nutty: 80 },
    matching: { good: 'INTJ-B', bad: 'ISTJ-A' },
  },
];

/**
 * ID로 결과 찾기
 */
export function getResultById(id: string): TestResult | undefined {
  return RESULTS.find((result) => result.id === id);
}

/**
 * MBTI와 Variant로 결과 찾기
 */
export function getResult(
  mbti: string,
  variant: 'A' | 'B',
): TestResult | undefined {
  return RESULTS.find(
    (result) => result.mbti === mbti && result.variant === variant,
  );
}
