import { lazy, Suspense } from "react";
import { type RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage"));
// const AboutPage = lazy(() => import("../pages/AboutPage"));
// const ContactPage = lazy(() => import("../pages/ContactPage"));
// const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
    ),
    index: true,
  },
  //   {
  //     path: "/about",
  //     element: (
  //       <Suspense fallback={<div>Loading...</div>}>
  //         <AboutPage />
  //       </Suspense>
  //     ),
  //   },
  //   {
  //     path: "/contact",
  //     element: (
  //       <Suspense fallback={<div>Loading...</div>}>
  //         <ContactPage />
  //       </Suspense>
  //     ),
  //   },
  //   {
  //     path: "*",
  //     element: (
  //       <Suspense fallback={<div>Loading...</div>}>
  //         <NotFoundPage />
  //       </Suspense>
  //     ),
  //   },
];

export default routes;
