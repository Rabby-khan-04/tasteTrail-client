import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <button className="text-xl bg-black flex items-center gap-3 justify-center w-full p-4 text-white rounded-md transition-all duration-200 hover:opacity-75">
      <span>Login In With Google</span> <FcGoogle />
    </button>
  );
};

export default SocialLogin;
