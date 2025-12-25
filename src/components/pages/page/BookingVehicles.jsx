import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import useAxiosSecure from "../../../services/useAxiosSecure";

const BookingVehicles = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const [bookings, setBookings] = useState([]);
  const [vehicles, setVehicles] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      try {
        // 1️⃣ Fetch user's bookings
        const resBookings = await axiosSecure.get(
          `/bookings?customer_id=${user.id}`
        );
        const bookingsData = resBookings.data?.data || [];
        setBookings(bookingsData);

        // 2️⃣ Fetch all vehicles
        const resVehicles = await axiosSecure.get("/vehicles");
        const vehiclesData = resVehicles.data?.data || [];
        const vehiclesMap = {};
        vehiclesData.forEach((v) => {
          vehiclesMap[v.id] = v;
        });
        setVehicles(vehiclesMap);
      } catch (error) {
        console.error("Booking fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [axiosSecure, user]);

 

 

  if (loading) {
    return <p className="text-center mt-10">Loading bookings...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">My Booked Vehicles</h1>

      <p className="mb-6 text-gray-600">
        Total Bookings: <span className="font-semibold">{bookings.length}</span>
      </p>

      {bookings.length === 0 ? (
        <p className="text-gray-500">You have no bookings yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {bookings.map((booking) => {
            const vehicle = vehicles[booking.vehicle_id];

            // Status badge color
            let statusColor = "text-yellow-600"; // active default
            if (booking.status === "cancelled") statusColor = "text-red-600";
            if (booking.status === "returned") statusColor = "text-gray-600";

            return (
              <div
                key={booking.id}
                className="bg-white shadow rounded-lg p-4 border flex flex-col justify-between"
              >
                {/* Booking Info */}
                <div>
                  <h2 className="text-lg font-semibold mb-2">
                    {vehicle?.vehicle_name || "Vehicle"}
                  </h2>

                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Type:</span>{" "}
                    {vehicle?.type || "N/A"}
                  </p>

                  <p className="text-sm mb-1">
                    <span className="font-medium">From:</span>{" "}
                    {booking.rent_start_date.slice(0, 10)}
                  </p>

                  <p className="text-sm mb-1">
                    <span className="font-medium">To:</span>{" "}
                    {booking.rent_end_date.slice(0, 10)}
                  </p>

                  <p className="text-sm mb-1">
                    <span className="font-medium">Total Price:</span> ৳
                    {booking.total_price}
                  </p>

                  <p className="text-sm mb-2">
                    <span className="font-medium">Status:</span>{" "}
                    <span className={`font-semibold ${statusColor}`}>
                      {booking.status === "active"
                        ? "Active"
                        : booking.status.charAt(0).toUpperCase() +
                          booking.status.slice(1)}
                    </span>
                  </p>
                </div>                
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BookingVehicles;
