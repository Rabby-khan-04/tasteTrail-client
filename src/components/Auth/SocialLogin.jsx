import AuthContext from "@/context/AuthContext";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { mutateAsync: createUserIntoDatabase } = useMutation({
    mutationFn: (userInfo) => axiosSecure.post("/users/user", userInfo),
    onSuccess: () => {
      toast.success("User registered successfully!!");
      navigate("/");
    },
  });

  const handleGoogleLogin = () => {
    googleLogin()
      .then((loggedInUser) => {
        const userInfo = {
          email: loggedInUser.user.email,
          name: loggedInUser.user.displayName,
        };
        createUserIntoDatabase(userInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <button
      onClick={handleGoogleLogin}
      className="text-xl bg-black flex items-center gap-3 justify-center w-full p-4 text-white rounded-md transition-all duration-200 hover:opacity-75"
    >
      <span>Login In With Google</span> <FcGoogle />
    </button>
  );
};

export default SocialLogin;
