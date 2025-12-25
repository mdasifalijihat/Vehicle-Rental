import { createBrowserRouter } from "react-router";
import Layout from "../layout/layout";
import Home from "../components/pages/home/Home";
import SignUp from "../components/pages/auth/Signup";
import SignIn from "../components/pages/auth/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, Component: Home },
      { path: "/SignUp", Component: SignUp },
      { path: "/SignIn", Component: SignIn },
    ],
  },
]);
