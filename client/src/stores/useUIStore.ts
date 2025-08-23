import { create } from "zustand";

interface UIState {
  isSlided: number,
  profileZIndex: number,
  slide: () => void
}

export const useUIState = create<UIState>((set, get) => ({
    isSlided: -330,
    profileZIndex: -1,
    slide: () => {
        set((state) => ({ isSlided: state.isSlided === -330 ? 0 : -330 }))
        const currentState = get()
        setTimeout(() => {
            set((state) => ({ profileZIndex: state.isSlided === -330 ? -1 : 1 }))
        }, currentState.isSlided === 0 ? 400 : 0)
    }
}))