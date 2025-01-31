import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router";

// import stcVideo from "../../assets/videos/stem-cells.mp4";
import ReactPlayer from "react-player";

const ProductScreen = () => {
  const location = useLocation();
  const { presentation } = location.state || {};
  const isStc = presentation.includes("superlife-product-presentation");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {isStc && (
        <ReactPlayer
          url="https://youtube.com/shorts/HHhFr_xKPYM"
          controls
          // playing
          config={{
            file: {
              attributes: {
                onContextMenu: (e) => e.preventDefault(),
                controlsList: "nodownload",
              },
            },
          }}
          width="60%"
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            alignSelf: "center",
          }}
        />
      )}
      <img
        src={presentation}
        alt="presentation"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </Box>
  );
};

export default ProductScreen;
