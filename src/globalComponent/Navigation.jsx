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
import { ticketLink } from "../../globalData";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CloseIcon from "@mui/icons-material/Close";
const Navigation = ({ classes, handleThemeChange }) => {
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
        link: "/",
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
      {
        text: "Billeterie",
        link: ticketLink,
        icon: <LocalActivityIcon />,
        external: true,
      },
    ];

    return (
      <Box
        sx={{ width: "100vw" }}
        role="presentation"
        onClick={toggleDrawer(currentDrawerDirection, false)}
        onKeyDown={toggleDrawer(currentDrawerDirection, false)}
      >
        <List id="navigation-list">
          <ListItem disablePadding>
            <ListItemButton onClick={handleThemeChange}>
              <ListItemIcon style={{ minWidth: 0 }}>
                <DarkModeIcon />
              </ListItemIcon>
              <ListItemText>Theme clair/sombre</ListItemText>
            </ListItemButton>
            <ListItemButton onClick={handleThemeChange}>
              <ListItemIcon style={{ minWidth: 0 }}>
              <CloseIcon
          style={{
            fontSize: "1.75em",
            position: "fixed",
            top: "0.25em",
            right: ".25em",
            zIndex: 2,
            cursor: "pointer",
          }}
          onClick={() => toggleDrawer(currentDrawerDirection, false)}
        />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          {linkData.map((data, index) => (
            <ListItem key={data.text} disablePadding>
              <ListItemButton>
                {data.external ? (
                  <a
                    href={data.link}
                    target="_blank"
                    style={{
                      "& > div": { minWidth: 0 },
                      display: "flex",
                      gap: ".5em",
                    }}
                  >
                    {data.icon}
                    {data.text}
                  </a>
                ) : (
                  <Link
                    to={data.link}
                    style={{
                      "& > div": { minWidth: 0 },
                      display: "flex",
                      gap: ".5em",
                    }}
                  >
                    <ListItemIcon style={{ minWidth: 0 }}>
                      {data.icon}
                    </ListItemIcon>
                    <ListItemText primary={data.text} />
                  </Link>
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };

  return (
    <nav>
      <Link to="/">
        <img
          style={{ width: "3em" }}
          src={
            window.localStorage["currentTheme"] === "dark"
              ? "/images/logo_asso.png"
              : "/images/logo_asso_blanc.png"
          }
          alt="Logo de rpgameFest"
        />
      </Link>
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
