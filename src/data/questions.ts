import { QuestionVariant } from '@/types/test';

/**
 * 80개 문항 데이터셋
 * 20단계 × 4변주 (A, B, C, D) = 80개
 *
 * questions-dataset.md 기반으로 작성
 */

// Part 1: EI (에너지 방향 & 구매 스타일) - 단계 1~5
const step1_variants: QuestionVariant[] = [
  {
    id: '1-A',
    step: 1,
    variant: 'A',
    dimension: 'EI',
    title: '오픈런 대기줄',
    option1: { label: '선 사람들과 정보 공유하기', value: 1 },
    option2: { label: '이어폰 끼고 내 차례 기다리기', value: 1 },
  },
  {
    id: '1-B',
    step: 1,
    variant: 'B',
    dimension: 'EI',
    title: '오픈런 대기줄',
    option1: { label: '매장 음악에 맞춰 흥얼거리기', value: 1 },
    option2: { label: '조용히 폰 보기', value: 1 },
  },
  {
    id: '1-C',
    step: 1,
    variant: 'C',
    dimension: 'EI',
    title: '오픈런 대기줄',
    option1: { label: '직원이랑 친해지기', value: 1 },
    option2: { label: '주문만 하고 나오기', value: 1 },
  },
  {
    id: '1-D',
    step: 1,
    variant: 'D',
    dimension: 'EI',
    title: '오픈런 대기줄',
    option1: { label: '친구 불러서 같이 기다리기', value: 1 },
    option2: { label: '혼자 여유 즐기기', value: 1 },
  },
];

const step2_variants: QuestionVariant[] = [
  {
    id: '2-A',
    step: 2,
    variant: 'A',
    dimension: 'EI',
    title: '구매 인증',
    option1: { label: '매장 앞에서 사진 100장 찍기', value: 1 },
    option2: { label: '집에 가서 언박싱하기', value: 1 },
  },
  {
    id: '2-B',
    step: 2,
    variant: 'B',
    dimension: 'EI',
    title: '구매 인증',
    option1: { label: '단톡방에 실시간 생중계', value: 1 },
    option2: { label: '나중에 소소하게 올리기', value: 1 },
  },
  {
    id: '2-C',
    step: 2,
    variant: 'C',
    dimension: 'EI',
    title: '구매 인증',
    option1: { label: '지나가는 사람들에게 홍보하기', value: 1 },
    option2: { label: '가방에 쏙 숨기기', value: 1 },
  },
  {
    id: '2-D',
    step: 2,
    variant: 'D',
    dimension: 'EI',
    title: '구매 인증',
    option1: { label: '모르는 사람에게 맛 물어보기', value: 1 },
    option2: { label: '검색해서 평점 보기', value: 1 },
  },
];

const step3_variants: QuestionVariant[] = [
  {
    id: '3-A',
    step: 3,
    variant: 'A',
    dimension: 'EI',
    title: '시식 장소',
    option1: { label: '핫플 카페 테라스에서 먹기', value: 1 },
    option2: { label: '내 방 침대 위에서 먹기', value: 1 },
  },
  {
    id: '3-B',
    step: 3,
    variant: 'B',
    dimension: 'EI',
    title: '시식 장소',
    option1: { label: '친구들과 파티하며 먹기', value: 1 },
    option2: { label: '공원 벤치에서 혼자 먹기', value: 1 },
  },
  {
    id: '3-C',
    step: 3,
    variant: 'C',
    dimension: 'EI',
    title: '시식 장소',
    option1: { label: '사람 많은 길거리에서 한 입 하기', value: 1 },
    option2: { label: '자동차 안에서 조용히 먹기', value: 1 },
  },
  {
    id: '3-D',
    step: 3,
    variant: 'D',
    dimension: 'EI',
    title: '시식 장소',
    option1: { label: '북적이는 팝업스토어에서 먹기', value: 1 },
    option2: { label: '단골 아지트에서 먹기', value: 1 },
  },
];

