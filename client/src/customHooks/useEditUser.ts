import { useMutation } from "@tanstack/react-query";
import { editUser } from "../apiCalls";
import { type User } from "../types/types";
import { useAuthStore } from "../stores/useAuthStore";

export const useEditUser = () => {
  const edit = useAuthStore(state => state.edit);
  const user = useAuthStore(state => state.user);

  return useMutation({
    mutationFn: (updateData: User) => {
      if (!user) throw new Error("User not authenticated");
      
      return editUser(
        updateData.fullName,
        updateData.email,
        updateData.password || null,
        updateData.phone,
        updateData.addresses,
        user.role,
        user._id
      );
    },
    onSuccess: (data) => {
      if (data) edit(data);
    },
    onError: (error: Error) => {
      console.error("Update failed:", error.message);
    },
  });
};