import { create } from "zustand";

interface UIState {
  isSlided: number,
  profileZIndex: number,
  boxShadow: string,
  slide: () => void
}

export const useUIState = create<UIState>((set, get) => ({
    isSlided: -430,
    profileZIndex: -1,
    boxShadow: 'none',
    slide: () => {
        set((state) => ({ isSlided: state.isSlided === -430 ? 0 : -430 }))
        const currentState = get()
        setTimeout(() => {
            set((state) => ({ profileZIndex: state.isSlided === -430 ? -1 : 1 }))
        }, currentState.isSlided === 0 ? 400 : 0)
        setTimeout(() => {
            set((state) => ({ boxShadow: state.isSlided === -430 ? 'none' : 'rgba(0, 0, 0, 0.26) 0px 1px 4px' }))
        }, 200)
        
    }
}))