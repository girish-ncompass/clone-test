import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import theme from "../styles/theme";
import MySidebar from "../components/layout/Sidebar";

function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Box component="aside">
          <MySidebar />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Navbar />
          <Box component="main">
            <Outlet />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Layout;
