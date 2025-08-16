import { create } from 'zustand';

type MobileStoreState = {
  isOpen: boolean;
  toggle: () => void;
};

const useMobileStore = create<MobileStoreState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useMobileStore;
