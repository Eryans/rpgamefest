import { Dialog, Paper } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const ImageViewer = ({ image }) => {
  const [openMap, setOpenMap] = useState(false);
  return (
    <>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <img
          style={{ width: "100%", cursor: "pointer" }}
          src={image}
          onClick={() => setOpenMap(true)}
        />
      </div>
      {openMap && (
        <>
          <Paper
            style={{
              overflowX: "scroll",
              height: "100vh",
              width: "100vw",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          >
            <CloseIcon
              style={{
                fontSize: "4em",
                position: "fixed",
                top: 0,
                right: ".25em",
                zIndex: 2,
                cursor: "pointer",
              }}
              onClick={() => setOpenMap(false)}
            />
            <img
              style={{ height: "100%", objectFit: "cover" }}
              src="/images/Screenshot_20221214_093201.png"
            />
          </Paper>
        </>
      )}
    </>
  );
};
export default ImageViewer;
