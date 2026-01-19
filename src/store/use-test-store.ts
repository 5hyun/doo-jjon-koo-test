import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Dimension, TestScores } from '@/types/test';

/**
 * 테스트 상태 인터페이스
 */
interface TestState {
  /** 각 지표별 누적 점수 */
  answers: TestScores;

  /** 현재 단계 (1~20) */
  currentStep: number;

  /** 각 단계별 선택된 변주 (A, B, C, D) */
  selectedVariants: Record<number, 'A' | 'B' | 'C' | 'D'>;

  /** 테스트 완료 여부 */
  isCompleted: boolean;
}

/**
 * 테스트 액션 인터페이스
 */
interface TestActions {
  /** 답변 저장 (지표에 점수 추가) */
  setAnswer: (dimension: Dimension, score: number) => void;

  /** 다음 단계로 이동 */
  nextStep: () => void;

  /** 특정 단계의 변주 저장 */
  setVariant: (step: number, variant: 'A' | 'B' | 'C' | 'D') => void;

  /** 특정 단계로 이동 */
  goToStep: (step: number) => void;

  /** 테스트 완료 표시 */
  completeTest: () => void;

  /** 초기화 (다시 하기) */
  reset: () => void;
}

type TestStore = TestState & TestActions;

/**
 * 초기 상태
 */
const initialState: TestState = {
  answers: {
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0,
  },
  currentStep: 1,
  selectedVariants: {},
  isCompleted: false,
};

/**
 * Zustand Store with persist middleware
 * SessionStorage에 저장하여 새로고침 시에도 데이터 유지
 */
export const useTestStore = create<TestStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      setAnswer: (dimension: Dimension, score: number) => {
        set((state) => ({
          answers: {
            ...state.answers,
            [dimension]: state.answers[dimension] + score,
          },
        }));
      },

      nextStep: () => {
        const currentStep = get().currentStep;

        if (currentStep >= 20) {
          set({ isCompleted: true });
        } else {
          set({ currentStep: currentStep + 1 });
        }
      },

      setVariant: (step: number, variant: 'A' | 'B' | 'C' | 'D') => {
        set((state) => ({
          selectedVariants: {
            ...state.selectedVariants,
            [step]: variant,
          },
        }));
      },

      goToStep: (step: number) => {
        if (step >= 1 && step <= 20) {
          set({ currentStep: step, isCompleted: false });
        }
      },

      completeTest: () => {
        set({ isCompleted: true });
      },

      reset: () => {
        set(initialState);
      },
    }),
    {
      name: 'doo-jjon-koo-test-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
