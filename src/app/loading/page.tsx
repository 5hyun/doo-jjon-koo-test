'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTestStore } from '@/store/use-test-store';
import { calculateResultId } from '@/lib/calculation';

/**
 * 로딩 페이지 (결과 계산)
 */
export default function LoadingPage() {
  const router = useRouter();
  const answers = useTestStore((state) => state.answers);

  useEffect(() => {
    // 3초 후 결과 페이지로 이동
    const timer = setTimeout(() => {
      const resultId = calculateResultId(answers);
      router.push(`/result/${resultId}`);
    }, 3000);

    return () => clearTimeout(timer);
  }, [answers, router]);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-6'>
      {/* 로딩 애니메이션 */}
      <div className='text-center'>
        <div className='text-8xl mb-8 animate-bounce'>🍪</div>

        <h2 className='text-2xl font-serif font-bold text-coffee-dark mb-4'>
          당신의 쿠키를 굽고 있어요...
        </h2>

        <p className='text-coffee-medium'>잠시만 기다려주세요</p>

        {/* 프로그레스 도트 */}
        <div className='flex gap-2 justify-center mt-8'>
          <div
            className='w-3 h-3 bg-pistachio-dark rounded-full animate-pulse'
            style={{ animationDelay: '0ms' }}
          />
          <div
            className='w-3 h-3 bg-pistachio-dark rounded-full animate-pulse'
            style={{ animationDelay: '200ms' }}
          />
          <div
            className='w-3 h-3 bg-pistachio-dark rounded-full animate-pulse'
            style={{ animationDelay: '400ms' }}
          />
        </div>
      </div>

      {/* 광고 영역 (Phase 7에서 추가 예정) */}
      <div className='mt-16 text-center text-sm text-coffee-medium opacity-50'>
        <p>광고 영역</p>
      </div>
    </div>
  );
}
