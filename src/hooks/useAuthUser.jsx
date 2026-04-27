import { useAppSelector } from "./useAppSelector";

export const useAuthUser = () => {
  const { user, isAuthenticated } = useAppSelector((store) => store.auth);

  return {
    isAuthenticated: isAuthenticated,
    user,
  };
};
