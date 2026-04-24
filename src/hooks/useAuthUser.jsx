export const useAuthUser = () => {
  // const user = useSelector((store) => store.auth.user);
  const user = {
    fullName: "James Wanyoike",
    email: "james@live.com",
    address: "Muthaiga",
  };

  return {
    isAuthenticated: !!user,
    user,
  };
};
