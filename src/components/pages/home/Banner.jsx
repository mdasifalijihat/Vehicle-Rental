import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../services/useAxiosSecure";

const Banner = () => {
  const axiosSecure = useAxiosSecure();

  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  const defaultImage = "https://via.placeholder.com/250x150?text=No+Image";

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await axiosSecure.get("/vehicles");
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

  if (loading)
    return <div className="text-center mt-10 text-gray-500">Loading...</div>;

  return (
    <div className="w-full py-6 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
        Featured Vehicles
      </h2>
      <div className="flex overflow-x-auto gap-4 px-4">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="min-w-62.5 bg-white shadow-lg rounded-xl overflow-hidden shrink-0"
          >
            <img
              src={vehicle.image || defaultImage}
              alt={vehicle.vehicle_name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {vehicle.vehicle_name}
              </h3>
              
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