const step4_variants: QuestionVariant[] = [
  {
    id: '4-A',
    step: 4,
    variant: 'A',
    dimension: 'EI',
    title: '후기 공유',
    option1: { label: '블로그/인스타에 장문 후기', value: 1 },
    option2: { label: '나만 아는 메모장에 기록', value: 1 },
  },
  {
    id: '4-B',
    step: 4,
    variant: 'B',
    dimension: 'EI',
    title: '후기 공유',
    option1: { label: '친구들 만나서 맛 설명하기', value: 1 },
    option2: { label: '혼자 음미하며 분석', value: 1 },
  },
  {
    id: '4-C',
    step: 4,
    variant: 'C',
    dimension: 'EI',
    title: '후기 공유',
    option1: { label: '유튜브 브이로그 찍기', value: 1 },
    option2: { label: '조용히 별점만 남기기', value: 1 },
  },
  {
    id: '4-D',
    step: 4,
    variant: 'D',
    dimension: 'EI',
    title: '후기 공유',
    option1: { label: '커뮤니티에 질문 글 올리기', value: 1 },
    option2: { label: '다른 사람 후기만 읽기', value: 1 },
  },
];

const step5_variants: QuestionVariant[] = [
  {
    id: '5-A',
    step: 5,
    variant: 'A',
    dimension: 'EI',
    title: '재방문',
    option1: { label: '다음엔 친구 5명 데려오기', value: 1 },
    option2: { label: '다음에도 혼자 오기', value: 1 },
  },
  {
    id: '5-B',
    step: 5,
    variant: 'B',
    dimension: 'EI',
    title: '재방문',
    option1: { label: '사장님께 인사하고 단골 도장 찍기', value: 1 },
    option2: { label: '기억 안 나게 조용히 방문', value: 1 },
  },
  {
    id: '5-C',
    step: 5,
    variant: 'C',
    dimension: 'EI',
    title: '재방문',
    option1: { label: '주변에 "꼭 가라"고 추천하기', value: 1 },
    option2: { label: '나만 알고 싶어 숨기기', value: 1 },
  },
  {
    id: '5-D',
    step: 5,
    variant: 'D',
    dimension: 'EI',
    title: '재방문',
    option1: { label: '매장 이벤트 참여하기', value: 1 },
    option2: { label: '쿠폰만 챙기기', value: 1 },
  },
];

// Part 2: SN (정보 수용 & 감각 경험) - 단계 6~10
const step6_variants: QuestionVariant[] = [
  {
    id: '6-A',
    step: 6,
    variant: 'A',
    dimension: 'SN',
    title: '첫인상',
    option1: { label: '카다이프 결이 몇 겹인지 세어본다', value: 1 },
    option2: { label: '중동의 신비로운 향기를 상상한다', value: 1 },
  },
  {
    id: '6-B',
    step: 6,
    variant: 'B',
    dimension: 'SN',
    title: '첫인상',
    option1: { label: '정확한 크기를 가늠한다', value: 1 },
    option2: { label: '이 맛의 우주적 가치를 생각한다', value: 1 },
  },
  {
    id: '6-C',
    step: 6,
    variant: 'C',
    dimension: 'SN',
    title: '첫인상',
    option1: { label: '초콜릿의 두께를 관찰한다', value: 1 },
    option2: { label: '쿠키가 예술 작품 같다고 느낀다', value: 1 },
  },
  {
    id: '6-D',
    step: 6,
    variant: 'D',
    dimension: 'SN',
    title: '첫인상',
    option1: { label: '무게감을 손으로 느낀다', value: 1 },
    option2: { label: '이 맛의 기원을 떠올린다', value: 1 },
  },
];

