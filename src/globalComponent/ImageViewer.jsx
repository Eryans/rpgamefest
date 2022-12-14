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
          <div
            style={{
              overflowX: "scroll",
              display: "flex",
              justifyContent: "center",
              height: "100%",
              width: "100%",
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 99,
              backgroundColor: "rgba(0,0,0,.6)",
            }}
            onClick={() => setOpenMap(false)}
            >
            <CloseIcon
              style={{
                fontSize: "1.75em",
                position: "fixed",
                top: 0,
                right: ".25em",
                zIndex: 2,
                cursor: "pointer",
                color: "grey",
              }}
              onClick={() => setOpenMap(false)}
            />
            <img
              style={{ height: "100%", objectFit: "contain", width: "200vw" }}
              src={image}
            />
          </div>
        </>
      )}
    </>
  );
};
export default ImageViewer;
