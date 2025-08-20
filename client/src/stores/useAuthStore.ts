import { create } from "zustand";

interface AuthState {
  user: any | null;
  token: string | null;
  setUser: (user: any, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  setUser: (user, token) => set({ user, token }),
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));
