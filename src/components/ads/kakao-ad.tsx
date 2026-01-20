'use client';

import { useEffect, useRef, useState } from 'react';

type AdLocation = 'main' | 'test' | 'result';

interface KakaoAdProps {
  /**
   * 광고 위치 (main: 메인 페이지, test: 테스트 페이지, result: 결과 페이지)
   * 환경 변수에서 해당하는 광고 단위 ID를 자동으로 가져옵니다.
   */
  location: AdLocation;
  /**
   * 광고 슬롯 너비 (px)
   */
  width?: number;
  /**
   * 광고 슬롯 높이 (px)
   */
  height?: number;
  /**
   * 추가 CSS 클래스
   */
  className?: string;
}

/**
 * 카카오 애드핏 광고 컴포넌트
 * 
 * 사용법:
 * 1. 카카오 애드핏에서 광고 단위 3개 생성 (https://adfit.kakao.com)
 *    - 메인 페이지용
 *    - 테스트 페이지용
 *    - 결과 페이지용
 * 2. .env.local 파일에 환경 변수 설정
 *    - NEXT_PUBLIC_KAKAO_AD_MAIN
 *    - NEXT_PUBLIC_KAKAO_AD_TEST
 *    - NEXT_PUBLIC_KAKAO_AD_RESULT
 * 3. location prop으로 위치 지정
 * 
 * @example
 * <KakaoAd location="main" width={320} height={100} />
 */
export function KakaoAd({ 
  location,
  width = 320, 
  height = 100,
  className = '' 
}: KakaoAdProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const isAdLoaded = useRef(false);
  const [isMounted, setIsMounted] = useState(false);

  // 환경 변수에서 광고 단위 ID 가져오기
  const getAdUnit = (): string => {
    switch (location) {
      case 'main':
        return process.env.NEXT_PUBLIC_KAKAO_AD_MAIN || 'DAN-XXXXXXXXXX';
      case 'test':
        return process.env.NEXT_PUBLIC_KAKAO_AD_TEST || 'DAN-YYYYYYYYYY';
      case 'result':
        return process.env.NEXT_PUBLIC_KAKAO_AD_RESULT || 'DAN-ZZZZZZZZZZ';
      default:
        return 'DAN-XXXXXXXXXX';
    }
  };

  const unit = getAdUnit();

  // 클라이언트에서만 마운트
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    // 광고가 이미 로드되었으면 스킵
    if (isAdLoaded.current) return;

    // 카카오 애드핏 스크립트 동적 로드
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', '//t1.daumcdn.net/kas/static/ba.min.js');
    script.async = true;

    script.onload = () => {
      isAdLoaded.current = true;
    };

    if (adRef.current) {
      adRef.current.appendChild(script);
    }

    return () => {
      // 클린업
      isAdLoaded.current = false;
    };
  }, [unit, isMounted]);

  // 클라이언트에서만 광고 렌더링 (hydration error 방지)
  if (!isMounted) {
    return <div className={`kakao-ad-container ${className}`} style={{ minHeight: height }} />;
  }

  return (
    <div className={`kakao-ad-container ${className}`} suppressHydrationWarning>
      <div ref={adRef} suppressHydrationWarning>
        <ins
          className="kakao_ad_area"
          style={{ display: 'none' }}
          data-ad-unit={unit}
          data-ad-width={width}
          data-ad-height={height}
        />
      </div>
    </div>
  );
}