const step7_variants: QuestionVariant[] = [
  {
    id: '7-A',
    step: 7,
    variant: 'A',
    dimension: 'SN',
    title: '식감 표현',
    option1: { label: '"바삭하고 쫀득해"', value: 1 },
    option2: { label: '"모래성 위를 걷는 기분이야"', value: 1 },
  },
  {
    id: '7-B',
    step: 7,
    variant: 'B',
    dimension: 'SN',
    title: '식감 표현',
    option1: { label: '"피스타치오 함량이 높아"', value: 1 },
    option2: { label: '"초록빛 숲속의 요정 같은 맛이야"', value: 1 },
  },
  {
    id: '7-C',
    step: 7,
    variant: 'C',
    dimension: 'SN',
    title: '식감 표현',
    option1: { label: '"입안에서 터지는 소리가 커"', value: 1 },
    option2: { label: '"미래지향적인 식감이야"', value: 1 },
  },
  {
    id: '7-D',
    step: 7,
    variant: 'D',
    dimension: 'SN',
    title: '식감 표현',
    option1: { label: '"재료 배합이 정석이야"', value: 1 },
    option2: { label: '"맛의 신세계가 열렸어"', value: 1 },
  },
];

const step8_variants: QuestionVariant[] = [
  {
    id: '8-A',
    step: 8,
    variant: 'A',
    dimension: 'SN',
    title: '재료 분석',
    option1: { label: '뒷면의 성분표를 정독한다', value: 1 },
    option2: { label: '사장님이 어떤 영감을 받았을지 생각한다', value: 1 },
  },
  {
    id: '8-B',
    step: 8,
    variant: 'B',
    dimension: 'SN',
    title: '재료 분석',
    option1: { label: '카다이프 원산지를 확인한다', value: 1 },
    option2: { label: '이 쿠키가 미래 식량이 될지 상상한다', value: 1 },
  },
  {
    id: '8-C',
    step: 8,
    variant: 'C',
    dimension: 'SN',
    title: '재료 분석',
    option1: { label: '가격 대비 양을 계산한다', value: 1 },
    option2: { label: '이 쿠키를 만든 사람의 철학을 느낀다', value: 1 },
  },
  {
    id: '8-D',
    step: 8,
    variant: 'D',
    dimension: 'SN',
    title: '재료 분석',
    option1: { label: '제조 일자를 체크한다', value: 1 },
    option2: { label: '포장지 디자인의 의미를 해석한다', value: 1 },
  },
];

const step9_variants: QuestionVariant[] = [
  {
    id: '9-A',
    step: 9,
    variant: 'A',
    dimension: 'SN',
    title: '트렌드 인식',
    option1: { label: '지금 제일 인기 있는 메뉴를 고른다', value: 1 },
    option2: { label: '세상에 없던 새로운 맛을 기대한다', value: 1 },
  },
  {
    id: '9-B',
    step: 9,
    variant: 'B',
    dimension: 'SN',
    title: '트렌드 인식',
    option1: { label: '인스타 인기 해시태그를 확인한다', value: 1 },
    option2: { label: '이 유행이 언제까지 갈지 예측해본다', value: 1 },
  },
  {
    id: '9-C',
    step: 9,
    variant: 'C',
    dimension: 'SN',
    title: '트렌드 인식',
    option1: { label: 'TV에 나온 맛집인지 확인한다', value: 1 },
    option2: { label: '내가 직접 맛의 트렌드세터가 된다', value: 1 },
  },
  {
    id: '9-D',
    step: 9,
    variant: 'D',
    dimension: 'SN',
    title: '트렌드 인식',
    option1: { label: '친구가 추천한 검증된 맛을 고른다', value: 1 },
    option2: { label: '실험적인 메뉴에 도전한다', value: 1 },
  },
];

