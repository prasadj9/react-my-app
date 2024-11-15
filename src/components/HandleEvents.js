import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const HandleEvents = () => {
  const [errorData, setErrorData] = useState({
    name: "",
    age: "",
  });
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [buttonColor, setButtonColor] = useState("primary");
  const handleNameChange = (e) => {
    const text = e.target.value;
    setName(text);
  };

  const handleAgeChange = (e) => {
    const text = e.target.value;
    setAge(text);
    const pattern = /^\d+$/;
    const match = pattern.test(text);
    if (match) {
      setErrorData((prevData) => ({ ...prevData, age: "" }));
    } else {
      setErrorData((prevData) => ({ ...prevData, age: "Invalid Age" }));
    }
    // console.log(match, errorData);
  };

  return (
    <>
      <h1>HandleEvents</h1>
      <Box component="form" noValidate autoComplete="OFF">
       
        <TextField
          error={!!errorData.name}
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter Name"
          helperText={errorData.name}
        />

        <TextField
          error={!!errorData.age}
          id="age"
          name="age"
          value={age}
          onChange={handleAgeChange}
          placeholder="Enter Age"
          helperText={errorData.age}
        />
        <div>
          <p>Hover on button to change color</p>
          <Button
            variant="contained"
            color={buttonColor}
            onMouseEnter={() => {
              setButtonColor(buttonColor === "success" ? "primary" : "success");
            }}
          >
            Submit
          </Button>
        </div>
      </Box>
    </>
  );
};

export default HandleEvents;
