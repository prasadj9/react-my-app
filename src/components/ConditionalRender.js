import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { Box } from "@mui/material";
const ConditionalRender = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <Box
      mt={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap : "10px"
        }}
      >
        <h1>Conditional Rendering</h1>
        <h3>{checked ? "Switch is ON" : "Switch is OFF"}</h3>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Box>
    </>
  );
};

export default ConditionalRender;