const step10_variants: QuestionVariant[] = [
  {
    id: '10-A',
    step: 10,
    variant: 'A',
    dimension: 'SN',
    title: '상상력',
    option1: { label: '내일 아침에 먹을 계획을 세운다', value: 1 },
    option2: { label: '우주선 안에서 이 쿠키를 먹는 상상을 한다', value: 1 },
  },
  {
    id: '10-B',
    step: 10,
    variant: 'B',
    dimension: 'SN',
    title: '상상력',
    option1: { label: '보관법을 메모한다', value: 1 },
    option2: { label: '이 쿠키가 말을 건다면 어떨지 생각한다', value: 1 },
  },
  {
    id: '10-C',
    step: 10,
    variant: 'C',
    dimension: 'SN',
    title: '상상력',
    option1: { label: '칼로리를 계산한다', value: 1 },
    option2: { label: '쿠키 나라의 왕이 된 상상을 한다', value: 1 },
  },
  {
    id: '10-D',
    step: 10,
    variant: 'D',
    dimension: 'SN',
    title: '상상력',
    option1: { label: '유통기한 내 다 먹을지 고민한다', value: 1 },
    option2: { label: '이 맛을 음악으로 표현해본다', value: 1 },
  },
];

// Part 3: TF (판단 근거 & 공감 반응) - 단계 11~15
const step11_variants: QuestionVariant[] = [
  {
    id: '11-A',
    step: 11,
    variant: 'A',
    dimension: 'TF',
    title: '선물 반응',
    option1: { label: '"우와, 이거 비싼 건데 얼마야?"', value: 1 },
    option2: { label: '"나 생각해서 사온 거야? 감동이야..."', value: 1 },
  },
  {
    id: '11-B',
    step: 11,
    variant: 'B',
    dimension: 'TF',
    title: '선물 반응',
    option1: { label: '"왜 여기서 샀어? (논리적 궁금함)"', value: 1 },
    option2: { label: '"사오느라 힘들었지? 고마워"', value: 1 },
  },
  {
    id: '11-C',
    step: 11,
    variant: 'C',
    dimension: 'TF',
    title: '선물 반응',
    option1: { label: '"유통기한 언제까지야?"', value: 1 },
    option2: { label: '"이거 먹고 싶다고 한 거 기억했어?"', value: 1 },
  },
  {
    id: '11-D',
    step: 11,
    variant: 'D',
    dimension: 'TF',
    title: '선물 반응',
    option1: { label: '"구성품은 다 들어있어?"', value: 1 },
    option2: { label: '"세상에서 제일 맛있는 선물이야"', value: 1 },
  },
];

const step12_variants: QuestionVariant[] = [
  {
    id: '12-A',
    step: 12,
    variant: 'A',
    dimension: 'TF',
    title: '맛 평가',
    option1: { label: '"피스타치오 맛이 좀 연한데?"', value: 1 },
    option2: { label: '"너랑 같이 먹으니까 너무 좋다"', value: 1 },
  },
  {
    id: '12-B',
    step: 12,
    variant: 'B',
    dimension: 'TF',
    title: '맛 평가',
    option1: { label: '"가격 대비 카다이프가 적어"', value: 1 },
    option2: { label: '"함께 줄 서준 정성이 느껴져"', value: 1 },
  },
  {
    id: '12-C',
    step: 12,
    variant: 'C',
    dimension: 'TF',
    title: '맛 평가',
    option1: { label: '"단맛의 밸런스가 안 맞아"', value: 1 },
    option2: { label: '"만드신 분의 노력이 대단해"', value: 1 },
  },
  {
    id: '12-D',
    step: 12,
    variant: 'D',
    dimension: 'TF',
    title: '맛 평가',
    option1: { label: '"식감이 조금 눅눅해"', value: 1 },
    option2: { label: '"입안에 퍼지는 느낌이 몽글해"', value: 1 },
  },
];

