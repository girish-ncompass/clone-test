import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
// import PersonIcon from "@mui/icons-material/Person";
// import MailIcon from "@mui/icons-material/Mail";
// import GroupsIcon from "@mui/icons-material/Groups";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import BusinessIcon from "@mui/icons-material/Business";
// import Diversity3Icon from "@mui/icons-material/Diversity3";
// import ShowChartIcon from "@mui/icons-material/ShowChart";
// import DescriptionIcon from "@mui/icons-material/Description";
// import SettingsIcon from "@mui/icons-material/Settings";
// import HelpIcon from "@mui/icons-material/Help";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import kekaLogo from "/keka-logo-light.svg";

const drawerWidth: number = 120;

interface MenuItem {
  text: string;
  icon: React.ReactElement;
}

const menuItems: MenuItem[] = [{ text: "Home", icon: <HomeIcon /> }];

export default function PermanentDrawerLeft(): React.ReactElement {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "#192839",
          color: "#ffffff",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar sx={{ justifyContent: "center", py: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={kekaLogo} alt="keka logo" style={{ height: 24 }} />
        </Box>
      </Toolbar>
      <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.12)" }} />
      <List>
        {menuItems.map((item: MenuItem) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.08)" },
              }}
            >
              <ListItemIcon sx={{ color: "white", justifyContent: "center" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                slotProps={{ primary: { fontSize: "12px" } }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
