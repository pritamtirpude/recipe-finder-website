import { create } from 'zustand';

type FilterStoreState = {
  isPrepTimeOpen: boolean;
  isCookTimeOpen: boolean;
  togglePrepTime: () => void;
  toggleCookTime: () => void;
  closePrepTime: () => void;
  closeCookTime: () => void;
};

export const useFilterStore = create<FilterStoreState>((set) => ({
  isPrepTimeOpen: false,
  isCookTimeOpen: false,
  togglePrepTime: () => set((state) => ({ isPrepTimeOpen: !state.isPrepTimeOpen })),
  toggleCookTime: () => set((state) => ({ isCookTimeOpen: !state.isCookTimeOpen })),
  closePrepTime: () => set({ isPrepTimeOpen: false }),
  closeCookTime: () => set({ isCookTimeOpen: false }),
}));
