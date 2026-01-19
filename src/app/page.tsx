'use client';

import Link from 'next/link';
import { useTestStore } from '@/store/use-test-store';
import { Button } from '@/components/ui/button';

/**
 * 랜딩 페이지
 */
export default function HomePage() {
  const reset = useTestStore((state) => state.reset);

  const handleStart = () => {
    reset(); // 테스트 시작 전 초기화
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-b from-vintage-cream to-vintage-beige'>
      {/* 메인 타이틀 */}
      <div className='text-center mb-12'>
        <div className='text-6xl mb-4'>🍪</div>
        <h1 className='text-4xl font-serif font-bold text-coffee-dark mb-3'>
          두바이 쫀득 쿠키
        </h1>
        <p className='text-lg text-coffee-medium'>
          나는 어떤 두바이 쫀득 쿠키일까?
        </p>
      </div>

      {/* 설명 카드 */}
      <div className='max-w-md w-full bg-vintage-beige/50 rounded-2xl p-6 mb-8 shadow-lg'>
        <p className='text-coffee-dark leading-relaxed text-center'>
          20개의 질문으로 알아보는
          <br />
          <span className='font-bold text-pistachio-dark'>
            나만의 쿠키 성향 테스트
          </span>
        </p>
        <div className='mt-4 flex items-center justify-center gap-4 text-sm text-coffee-medium'>
          <span>⏱️ 약 3분 소요</span>
          <span>•</span>
          <span>📊 32가지 결과</span>
        </div>
      </div>

      {/* 시작 버튼 */}
      <Link href='/test/1' onClick={handleStart}>
        <Button size='lg' className='px-12 text-lg'>
          시작하기
        </Button>
      </Link>

      {/* 장식 요소 */}
      <div className='mt-12 text-center text-sm text-coffee-medium opacity-60'>
        <p>피스타치오 + 카다이프의 매력</p>
        <p className='mt-1'>두바이 초콜릿 트렌드 🌟</p>
      </div>
    </div>
  );
}
