import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // State to track if the timer is running
  const intervalId = useRef(null); //used to refer interval id

  const startTimer = () => {
    setIsRunning(true);
    intervalId.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  
  const pauseTimer = () => {
      setIsRunning(false);
    clearInterval(intervalId.current);
    intervalId.current = null;
  };

  const resetTimer = () => {
    pauseTimer();
    setTime(0);
  };

  //Format time in minutes and seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100%",
        padding: 3,
        margin : 3,
        border : "2px solid black"
      }}
    >
      <Typography variant="h3" gutterBottom>
        StopWatch
      </Typography>
      <Typography variant="h3" gutterBottom>
        {formatTime(time)}
      </Typography>

      <Grid container spacing={2}>
        <Grid item>
          <Button onClick={startTimer} variant="outlined" disabled={isRunning}>
            Start
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={pauseTimer} color="secondary" variant="outlined">
            Pause
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={resetTimer} color="error" variant="outlined">
            Reset
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StopWatch;


// If you don't use the isRunning state and allow the "Start" button to be clicked multiple times while
//  the stopwatch is already running, it will lead to the creation of multiple intervals. This can cause 
//  the time to increment faster than expected, as each click of the "Start" button will create a new interval, which can rapidly increase the time without user control.