import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAxiosSecure from "../../../services/useAxiosSecure";

const Vehicles = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await axiosSecure.get("/vehicles"); // backend route
        const vehicleArray = res.data?.data || [];
        setVehicles(vehicleArray);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, [axiosSecure]);

  const handleBookNow = (vehicleId) => {
    navigate(`/book/${vehicleId}`);
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Vehicles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold">{vehicle.vehicle_name}</h2>
              <p className="text-gray-600 capitalize">{vehicle.type}</p>
              <p className="text-gray-500">
                Reg No: {vehicle.registration_number}
              </p>
              <p className="mt-2 font-bold text-lg">
                ${vehicle.daily_rent_price}/day
              </p>
              <p
                className={`mt-1 font-medium ${
                  vehicle.availability_status === "available"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {vehicle.availability_status}
              </p>
            </div>
            <button
              disabled={vehicle.availability_status !== "available"}
              onClick={() => handleBookNow(vehicle.id)}
              className="mt-4 btn btn-primary w-full disabled:opacity-50"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
