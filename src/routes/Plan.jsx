import { Dialog, Paper } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ImageViewer from "../globalComponent/ImageViewer";
import { standData } from "../data/standData";

const StandCard = ({ name, type, place }) => {
  return (
    <Paper className="stand-card">
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
      <ImageViewer image={"/images/plan.png"} />
      <div className="planning-card-container">
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
