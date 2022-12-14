import { Dialog, Paper } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ImageViewer from "../globalComponent/ImageViewer";

const Plan = () => {
  const [openMap, setOpenMap] = useState(false);
  return (
    <>
      <ImageViewer image={"/images/Screenshot_20221214_093201.png"} />
    </>
  );
};
export default Plan;
