import { Box, Button } from "@mui/material";
import React, { useState } from "react";

const RandomColorGeneraor = () => {
  const [color, setColor] = useState("#FFFFFF");
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
      <Box
        sx={{
          backgroundColor: color,
          height: "calc(100vh - 20px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexDirection: "column"
        }}
      >
        <h1>RandomColorGeneraor</h1>
        <h3>Color : {color}</h3>
        <Button variant="contained" onClick={handleClick}>
          Generate random color
        </Button>
      </Box>
  );
};

export default RandomColorGeneraor;
