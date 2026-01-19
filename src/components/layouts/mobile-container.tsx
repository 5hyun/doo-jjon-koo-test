import { ReactNode } from 'react';

interface MobileContainerProps {
  children: ReactNode;
}

/**
 * 모바일 우선 컨테이너 레이아웃
 * PC 환경에서도 모바일 스타일을 유지하며 중앙 정렬
 */
export function MobileContainer({ children }: MobileContainerProps) {
  return (
    <div className='min-h-screen flex justify-center bg-gradient-to-br from-vintage-cream via-vintage-beige to-vintage-sand'>
      <div className='w-full max-w-mobile bg-vintage-cream shadow-2xl min-h-screen relative'>
        {/* 배경 장식 (선택적) */}
        <div className='absolute top-8 right-8 text-6xl opacity-10 select-none'>
          ☕
        </div>
        <div className='absolute bottom-8 left-8 text-6xl opacity-10 select-none'>
          🍪
        </div>

        {/* 실제 컨텐츠 */}
        <div className='relative z-10'>{children}</div>
      </div>
    </div>
  );
}
