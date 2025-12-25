import { createBrowserRouter } from "react-router";
import Layout from "../layout/layout";
import Home from "../components/pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, Component: Home }],
  },
]);