const step13_variants: QuestionVariant[] = [
  {
    id: '13-A',
    step: 13,
    variant: 'A',
    dimension: 'TF',
    title: '추천 방식',
    option1: { label: '"가성비 좋으니까 가봐"', value: 1 },
    option2: { label: '"사장님이 너무 친절하셔"', value: 1 },
  },
  {
    id: '13-B',
    step: 13,
    variant: 'B',
    dimension: 'TF',
    title: '추천 방식',
    option1: { label: '"리뷰 점수가 4.8점이야"', value: 1 },
    option2: { label: '"먹으면 기분이 좋아지는 맛이야"', value: 1 },
  },
  {
    id: '13-C',
    step: 13,
    variant: 'C',
    dimension: 'TF',
    title: '추천 방식',
    option1: { label: '"이동 동선상 여기가 제일 나아"', value: 1 },
    option2: { label: '"너랑 잘 어울리는 쿠키야"', value: 1 },
  },
  {
    id: '13-D',
    step: 13,
    variant: 'D',
    dimension: 'TF',
    title: '추천 방식',
    option1: { label: '"재료가 신선해서 추천해"', value: 1 },
    option2: { label: '"너도 이 감동을 느꼈으면 좋겠어"', value: 1 },
  },
];

const step14_variants: QuestionVariant[] = [
  {
    id: '14-A',
    step: 14,
    variant: 'A',
    dimension: 'TF',
    title: '비판 대응',
    option1: { label: '"사람마다 입맛은 다르니까"', value: 1 },
    option2: { label: '"헐.. 내가 고른 건데 상처야"', value: 1 },
  },
  {
    id: '14-B',
    step: 14,
    variant: 'B',
    dimension: 'TF',
    title: '비판 대응',
    option1: { label: '"어떤 부분이 맛없어? (분석)"', value: 1 },
    option2: { label: '"너랑 맛있게 먹고 싶었는데 속상해"', value: 1 },
  },
  {
    id: '14-C',
    step: 14,
    variant: 'C',
    dimension: 'TF',
    title: '비판 대응',
    option1: { label: '"그럼 다음엔 다른 데 가자"', value: 1 },
    option2: { label: '"미안해, 입에 안 맞을 줄 몰랐어"', value: 1 },
  },
  {
    id: '14-D',
    step: 14,
    variant: 'D',
    dimension: 'TF',
    title: '비판 대응',
    option1: { label: '"객관적으로 평점 높은 곳이야"', value: 1 },
    option2: { label: '"우리 취향이 조금 다른가 봐"', value: 1 },
  },
];

const step15_variants: QuestionVariant[] = [
  {
    id: '15-A',
    step: 15,
    variant: 'A',
    dimension: 'TF',
    title: '공유 상황',
    option1: { label: '남은 개수를 정확히 나눠 먹는다', value: 1 },
    option2: { label: '친구에게 더 큰 쪽을 양보한다', value: 1 },
  },
  {
    id: '15-B',
    step: 15,
    variant: 'B',
    dimension: 'TF',
    title: '공유 상황',
    option1: { label: '맛의 특징을 조목조목 설명한다', value: 1 },
    option2: { label: '먹으면서 행복한 표정을 공유한다', value: 1 },
  },
  {
    id: '15-C',
    step: 15,
    variant: 'C',
    dimension: 'TF',
    title: '공유 상황',
    option1: { label: '"이건 이래서 비싸"라고 설명한다', value: 1 },
    option2: { label: '"이거 먹고 우리 힘내자"라고 한다', value: 1 },
  },
  {
    id: '15-D',
    step: 15,
    variant: 'D',
    dimension: 'TF',
    title: '공유 상황',
    option1: { label: '"반반 나눠서 계산하자"', value: 1 },
    option2: { label: '"내가 널 위해 쏜다!"', value: 1 },
  },
];

