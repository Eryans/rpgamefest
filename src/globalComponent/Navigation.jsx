import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Home } from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RoomIcon from "@mui/icons-material/Room";

const Navigation = ({ classes }) => {
  const [drawer, setDrawer] = React.useState({
    right: false,
    left: false,
  });

  const currentDrawerDirection = "left";

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer({ ...drawer, [anchor]: open });
  };

  const list = () => {
    const linkData = [
      {
        text: "Accueil",
        link: "/home",
        icon: <Home />,
      },
      {
        text: "Planning",
        link: "/planning",
        icon: <CalendarMonthIcon />,
      },
      {
        text: "Plan",
        link: "/plan",
        icon: <RoomIcon />,
      },
    ];

    return (
      <Box
        sx={{ width: "60vw" }}
        role="presentation"
        onClick={toggleDrawer(currentDrawerDirection, false)}
        onKeyDown={toggleDrawer(currentDrawerDirection, false)}
      >
        <List id="navigation-list">
          {linkData.map((data, index) => (
            <ListItem key={data.text} disablePadding>
              <ListItemButton>
                <Link
                  to={data.link}
                  style={{
                    "& > div": { minWidth: 0 },
                    display: "flex",
                    gap: ".5em",
                  }}
                >
                  <ListItemIcon style={{minWidth:0}}>{data.icon}</ListItemIcon>
                  <ListItemText primary={data.text} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };

  return (
    <nav>
      <img style={{width:"3em"}} src="../../public/images/logo_asso.png" alt="Logo de rpgameFest" />
      <Button onClick={toggleDrawer(currentDrawerDirection, true)}>
        <MenuIcon />
      </Button>
      <Drawer
        anchor={currentDrawerDirection}
        open={drawer[currentDrawerDirection]}
        onClose={toggleDrawer(currentDrawerDirection, false)}
      >
        {list()}
      </Drawer>
    </nav>
  );
};

export default Navigation;
