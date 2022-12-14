import { Button, Divider, List, ListItem, Paper } from "@mui/material";
import { useState } from "react";
import { days, planningData } from "../data/planningData";
import CloseIcon from "@mui/icons-material/Close";

const PlanningCard = ({
  title,
  date,
  peoples,
  description,
  onClick,
  place,
}) => {
  const handleTextCut = (text) => {
    const maxChars = 255;
    if (text.length > maxChars) return text.slice(maxChars) + "...";
    return text;
  };

  return (
    <div style={{ width: "100%" }}>
      <Paper className="planning-card">
        <p>
          {date.hour}
        </p>
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
        <div>{handleTextCut(description)}</div>
        <Button variant={"contained"} onClick={onClick}>
          Voir plus de détail
        </Button>
      </Paper>
    </div>
  );
};

const DataDrawer = ({ open, data, setOpen }) => {
  return (
    data && (
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
          width: open ? "100vw" : 0,
        }}
      >
        <CloseIcon
          style={{
            fontSize: "1.75em",
            position: "fixed",
            top: 0,
            right: ".25em",
            zIndex: 2,
            cursor: "pointer",
          }}
          onClick={() => setOpen(false)}
        />
        <div class="drawer-data">
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
    )
  );
};

const Planning = () => {
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  return (
    <>
      <DataDrawer open={open} data={data} setOpen={setOpen} />
      <h1>Planning</h1>
      <h2>Premier jour</h2>
      <List>
        {planningData.map((data, i) => {
          if (data.date.day === days[0])
            return (
              <ListItem key={data.title + i}>
                <PlanningCard
                  title={data.title}
                  date={data.date}
                  peoples={data.peoples}
                  description={data.description}
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
      <h2>Deuxième jour</h2>
      <List>
        {planningData.map((data, i) => {
          if (data.date.day === days[1])
            return (
              <ListItem key={data.title + i}>
                <PlanningCard
                  title={data.title}
                  date={data.date}
                  peoples={data.peoples}
                  description={data.description}
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
