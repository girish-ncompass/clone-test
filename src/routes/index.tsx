import { lazy } from "react";
import { type RouteObject } from "react-router-dom";
import homeRoutes from "./HomeRoutes";

const Layout = lazy(() => import("../layout/Layout"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [...homeRoutes],
  },
];

export default routes;
