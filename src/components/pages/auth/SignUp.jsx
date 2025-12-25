import React from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../services/useAxiosSecure";

const SignUp = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const form = e.target;

    const userInfo = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      password: form.password.value,
      role: "customer",
    };

    try {
      const res = await axiosSecure.post("/auth/signup", userInfo);

      if (res.data?.success) {
        Swal.fire({
          icon: "success",
          title: "Signup Successful!",
          text: "Your account has been created successfully 🎉",
          confirmButtonColor: "#570df8",
        }).then(() => {
          navigate("/SignIn");
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Signup Failed",
        text: error.response?.data?.message || "Something went wrong!",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">
            Create an Account
          </h2>

          <form onSubmit={handleSignUp} className="space-y-4">
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

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

            {/* Phone */}
            <div>
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                name="phone"
                type="text"
                placeholder="01XXXXXXXXX"
                className="input input-bordered w-full"
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
                placeholder="Enter password"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Role */}
            <div>
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select className="select select-bordered w-full">
                <option value="customer">Customer</option>
              </select>
            </div>

            {/* Button */}
            <button className="btn btn-primary w-full">Sign Up</button>
          </form>

          {/* Redirect */}
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/SignIn" className="link link-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
