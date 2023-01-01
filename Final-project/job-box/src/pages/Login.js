import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import loginImage from "../assets/login.svg";
import { googleLogin, loginUser } from "../features/auth/authSlice";
const Login = () => {
  const { isLoading, email, error, isError } = useSelector(
    (state) => state.auth
  );
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => {
    dispatch(loginUser({ email, password }));
  };

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  useEffect(() => {
    if (!isLoading && email) {
      navigate("/");
    }
  }, [isLoading, email, navigate]);

  useEffect(() => {
    if (isError) {
      toast.error(error);
    }
  }, [isError, error]);

  return (
    <div className="flex items-center h-screen">
      <div className="w-1/2">
        <img src={loginImage} className="w-full h-full" alt="" />
      </div>
      <div className="grid w-1/2 place-items-center">
        <div className="bg-[#FFFAF4] rounded-lg grid place-items-center p-10">
          <h1 className="mb-10 text-2xl font-medium">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
              <div className="flex flex-col items-start">
                <label htmlFor="email" className="ml-5">
                  Email
                </label>
                <input type="email" {...register("email")} id="email" />
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="password" className="ml-5">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                />
              </div>
              <div className="relative !mt-8">
                <button
                  type="submit"
                  className="w-full py-3 font-bold text-white rounded-full bg-primary"
                >
                  Login
                </button>
              </div>
              <div>
                <p>
                  Don't have an account?{" "}
                  <span
                    className="cursor-pointer text-primary hover:underline"
                    onClick={() => navigate("/signup")}
                  >
                    Sign up
                  </span>
                </p>
              </div>
              <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center w-full py-3 font-bold text-white rounded-full bg-primary"
              >
                <AiOutlineGoogle className="mr-2 " />
                <span>Google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
