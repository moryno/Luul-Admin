import { cartegoryService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useCategories = (params) => {
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery({
    queryKey: ["categories", params],
    queryFn: () => cartegoryService.getCategories(params),
    retry: 3,
    retryDelay: 1000,
  });

  const categories = data?.data || data || [];

  return {
    categories,
    isLoading,
    isFetching,
    isError,
    error: isError ? error?.message || "An error occurred" : null,
    refetch,
    isEmpty: !isLoading && !isError && categories.length === 0,
  };
};
