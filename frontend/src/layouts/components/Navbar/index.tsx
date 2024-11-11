import { Assessment, Home, LunchDining } from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { PowerSettingsNew } from "@mui/icons-material";
import { ListBar } from "components";
import { PATH } from "constant";

const drawerWidth = 240;

interface NavbarProps {
  logout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ logout }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box
        sx={{
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 64px)",
          justifyContent: "space-between",
        }}
      >
        <List>
          <ListBar icon={<Home />} label="Home" link={PATH.DASHBOARD} />
          <ListBar
            icon={<LunchDining />}
            label="Add Food"
            link={PATH.ADD_FOOD}
          />
          <ListBar
            icon={<Assessment />}
            label="Daily Report"
            link={PATH.DAILY_REPORT}
          />
        </List>
        <ListItem disablePadding>
          <ListItemButton onClick={logout}>
            <ListItemIcon>
              <PowerSettingsNew />
            </ListItemIcon>
            <ListItemText primary={"Log out"} />
          </ListItemButton>
        </ListItem>
      </Box>
    </Drawer>
  );
};
