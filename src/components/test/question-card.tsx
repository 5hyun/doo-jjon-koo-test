import { QuestionVariant } from '@/types/test';
import { Button } from '@/components/ui/button';

interface QuestionCardProps {
  question: QuestionVariant;
  onAnswer: (optionIndex: 1 | 2) => void;
}

/**
 * 문항 카드 컴포넌트
 */
export function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  return (
    <div className='w-full px-6 py-8'>
      {/* 문항 제목 */}
      <div className='mb-8 text-center'>
        <h2 className='text-2xl font-serif font-bold text-coffee-dark mb-2'>
          {question.title}
        </h2>
        <p className='text-sm text-coffee-medium'>
          더 가까운 것을 선택해주세요
        </p>
      </div>

      {/* 선택지 버튼들 */}
      <div className='flex flex-col gap-4'>
        <Button
          variant='outline'
          size='lg'
          className='w-full h-auto min-h-[88px] text-lg whitespace-normal leading-relaxed px-6 py-4'
          onClick={() => onAnswer(1)}
        >
          {question.option1.label}
        </Button>

        <Button
          variant='outline'
          size='lg'
          className='w-full h-auto min-h-[88px] text-lg whitespace-normal leading-relaxed px-6 py-4'
          onClick={() => onAnswer(2)}
        >
          {question.option2.label}
        </Button>
      </div>
    </div>
  );
}