// Part 4: JP (계획 수립 & 정리 습관) - 단계 16~20
const step16_variants: QuestionVariant[] = [
  {
    id: '16-A',
    step: 16,
    variant: 'A',
    dimension: 'JP',
    title: '투어 계획',
    option1: { label: '방문할 매장 리스트를 엑셀로 짠다', value: 1 },
    option2: { label: '인스타 보다가 끌리는 곳 간다', value: 1 },
  },
  {
    id: '16-B',
    step: 16,
    variant: 'B',
    dimension: 'JP',
    title: '투어 계획',
    option1: { label: '이동 경로를 미리 확인한다', value: 1 },
    option2: { label: '발길 닿는 대로 걷다가 발견한다', value: 1 },
  },
  {
    id: '16-C',
    step: 16,
    variant: 'C',
    dimension: 'JP',
    title: '투어 계획',
    option1: { label: '예약 시간을 알람으로 설정한다', value: 1 },
    option2: { label: '"설마 품절이겠어?" 하고 그냥 간다', value: 1 },
  },
  {
    id: '16-D',
    step: 16,
    variant: 'D',
    dimension: 'JP',
    title: '투어 계획',
    option1: { label: '보조 배터리와 가방을 완벽 준비한다', value: 1 },
    option2: { label: '지갑만 들고 일단 나선다', value: 1 },
  },
];

const step17_variants: QuestionVariant[] = [
  {
    id: '17-A',
    step: 17,
    variant: 'A',
    dimension: 'JP',
    title: '취식 준비',
    option1: { label: '접시와 우유를 미리 세팅한다', value: 1 },
    option2: { label: '포장지 뜯자마자 그냥 먹는다', value: 1 },
  },
  {
    id: '17-B',
    step: 17,
    variant: 'B',
    dimension: 'JP',
    title: '취식 준비',
    option1: { label: '한 입 크기로 미리 다 잘라둔다', value: 1 },
    option2: { label: '베어 먹으면서 식감을 즐긴다', value: 1 },
  },
  {
    id: '17-C',
    step: 17,
    variant: 'C',
    dimension: 'JP',
    title: '취식 준비',
    option1: { label: '먹기 전에 영양 정보를 기록한다', value: 1 },
    option2: { label: '배고플 때 바로 입에 넣는다', value: 1 },
  },
  {
    id: '17-D',
    step: 17,
    variant: 'D',
    dimension: 'JP',
    title: '취식 준비',
    option1: { label: '정해진 간식 시간에만 먹는다', value: 1 },
    option2: { label: '생각날 때마다 수시로 꺼내 먹는다', value: 1 },
  },
];

const step18_variants: QuestionVariant[] = [
  {
    id: '18-A',
    step: 18,
    variant: 'A',
    dimension: 'JP',
    title: '보관 방식',
    option1: { label: '지퍼백에 밀봉해서 냉동 보관한다', value: 1 },
    option2: { label: '그냥 식탁 위에 둔다', value: 1 },
  },
  {
    id: '18-B',
    step: 18,
    variant: 'B',
    dimension: 'JP',
    title: '보관 방식',
    option1: { label: '먹을 만큼만 딱 꺼내고 나머지는 넣는다', value: 1 },
    option2: { label: '눈앞에 보이면 다 먹어 치운다', value: 1 },
  },
  {
    id: '18-C',
    step: 18,
    variant: 'C',
    dimension: 'JP',
    title: '보관 방식',
    option1: { label: '보관 날짜를 포스트잇에 써둔다', value: 1 },
    option2: { label: '나중에 냄새 맡아보고 판단한다', value: 1 },
  },
  {
    id: '18-D',
    step: 18,
    variant: 'D',
    dimension: 'JP',
    title: '보관 방식',
    option1: { label: '유통기한 순서대로 정렬한다', value: 1 },
    option2: { label: '손에 잡히는 것부터 먹는다', value: 1 },
  },
];

