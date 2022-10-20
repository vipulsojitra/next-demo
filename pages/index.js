import React from "react";

import Box from "@mui/material/Box";
import Groups from "../Component/Groups";
import Menubar from "../Component/Menubar";

export default function Home() {
  return (
    <Box p={"25px"} sx={{ display: "flex", height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          border: "1px dashed grey",
        }}
      >
        <Menubar />
        <Groups />
      </Box>
    </Box>
  );
}
