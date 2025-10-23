import { ThemeProvider, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import theme from "../styles/theme";

function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default Layout;
