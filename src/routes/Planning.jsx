import { Button, Divider, List, ListItem, Paper } from "@mui/material";
import { useState } from "react";
import { days, planningData } from "../data/planningData";
import CloseIcon from "@mui/icons-material/Close";

const PlanningCard = ({ title, date, peoples, onClick, place }) => {
  const gradiantLight =
    "linear-gradient( 35deg, rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0.9) 75%,rgba(0, 212, 255, 0) 100%)";
  const gradiantDark =
    "linear-gradient( 35deg, rgba(50, 50, 50, 1) 0%,rgba(50, 50, 50, 1) 60%, rgba(50, 50, 50, 0.9) 75%,rgba(0, 212, 255, 0) 100%)";

  return (
    <div style={{ width: "100%" }}>
      <Paper
        className="planning-card"
        style={{
          color:
            window.localStorage["currentTheme"] === "dark" ? "black" : "white",
        }}
      >
        <div
          className="planning-card-overlay"
          style={{
            background:
              window.localStorage["currentTheme"] === "dark"
                ? gradiantLight
                : gradiantDark,
          }}
        />
        <p>{date.hour}</p>
        <h3>{title}</h3>
        <div>
          <p>
            {peoples.map((people, i) => (
              <span key={people + i}>
                {people}{" "}
                {peoples.length > 1 && i !== peoples.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>
        <p>{place}</p>

        <Button className="bBackground" variant={"contained"} onClick={onClick}>
          Voir plus de détail
        </Button>
      </Paper>
    </div>
  );
};

const DataDrawer = ({ open, data, setOpen }) => {
  const gradiantLight =
    "linear-gradient( 150deg, rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0.9) 75%,rgba(0, 212, 255, 0) 100%)";
  const gradiantDark =
    "linear-gradient( 150deg, rgba(25, 25, 25, 1) 0%,rgba(25, 25, 25, 1) 60%, rgba(25, 25, 25, 0.9) 75%,rgba(0, 212, 255, 0) 100%)";
  const drawerWidth = window.innerWidth >= 720 ? "45vw" : "100vw";

  return (
    data && (
      <>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: open ? "block" : "none",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 99,
          }}
          onClick={() => setOpen(false)}
        />
        <Paper
          className="planning-card"
          style={{
            zIndex: 99,
            position: "fixed",
            transition: "all .2s linear",
            top: 0,
            right: 0,
            height: "100vh",
            opacity: open ? "1" : 0,
            pointerEvents: open ? "initial" : "none",
            width: open ? drawerWidth : 0,
          }}
        >
          <div
            className="planning-card-overlay-drawer"
            style={{
              background:
                window.localStorage["currentTheme"] === "dark"
                  ? gradiantLight
                  : gradiantDark,
            }}
          />
          <CloseIcon
            style={{
              fontSize: "1.75em",
              position: "fixed",
              top: 0,
              right: ".25em",
              zIndex: 99,
              cursor: "pointer",
              color:
                window.localStorage["currentTheme"] === "light"
                  ? "white"
                  : "black",
            }}
            onClick={() => setOpen(false)}
          />
          <div
            className="drawer-data"
            style={{
              color:
                window.localStorage["currentTheme"] === "dark"
                  ? "black"
                  : "white",
            }}
          >
            <p>
              {data.date.day} {data.date.hour}
            </p>
            <h3>{data.title}</h3>
            <div>
              <p>
                {data.peoples.map((people, i) => (
                  <span key={people + i}>{people}&nbsp;</span>
                ))}
              </p>
            </div>
            <p>{data.place}</p>
            <div>{data.description}</div>
          </div>
        </Paper>
      </>
    )
  );
};

const Planning = () => {
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  return (
    <>
      <DataDrawer open={open} data={data} setOpen={setOpen} />
      <h1 className="enchanted" style={{fontSize:"4em"}} >Planning</h1>
      <h2 className="enchanted" style={{fontSize:"2em",lineHeight:"10px"}} >21/01/2023</h2>
      <List className="planning-card-container">
        {planningData.map((data, i) => {
          if (data.date.day === days[0])
            return (
              <ListItem key={data.title + i}>
                <PlanningCard
                  title={data.title}
                  date={data.date}
                  peoples={data.peoples}
                  place={data.place}
                  onClick={() => {
                    setData(data);
                    setOpen(true);
                    console.log(data);
                  }}
                />
              </ListItem>
            );
        })}
      </List>
      <Divider />
      <h2 className="enchanted" style={{fontSize:"2em",lineHeight:"10px",marginTop:"2em"}} >22/01/2023</h2>
      <List className="planning-card-container">
        {planningData.map((data, i) => {
          if (data.date.day === days[1])
            return (
              <ListItem key={data.title + i}>
                <PlanningCard
                  title={data.title}
                  date={data.date}
                  peoples={data.peoples}
                  place={data.place}
                  onClick={() => {
                    setData(data);
                    setOpen(true);
                    console.log(data);
                  }}
                />
              </ListItem>
            );
        })}
      </List>
    </>
  );
};

export default Planning;