const step19_variants: QuestionVariant[] = [
  {
    id: '19-A',
    step: 19,
    variant: 'A',
    dimension: 'JP',
    title: '뒷정리',
    option1: { label: '부스러기를 즉시 물티슈로 닦는다', value: 1 },
    option2: { label: '다 먹고 나중에 한 번에 치운다', value: 1 },
  },
  {
    id: '19-B',
    step: 19,
    variant: 'B',
    dimension: 'JP',
    title: '뒷정리',
    option1: { label: '포장지는 분리수거함에 바로 넣는다', value: 1 },
    option2: { label: '일단 옆에 쌓아둔다', value: 1 },
  },
  {
    id: '19-C',
    step: 19,
    variant: 'C',
    dimension: 'JP',
    title: '뒷정리',
    option1: { label: '사용한 식기를 바로 설거지한다', value: 1 },
    option2: { label: '내일의 나에게 맡긴다', value: 1 },
  },
  {
    id: '19-D',
    step: 19,
    variant: 'D',
    dimension: 'JP',
    title: '뒷정리',
    option1: { label: '상자를 예쁘게 접어 버린다', value: 1 },
    option2: { label: '그냥 구겨서 쓰레기통에 넣는다', value: 1 },
  },
];

const step20_variants: QuestionVariant[] = [
  {
    id: '20-A',
    step: 20,
    variant: 'A',
    dimension: 'JP',
    title: '마무리',
    option1: { label: '다음 테스트 날짜를 달력에 적는다', value: 1 },
    option2: { label: '"재밌었다!" 하고 창을 닫는다', value: 1 },
  },
  {
    id: '20-B',
    step: 20,
    variant: 'B',
    dimension: 'JP',
    title: '마무리',
    option1: { label: '결과지를 캡처해서 폴더에 저장한다', value: 1 },
    option2: { label: '단톡방에 한 번 올리고 잊는다', value: 1 },
  },
  {
    id: '20-C',
    step: 20,
    variant: 'C',
    dimension: 'JP',
    title: '마무리',
    option1: { label: '유형별 특징을 꼼꼼히 읽어본다', value: 1 },
    option2: { label: '대충 제목만 보고 넘긴다', value: 1 },
  },
  {
    id: '20-D',
    step: 20,
    variant: 'D',
    dimension: 'JP',
    title: '마무리',
    option1: { label: '완주했다는 성취감을 느낀다', value: 1 },
    option2: { label: '그냥 시간이 빨리 가서 즐겁다', value: 1 },
  },
];

/**
 * 전체 문항 데이터 (80개)
 * step 번호로 인덱싱하기 쉽게 배열로 구성
 */
export const ALL_QUESTIONS: QuestionVariant[][] = [
  step1_variants, // 0 -> step 1
  step2_variants, // 1 -> step 2
  step3_variants, // 2 -> step 3
  step4_variants, // 3 -> step 4
  step5_variants, // 4 -> step 5
  step6_variants, // 5 -> step 6
  step7_variants, // 6 -> step 7
  step8_variants, // 7 -> step 8
  step9_variants, // 8 -> step 9
  step10_variants, // 9 -> step 10
  step11_variants, // 10 -> step 11
  step12_variants, // 11 -> step 12
  step13_variants, // 12 -> step 13
  step14_variants, // 13 -> step 14
  step15_variants, // 14 -> step 15
  step16_variants, // 15 -> step 16
  step17_variants, // 16 -> step 17
  step18_variants, // 17 -> step 18
  step19_variants, // 18 -> step 19
  step20_variants, // 19 -> step 20
];

/**
 * 특정 단계의 변주 가져오기
 * @param step 1~20
 */
export function getQuestionVariants(step: number): QuestionVariant[] {
  if (step < 1 || step > 20) {
    throw new Error(`Invalid step: ${step}. Step must be between 1 and 20.`);
  }
  return ALL_QUESTIONS[step - 1];
}

/**
 * 특정 단계의 특정 변주 가져오기
 * @param step 1~20
 * @param variant 'A' | 'B' | 'C' | 'D'
 */
export function getQuestion(
  step: number,
  variant: 'A' | 'B' | 'C' | 'D',
): QuestionVariant {
  const variants = getQuestionVariants(step);
  const question = variants.find((q) => q.variant === variant);

  if (!question) {
    throw new Error(`Question not found for step ${step} variant ${variant}`);
  }

  return question;
}
