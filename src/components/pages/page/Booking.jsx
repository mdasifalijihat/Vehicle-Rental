// import React, { useEffect, useState, useContext } from "react";
// import { useParams, useNavigate } from "react-router";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../../services/useAxiosSecure";
// import { AuthContext } from "../../../context/AuthContext";

// const Booking = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const axiosSecure = useAxiosSecure();
//   const { user } = useContext(AuthContext);
//   const [vehicle, setVehicle] = useState(null);
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchVehicle = async () => {
//       try {
//         const res = await axiosSecure.get(`/bookings/${id}`);
//         setVehicle(res.data.data || res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchVehicle();
//   }, [axiosSecure, id]);

//   const handleBooking = async () => {
//     if (!startDate || !endDate) {
//       return Swal.fire("Error", "Please select start and end date", "error");
//     }

//     try {
//       await axiosSecure.post("/bookings", {
//         vehicle_id: vehicle.id,
//         customer_id: user.id,
//         rent_start_date: startDate,
//         rent_end_date: endDate,
//       });

//       Swal.fire({
//         icon: "success",
//         title: "Booking Successful!",
//         text: `You booked ${vehicle.vehicle_name} 🎉`,
//       }).then(() => navigate("/dashboard"));
//     } catch (err) {
//       Swal.fire({
//         icon: "error",
//         title: "Booking Failed",
//         text: err.response?.data?.message || "Something went wrong",
//       });
//     }
//   };

//   if (!vehicle) return <div className="text-center mt-10">Loading...</div>;

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-4">
//       <h1 className="text-3xl font-bold mb-4">{vehicle.vehicle_name}</h1>
//       <p className="text-gray-600 capitalize mb-2">{vehicle.type}</p>
//       <p className="text-gray-500 mb-2">
//         Reg No: {vehicle.registration_number}
//       </p>
//       <p className="font-bold text-lg mb-4">${vehicle.daily_rent_price}/day</p>

//       <div className="mb-4 flex gap-2">
//         <div>
//           <label className="block mb-1">Start Date:</label>
//           <input
//             type="date"
//             className="input input-bordered"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="block mb-1">End Date:</label>
//           <input
//             type="date"
//             className="input input-bordered"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//           />
//         </div>
//       </div>

//       <button onClick={handleBooking} className="btn btn-primary">
//         Confirm Booking
//       </button>
//     </div>
//   );
// };

// export default Booking;


import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../services/useAxiosSecure";
import { AuthContext } from "../../../context/AuthContext";

const Booking = () => {
  const { id } = useParams(); // vehicle id
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const [vehicle, setVehicle] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const res = await axiosSecure.get(`/vehicles/${id}`);
        setVehicle(res.data.data || res.data);
      } catch (err) {
        console.error("Vehicle fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicle();
  }, [axiosSecure, id]);

  const handleBooking = async () => {
    if (!startDate || !endDate) {
      return Swal.fire("Error", "Please select start and end date", "error");
    }

    try {
      await axiosSecure.post("/bookings", {
        vehicle_id: vehicle.id,
        customer_id: user.id,
        rent_start_date: startDate,
        rent_end_date: endDate,
      });

      Swal.fire({
        icon: "success",
        title: "Booking Successful!",
        text: `You booked ${vehicle.vehicle_name} 🎉`,
      }).then(() => navigate("/dashboard"));
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Booking Failed",
        text: err.response?.data?.message || "Something went wrong",
      });
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!vehicle) {
    return <div className="text-center mt-10">Vehicle not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">{vehicle.vehicle_name}</h1>
      <p className="text-gray-600 capitalize mb-2">{vehicle.type}</p>
      <p className="text-gray-500 mb-2">
        Reg No: {vehicle.registration_number}
      </p>
      <p className="font-bold text-lg mb-4">৳{vehicle.daily_rent_price}/day</p>

      <div className="mb-4 flex gap-4">
        <div>
          <label className="block mb-1">Start Date:</label>
          <input
            type="date"
            className="input input-bordered"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1">End Date:</label>
          <input
            type="date"
            className="input input-bordered"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <button onClick={handleBooking} className="btn btn-primary">
        Confirm Booking
      </button>
    </div>
  );
};

export default Booking;
