import authImg from "@/assets/image/auth/auth-image.jpg";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "@/components/Auth/SocialLogin";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const Register = () => {
  const { registerUser, updateUserProfile } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { mutateAsync: createUserIntoDatabase } = useMutation({
    mutationFn: (userInfo) => axiosSecure.post("/users/user", userInfo),
    onSuccess: () => {
      toast.success("User registered successfully!!");
      navigate("/");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const displayName = data.name;
    const email = data.email;
    const password = data.password;

    registerUser(email, password)
      .then(async (createdUser) => {
        if (createdUser) {
          await updateUserProfile({ displayName });
          const userInfo = {
            email: createdUser.user.email,
            name: createdUser.user.displayName,
          };
          createUserIntoDatabase(userInfo);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main className="bg-almond h-screen flex items-center">
      <div className="container grid grid-cols-5">
        <div className="col-span-3">
          <img
            src={authImg}
            alt=""
            className="w-full inline-block rounded-l-3xl"
          />
        </div>
        <div className="col-span-2 bg-granny_smith_apple/40 rounded-r-3xl p-10 text-center space-y-6">
          <div className="">
            <h1 className="font-louize text-3xl xl:text-5xl mb-5 text-primary">
              TeasteTrail
            </h1>
            <h2 className="font-louize_medium text-4xl xl:text-7xl mb-3 text-primary">
              Welcome!!
            </h2>
            <p className="text-xl font-maax text-primary">
              Please Enter your details
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-left space-y-3"
          >
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
                className="block border-primary text-lg text-primary placeholder:text-lg placeholder:text-primary font-maax py-3 px-5 appearance-none"
              />
              <p className="text-sm text-red-500 font-maax">
                {errors.name && <span>This field is required</span>}
              </p>
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="block border-primary text-lg text-primary placeholder:text-lg placeholder:text-primary font-maax py-3 px-5 appearance-none"
              />
              <p className="text-sm text-red-500 font-maax">
                {errors.email && <span>This field is required</span>}
              </p>
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
                className="block border-primary text-lg text-primary placeholder:text-lg placeholder:text-primary font-maax py-3 px-5 appearance-none"
              />
              <p className="text-sm text-red-500 font-maax">
                {errors.password && <span>This field is required</span>}
              </p>
            </div>

            <button
              className="text-xl bg-primary inline-block w-full p-4 text-white rounded-md transition-all duration-200 hover:opacity-75"
              type="submit"
            >
              Register
            </button>
          </form>

          <div className="space-y-8">
            <SocialLogin />

            <p className="text-base text-primary font-maax">
              Already have an account?{" "}
              <Link to="/login" className="font-bold">
                Login.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
