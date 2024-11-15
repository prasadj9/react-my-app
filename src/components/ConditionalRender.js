import React, { useState } from "react";
import Switch from "@mui/material/Switch";
const ConditionalRender = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div >
        <h1>Conditional Rendering</h1>
      <h3>{checked ? "Switch is ON" : "Switch is OFF"}</h3>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        />
        </div>
    </>
  );
};

export default ConditionalRender;
