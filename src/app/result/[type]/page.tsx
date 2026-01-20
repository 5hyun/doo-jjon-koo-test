'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { getResultById } from '@/data/results';
import { useTestStore } from '@/store/use-test-store';
import { Button } from '@/components/ui/button';
import { KakaoAd, CoupangAd } from '@/components/ads';

interface ResultPageProps {
  params: Promise<{ type: string }>;
}

/**
 * 결과 페이지
 */
export default function ResultPage({ params }: ResultPageProps) {
  const router = useRouter();
  const reset = useTestStore((state) => state.reset);
  const [resultId, setResultId] = React.useState<string | null>(null);

  React.useEffect(() => {
    params.then((resolvedParams) => {
      setResultId(resolvedParams.type);
    });
  }, [params]);

  if (!resultId) {
    return <div>Loading...</div>;
  }

  const result = getResultById(resultId);

  if (!result) {
    router.push('/');
    return null;
  }

  const handleReset = () => {
    reset();
    router.push('/');
  };

  // 공유 메시지 생성
  const shareMessage = `나는 "${result.title}"! 🍪\n두바이 쫀득 쿠키 테스트: ${result.mbti}-${result.variant}\n\n바삭함 ${result.scores.crunch}% | 쫀득함 ${result.scores.stickiness}% | 고소함 ${result.scores.nutty}%`;

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: '두바이 쫀득 쿠키 테스트',
          text: shareMessage,
          url: window.location.href,
        })
        .catch(() => {
          // 공유 실패 시 클립보드에 복사
          navigator.clipboard.writeText(shareMessage);
          alert('결과가 클립보드에 복사되었습니다!');
        });
    } else {
      // Web Share API 미지원 시 클립보드에 복사
      navigator.clipboard.writeText(shareMessage);
      alert('결과가 클립보드에 복사되었습니다!');
    }
  };

  return (
    <div className='min-h-screen px-6 py-12'>
      {/* 헤더 */}
      <div className='text-center mb-8'>
        <div className='text-7xl mb-4'>🍪</div>
        <h1 className='text-3xl font-serif font-bold text-coffee-dark mb-2'>
          {result.title}
        </h1>
        <p className='text-lg text-pistachio-dark font-bold'>
          {result.mbti}-{result.variant}
        </p>
      </div>

      {/* 설명 */}
      <div className='max-w-lg mx-auto bg-vintage-beige/50 rounded-2xl p-6 mb-8 shadow-lg'>
        <p className='text-coffee-dark leading-relaxed'>{result.description}</p>
      </div>

      {/* 쿠키 특성 점수 */}
      <div className='max-w-lg mx-auto mb-8'>
        <h3 className='text-xl font-bold text-coffee-dark mb-4 text-center'>
          쿠키 특성
        </h3>

        <div className='space-y-4'>
          {/* 바삭함 */}
          <div>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-sm font-medium text-coffee-dark'>
                바삭함 (카다이프)
              </span>
              <span className='text-sm font-bold text-pistachio-dark'>
                {result.scores.crunch}%
              </span>
            </div>
            <div className='w-full h-3 bg-vintage-sand rounded-full overflow-hidden'>
              <div
                className='h-full bg-coffee-light transition-all duration-500'
                style={{ width: `${result.scores.crunch}%` }}
              />
            </div>
          </div>

          {/* 쫀득함 */}
          <div>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-sm font-medium text-coffee-dark'>
                쫀득함 (반죽)
              </span>
              <span className='text-sm font-bold text-pistachio-dark'>
                {result.scores.stickiness}%
              </span>
            </div>
            <div className='w-full h-3 bg-vintage-sand rounded-full overflow-hidden'>
              <div
                className='h-full bg-coffee-medium transition-all duration-500'
                style={{ width: `${result.scores.stickiness}%` }}
              />
            </div>
          </div>

          {/* 고소함 */}
          <div>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-sm font-medium text-coffee-dark'>
                고소함 (피스타치오)
              </span>
              <span className='text-sm font-bold text-pistachio-dark'>
                {result.scores.nutty}%
              </span>
            </div>
            <div className='w-full h-3 bg-vintage-sand rounded-full overflow-hidden'>
              <div
                className='h-full bg-pistachio-dark transition-all duration-500'
                style={{ width: `${result.scores.nutty}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 케미 매칭 */}
      <div className='max-w-lg mx-auto mb-8 grid grid-cols-2 gap-4'>
        <div className='bg-pistachio-light/30 rounded-xl p-4 text-center'>
          <p className='text-sm text-coffee-medium mb-1'>환상의 짝꿍</p>
          <p className='text-lg font-bold text-pistachio-dark'>
            {result.matching.good}
          </p>
        </div>
        <div className='bg-coffee-light/20 rounded-xl p-4 text-center'>
          <p className='text-sm text-coffee-medium mb-1'>상극 쿠키</p>
          <p className='text-lg font-bold text-coffee-dark'>
            {result.matching.bad}
          </p>
        </div>
      </div>

      {/* 광고 영역 */}
      <div className='max-w-lg mx-auto space-y-4 mb-8'>
        {/* 카카오 애드핏 광고 */}
        <KakaoAd 
          location="result"
          width={320} 
          height={100}
          className="flex justify-center"
        />
        
        {/* 쿠팡 파트너스 광고 - 배너 타입 */}
        <CoupangAd 
          subId={`result-${resultId}`}
          type="banner"
          className="w-full"
        />
      </div>

      {/* 액션 버튼들 */}
      <div className='max-w-lg mx-auto space-y-3'>
        <Button size='lg' className='w-full' onClick={handleShare}>
          결과 공유하기
        </Button>

        <Button
          variant='outline'
          size='lg'
          className='w-full'
          onClick={handleReset}
        >
          다시 하기
        </Button>
      </div>
    </div>
  );
}
