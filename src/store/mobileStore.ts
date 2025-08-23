import { create } from 'zustand';

type MobileStoreState = {
  isOpen: boolean;
  toggle: () => void;
  isActive: 'home' | 'about' | 'recipes';
  setIsActive: (active: 'home' | 'about' | 'recipes') => void;
};

const useMobileStore = create<MobileStoreState>((set) => ({
  isOpen: false,
  isActive: 'home',
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsActive: (active) => set({ isActive: active }),
}));

export default useMobileStore;
