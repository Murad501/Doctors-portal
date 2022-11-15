import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import CommonButton from "../../Components/CommonButton";
import { authContext } from "../../Context/UserContext";

const Login = () => {
  const [error, setError] = useState("");
  const { signInUser, googleLogin } = useContext(authContext);

  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        setError("");
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setError("");
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="card-body max-w-sm mx-auto mt-20 border">
      <h2 className="text-center font-semibold text-2xl">Login</h2>
      {error && <p className="text-red-600 text-center my-1">{error}</p>}
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control">
          <label className="label">
            <span className="text-neutral">Email</span>
          </label>
          <input
            {...register("email")}
            type="email"
            className="input input-bordered border-gray-300"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-neutral">Password</span>
          </label>
          <input
            {...register("password")}
            type="password"
            className="input input-bordered border-gray-300"
          />
          <label className="label">
            <Link to="" className="text-neutral text-sm">
              Forgot password?
            </Link>
          </label>
        </div>
        <div className="form-control mt-3">
          <CommonButton className="btn btn-primary">Login</CommonButton>
        </div>
      </form>
      <div>
        <p className="text-center">
          New to Doctors portal?{" "}
          <Link to="/signup" className="text-secondary">
            Sign up
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline border-neutral text-neutral"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
