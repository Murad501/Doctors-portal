import { updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import CommonButton from "../../Components/CommonButton";
import { authContext } from "../../Context/UserContext";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { googleLogin, createUser } = useContext(authContext);

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: data.name,
        })
          .then(() => {
            console.log("profile updated");
          })
          .then(() => {});
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div className="card-body max-w-sm mx-auto mt-20 border">
      <h2 className="text-center font-semibold text-2xl">Signup</h2>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="form-control">
          <label className="label">
            <span className="text-neutral">Name</span>
          </label>
          <input
            {...register("name", { required: "name is required" })}
            type="text"
            className="input input-bordered border-gray-300"
          />
          <p>{errors.name?.message}</p>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-neutral">Email</span>
          </label>
          <input
            {...register("email", { required: "email is required" })}
            type="email"
            className="input input-bordered border-gray-300"
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-neutral">Password</span>
          </label>
          <input
            {...register(
              "password",
              { minLength: { value: 8, message: "must be 8 chars" }, 
                pattern: { value: /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])/,
                message: "Password must includes capital letter, number & special character"}}
            )}
            type="password"
            className="input input-bordered border-gray-300"
          />
        </div>
        <p>{errors.password?.message}</p>
        <div className="form-control mt-6">
          <CommonButton className="btn btn-primary">Login</CommonButton>
        </div>
      </form>
      <div>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-secondary">
            Login
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

export default Signup;
