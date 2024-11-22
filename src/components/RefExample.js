import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

/*
useRef is a React Hook that lets you reference a value that’s not needed for rendering.
useRef returns a ref object with a single current property initially set to the initial value you provided.
Usage : 
Referencing a value with a ref
Manipulating the DOM with a ref
Avoiding recreating the ref contents
*/
const RefExample = () => {
  const [name, setName] = useState("");
  const rendercount = useRef(0);
  const inpRef = useRef(null);
  useEffect(() => {
    rendercount.current++;
  });

  const handleFocus = () => {
    inpRef.current.focus();
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "50px",
          height: "100%",
          marginTop : "20px"
        }}
      >
        <Typography variant="h2"> RefExample </Typography>
        <Stack direction="row">
        <TextField
          label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          inputRef={inpRef}
          variant="standard"
          />
        <Button variant="contained" onClick={handleFocus}>Focus</Button>
          </Stack>
        <Typography variant="h3"> My name is : {name} </Typography>
        <Typography variant="h5" gutterBottom>
          Component rendered {rendercount.current} times{" "}
        </Typography>
      </Box>
    </>
  );
};

export default RefExample;
