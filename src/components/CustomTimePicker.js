import React, { useState } from "react";
import { TimePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

const CustomTimePicker = ({
  minTime = new Date(0, 0, 0, 0, 0), // Default 00:00
  maxTime = new Date(0, 0, 1, 23, 59), // Default 23:59 or more than 24h
  stepMinutes = 15, // Default step
}) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleChange = (newValue) => {
    setSelectedTime(newValue);
  };

  return (
    <TimePicker
      label="Custom Time Picker"
      value={selectedTime}
      onChange={handleChange}
      minTime={minTime}
      maxTime={maxTime}
      minutesStep={stepMinutes}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default CustomTimePicker;
