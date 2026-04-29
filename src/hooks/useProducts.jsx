import { productService } from "@/services";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useProducts = (params) => {
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery({
    queryKey: ["products", params],
    queryFn: () => productService.getProducts(params),
    enabled: !!params,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    retry: 3,
    retryDelay: 1000,
  });

  const products = data?.data?.content || data?.content || data || [];
  const totalPages = data?.data?.totalPages || data?.totalPages || 0;
  const totalProducts = data?.data?.totalItems || data?.totalItems || 0;
  const currentPage = data?.data?.currentPage || data?.currentPage || 0;

  return {
    products,
    totalProducts,
    currentPage,
    totalPages,
    isLoading,
    isFetching,
    isError,
    error: isError ? error?.message || "An error occurred" : null,
    refetch,
    hasProducts: products.length > 0,
    isEmpty: !isLoading && !isError && products.length === 0,
  };
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  const productMutation = useMutation({
    mutationFn: (product) => productService.createProduct(product),
    onSuccess: (data, variables) => {
      console.log("data", data);
      console.log("variables", variables);
      queryClient.invalidateQueries(["products"]);
    },
    onError: (error) => {
      console.error("Creating product failed:", error.message);
    },
  });
  return {
    createProduct: productMutation.mutate,
    isLoading: productMutation.isPending,
    error: productMutation.error,
  };
};
