import authImg from "@/assets/image/auth/auth-image.jpg";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import SocialLogin from "@/components/Auth/SocialLogin";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
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
              Welcome Back!!
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
                type="name"
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
              Login
            </button>
          </form>

          <div className="space-y-8">
            <SocialLogin />

            <p className="text-base text-primary font-maax">
              Don{"'"}t have an account?{" "}
              <Link to="/register" className="font-bold">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
