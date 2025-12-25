import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import BookingVehicles from "./BookingVehicles";
import { FaUserCircle } from "react-icons/fa";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      </div>

      {/* User Info Card */}
      <div className="max-w-xl bg-white rounded-xl shadow p-6 mx-auto mb-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* User Icon */}

          {/* User Info Table */}
          <div className="flex-1 w-full">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
              <FaUserCircle className="text-gray-400 text-14xl md:text-16xl" />{" "}
              <p> User Information </p>
            </h2>
            <div className="grid grid-cols-2 gap-2 text-gray-700 mb-2">
              <span className="font-medium">Name:</span>
              <span>{user.name}</span>

              <span className="font-medium">Email:</span>
              <span>{user.email}</span>

              <span className="font-medium">Phone:</span>
              <span>{user.phone || "N/A"}</span>

              <span className="font-medium">Role:</span>
              <span>{user.role}</span>

              <span className="font-medium">Joined:</span>
              <span className="flex justify-between items-center">
                {new Date(user.created_at).toLocaleDateString()}
              </span>
              <button
                onClick={logout}
                className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bookings Section */}
      <BookingVehicles />
    </div>
  );
};

export default Dashboard;
