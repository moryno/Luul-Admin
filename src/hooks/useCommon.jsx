import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useCommon = () => {
  const navigate = useNavigate();

  const onRedirect = useCallback(
    (url = "") =>
      () => {
        if (url.includes("https://")) {
          window.open(url, "_blank");
        } else {
          navigate(url);
        }
      },
    [navigate],
  );
  return { onRedirect };
};

export const useNavigation = () => {
  const navigate = useNavigate();

  const goBack = useCallback(
    (fallbackUrl = "/") =>
      () => {
        if (fallbackUrl) {
          navigate(fallbackUrl);
        } else if (typeof window !== "undefined" && window.history.length > 1) {
          navigate(-1);
        }
      },
    [navigate],
  );

  return {
    goBack,
    navigateTo: navigate,
  };
};
