import { create } from "zustand";
import { persist } from "zustand/middleware";
interface AuthState {
  user: any | null;
  token: string | null;
  setUser: (user: any) => void;
  logout: () => void;
  edit: (user: any) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user) => {
        set({ user });
      },
      logout: () => {
        set({ user: null});
        localStorage.clear()
      },
      edit: (data) => {
        set({ user: data})
      },
    }),
    {
      name: "auth-storage", 
    }
  )
);