// src/App.js
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
