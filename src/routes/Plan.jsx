import { Dialog, Paper } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ImageViewer from "../globalComponent/ImageViewer";
import { standData } from "../data/standData";

const StandCard = ({ name, type, place }) => {

  const gradiantLight =
    "linear-gradient( 35deg, rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0.9) 75%,rgba(0, 212, 255, 0) 100%)";
  const gradiantDark =
    "linear-gradient( 35deg, rgba(50, 50, 50, 1) 0%,rgba(50, 50, 50, 1) 60%, rgba(50, 50, 50, 0.9) 75%,rgba(0, 212, 255, 0) 100%)";

  return (
    <Paper className="planning-card">
      <div
          className="planning-card-overlay"
          style={{
            background:
              window.localStorage["currentTheme"] === "dark"
                ? gradiantLight
                : gradiantDark,
          }}
        />
      <p>Nom : {name}</p>
      <p>Type : {type}</p>
      <p>Emplacement : {place}</p>
    </Paper>
  );
};

const Plan = () => {
  const [openMap, setOpenMap] = useState(false);
  return (
    <div className="plan-container">
      <h1 className="enchanted" style={{fontSize:"4em"}} >Plan du Parc des Expositions de Rouen</h1>
      <ImageViewer image={"/images/plan.png"} />
      <div className="plan-card-container">
        {standData.map((data, i) => (
          <StandCard
            key={data.name + i}
            name={data.name}
            type={data.type}
            place={data.place}
          />
        ))}
      </div>
    </div>
  );
};
export default Plan;
