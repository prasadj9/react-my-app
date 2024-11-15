import { Button } from "@mui/material";
import React, { useState } from "react";

const RandomColorGeneraor = () => {
  const [color, setColor] = useState("white");
  const getRandomColor = () => {
    const hexChars = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexChars[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);
  };
  return (
    <>
      <div style={{ backgroundColor: color, height: "90vh", margin: "0" }}>
        <center>

        <h1>RandomColorGeneraor</h1>

        <h3>Color : {color}</h3>
        <Button variant="contained" onClick={handleClick}>
          Generate random color
        </Button>
        </center>
      </div>
    </>
  );
};

export default RandomColorGeneraor;
