import React from "react";
// @material-ui/core components

// core components
import CardHeader from "components/Card/CardHeader.js";
import Calendar from "./Calendar"



export default function meetingSections() {
  return (
    <div>
        <CardHeader color="warning" style={{margin: "20px"}}>Calendar</CardHeader>
        <Calendar style={{width: "100%", margin: "20px"}}/>
    </div>
  );
}
