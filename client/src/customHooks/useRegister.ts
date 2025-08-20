import { useMutation } from "@tanstack/react-query";
import { register } from "../apiCalls";
import { type User } from "../types/types";

export const useRegister = () => {
    return useMutation({
        mutationFn: (user: User) => register(user.fullName, user.email, user.password, user.phone, user.addresses, user.role)
    })
}