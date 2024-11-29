import React from "react";
import CustomTimePicker from "./components/CustomTimePicker";
import './App.css';

export default function App() {
  return (
    <div style={{ margin: "2rem" }}>
      <h1>Custom Time Picker</h1>
      <CustomTimePicker
        minTime={new Date(0, 0, 0, 3, 0)} // Example: 03:00
        maxTime={new Date(0, 0, 1, 6, 0)} // Example: 06:00 on the next day
        stepMinutes={30} // Example: 30-minute intervals
      />
    </div>
  );
}
