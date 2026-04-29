import logoUrl from "@/assets/images/errors/something-wrong.svg";

const ErrorIcon = () => {
  return (
    <img
      src={logoUrl}
      alt="Error"
      style={{ width: "100%", maxWidth: "300px" }}
    />
  );
};

export default ErrorIcon;
