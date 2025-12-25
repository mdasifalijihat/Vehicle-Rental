import { createBrowserRouter } from "react-router";
import Layout from "../layout/layout";
import Home from "../components/pages/home/Home";
import SignUp from "../components/pages/auth/Signup";
import SignIn from "../components/pages/auth/SignIn";
import Vehicles from "../components/pages/page/Vehicles";
import Booking from "../components/pages/page/Booking";
import Dashboard from "../components/pages/page/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, Component: Home },
      { path: "/SignUp", Component: SignUp },
      { path: "/SignIn", Component: SignIn },
      { path: "/vehicles", Component: Vehicles },
      { path: "/book/:id", element: <Booking /> },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
]);
