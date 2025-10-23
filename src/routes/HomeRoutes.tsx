import { lazy, Suspense, type ComponentType } from "react";
import { type RouteObject } from "react-router-dom";

const lazyWithSuspense = (
  factory: () => Promise<{ default: ComponentType<any> }>
) => {
  const Component = lazy(factory);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

const homeRoutes: RouteObject[] = [
  {
    path: "home",
    children: [
      {
        path: "dashboard",
        element: lazyWithSuspense(() => import("../pages/home/Dashboard")),
      },
      {
        path: "welcome",
        element: lazyWithSuspense(() => import("../pages/home/Welcome")),
      },
    ],
  },
];

export default homeRoutes;
