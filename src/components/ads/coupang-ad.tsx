'use client';

interface CoupangAdProps {
  /**
   * 쿠팡 파트너스 서브 ID (트래킹용)
   */
  subId?: string;
  /**
   * 광고 타입: 'banner' | 'dynamic'
   */
  type?: 'banner' | 'dynamic';
  /**
   * 추가 CSS 클래스
   */
  className?: string;
}

/**
 * 쿠팡 파트너스 광고 컴포넌트
 * 
 * 사용법:
 * 1. 쿠팡 파트너스 가입 (https://partners.coupang.com)
 * 2. 광고 링크 생성
 * 3. .env.local 파일에 환경 변수 설정
 *    - NEXT_PUBLIC_COUPANG_PARTNER_ID
 *    - NEXT_PUBLIC_COUPANG_DYNAMIC_LINK
 *    - NEXT_PUBLIC_COUPANG_BANNER_LINK
 *    - NEXT_PUBLIC_COUPANG_BANNER_IMAGE
 * 4. subId로 페이지별 트래킹 설정
 * 
 * @example
 * <CoupangAd subId="main-page" type="banner" />
 */
export function CoupangAd({ 
  subId = 'default',
  type = 'banner',
  className = ''
}: CoupangAdProps) {
  // 환경 변수에서 쿠팡 파트너스 정보 가져오기
  const dynamicLink = process.env.NEXT_PUBLIC_COUPANG_DYNAMIC_LINK || '';
  const bannerLink = process.env.NEXT_PUBLIC_COUPANG_BANNER_LINK || '';
  const bannerImage = process.env.NEXT_PUBLIC_COUPANG_BANNER_IMAGE || '';

  // SubId를 URL에 추가
  const addSubId = (url: string): string => {
    if (!url) return '#';
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}subId=${subId}`;
  };

  const adUrl = type === 'banner' ? addSubId(bannerLink) : addSubId(dynamicLink);

  // 배너 광고
  if (type === 'banner') {
    return (
      <div className={`coupang-ad-container ${className}`}>
        <a 
          href={adUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {bannerImage ? (
            <img 
              src={bannerImage}
              alt="쿠팡 파트너스 광고" 
              className="w-full h-auto"
            />
          ) : (
            <div className="w-full h-24 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg flex items-center justify-center border border-red-100">
              <p className="text-sm text-red-600">쿠팡 배너 광고</p>
            </div>
          )}
        </a>
        <p className="text-[10px] text-gray-500 text-center mt-1">
          이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
        </p>
      </div>
    );
  }

  // 동적 광고 (상품 링크)
  return (
    <div className={`coupang-ad-container ${className}`}>
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 text-center border border-red-100">
        <p className="text-sm font-bold text-red-600 mb-2">
          🎁 특별 할인 혜택
        </p>
        <a 
          href={adUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
        >
          쿠팡에서 두바이 초콜릿 보기
        </a>
        <p className="text-[10px] text-gray-500 mt-2">
          이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
        </p>
      </div>
    </div>
  );
}
