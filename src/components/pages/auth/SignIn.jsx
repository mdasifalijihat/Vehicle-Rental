import React, { useContext } from "react";
import { Link, useNavigate } from "react-router"; // must be react-router-dom
import Swal from "sweetalert2";
import { AuthContext } from "../../../context/AuthContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await login(email, password); // ✅ call context login
      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "SignIn Successful!",
          text: "Welcome back 🎉",
        });
        navigate("/");
      } else {
        Swal.fire({ icon: "error", title: "Failed", text: res.message });
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Something went wrong",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">
            Login to Your Account
          </h2>

          <form onSubmit={handleSignIn} className="space-y-4">
            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                Remember me
              </label>
              <span className="link link-hover">Forgot password?</span>
            </div>

            {/* Button */}
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>

          {/* Redirect */}
          <p className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <Link to="/SignUp" className="link link-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
