'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTestStore } from '@/store/use-test-store';
import { getQuestion } from '@/data/questions';
import { selectRandomVariant } from '@/lib/question-selector';
import { ProgressBar } from '@/components/test/progress-bar';
import { QuestionCard } from '@/components/test/question-card';
import { KakaoAd, CoupangAd } from '@/components/ads';

interface TestPageProps {
  params: Promise<{ step: string }>;
}

/**
 * 문항 페이지 (Dynamic Route)
 */
export default function TestPage({ params }: TestPageProps) {
  const router = useRouter();
  const { setAnswer, nextStep, setVariant, selectedVariants } = useTestStore();
  const [step, setStep] = React.useState<number | null>(null);

  // params 로딩
  React.useEffect(() => {
    params.then((resolvedParams) => {
      const stepNum = parseInt(resolvedParams.step, 10);

      // 단계 유효성 검사
      if (stepNum < 1 || stepNum > 20) {
        router.push('/');
        return;
      }

      setStep(stepNum);
    });
  }, [params, router]);

  // 변주 변경 시 저장 (step이 로드된 후에만 실행)
  useEffect(() => {
    if (step !== null && !selectedVariants[step]) {
      const variant = selectRandomVariant();
      setVariant(step, variant);
    }
  }, [step, selectedVariants, setVariant]);

  // 로딩 중
  if (step === null) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-coffee-dark'>Loading...</div>
      </div>
    );
  }

  // 해당 단계의 변주 가져오기
  const variant = selectedVariants[step] || 'A';
  const question = getQuestion(step, variant);

  const handleAnswer = (optionIndex: 1 | 2) => {
    const option = optionIndex === 1 ? question.option1 : question.option2;

    // 답변 저장
    setAnswer(question.dimension, option.value);

    // 다음 단계로 이동
    if (step >= 20) {
      // 마지막 문항이면 로딩 페이지로
      router.push('/loading');
    } else {
      // 다음 문항으로
      nextStep();
      router.push(`/test/${step + 1}`);
    }
  };

  return (
    <div className='min-h-screen flex flex-col'>
      {/* 진행률 바 */}
      <ProgressBar current={step} total={20} />

      {/* 문항 카드 */}
      <div className='flex-1 flex items-center justify-center px-4'>
        <QuestionCard question={question} onAnswer={handleAnswer} />
      </div>

      {/* 광고 영역 - UX를 방해하지 않도록 하단에 작게 배치 */}
      <div className='w-full py-4 px-6 bg-vintage-cream/30'>
        <div className='max-w-md mx-auto space-y-3'>
          {/* 카카오 애드핏 - 모든 문제에서 표시 */}
          <KakaoAd 
            location="test"
            width={320} 
            height={50}
            className="flex justify-center"
          />
          
          {/* 쿠팡 광고 - 10번, 20번 문제에서만 표시 (중간, 마지막) */}
          {(step === 10 || step === 20) && (
            <CoupangAd 
              subId={`test-step-${step}`}
              type="dynamic"
              className="w-full"
            />
          )}
        </div>
      </div>
    </div>
  );
}
