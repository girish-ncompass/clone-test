import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
