// src/routes/routes.tsx
import { lazy } from "react";
import { type RouteObject } from "react-router-dom";

const Layout = lazy(() => import("../layout/Layout"));
const HomePage = lazy(() => import("../pages/HomePage"));
// const AboutPage = lazy(() => import("../pages/AboutPage"));
// const ContactPage = lazy(() => import("../pages/ContactPage"));
// const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // {
      //   path: "about",
      //   element: <AboutPage />,
      // },
      // {
      //   path: "contact",
      //   element: <ContactPage />,
      // },
    ],
  },
  // {
  //   path: "*",
  //   element: <NotFoundPage />,
  // },
];

export default routes;
