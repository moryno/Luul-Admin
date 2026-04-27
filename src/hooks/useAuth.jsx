import { authService } from "@/services";
import { useMutation } from "@tanstack/react-query";
import { useAppDispatch } from "./useAppDispatch";
import { setAuth } from "@/store/slices/authSlice";
import { useAppSelector } from "./useAppSelector";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  const loginMutation = useMutation({
    mutationFn: ({ email, password }) => authService.login({ email, password }),
    onSuccess: ({ data }) => {
      dispatch(
        setAuth({
          user: data.user || null,
          token: data.token,
        }),
      );
    },
    onError: (error) => {
      console.error("Login failed:", error.message);
    },
  });

  return {
    user,
    isAuthenticated,
    login: loginMutation.mutate,
    isLoginLoading: loginMutation.isPending,
    loginError: loginMutation.error,
  };
};
