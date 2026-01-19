interface ProgressBarProps {
  current: number;
  total: number;
}

/**
 * 테스트 진행률 표시 컴포넌트
 */
export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className='w-full px-6 py-4'>
      {/* 진행률 텍스트 */}
      <div className='flex justify-between items-center mb-2'>
        <span className='text-sm font-medium text-coffee-dark'>
          {current} / {total}
        </span>
        <span className='text-sm font-bold text-pistachio-dark'>
          {percentage}%
        </span>
      </div>

      {/* 프로그레스 바 */}
      <div className='w-full h-3 bg-vintage-sand rounded-full overflow-hidden'>
        <div
          className='h-full bg-gradient-to-r from-pistachio-light to-pistachio-dark transition-all duration-500 ease-out'
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
