import { create } from 'zustand';

type FilterStoreState = {
  isPrepTimeOpen: boolean;
  isCookTimeOpen?: boolean; // Optional for future use
  togglePrepTime: () => void;
  toggleCookTime: () => void;
};

export const useFilterStore = create<FilterStoreState>((set) => ({
  isPrepTimeOpen: false,
  togglePrepTime: () => set((state) => ({ isPrepTimeOpen: !state.isPrepTimeOpen })),
  isCookTimeOpen: false,
  toggleCookTime: () => set((state) => ({ isCookTimeOpen: !state.isCookTimeOpen })),
}));
