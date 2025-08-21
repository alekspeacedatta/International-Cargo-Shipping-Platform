import { useMutation } from "@tanstack/react-query";
import { login } from "../apiCalls";
import { useAuthStore } from "../stores/useAuthStore";

export const useLogin = () => {
    const setUser = useAuthStore(state => state.setUser);

    return useMutation({
        mutationFn: ({ email, password }: { email: string, password: string }) => login(email, password),
        onSuccess: (data) => {
            setUser(data.checkUser)
        },
        onError: (error: any) => {
            console.error("login failed", error.message);
        }
        
    })
}