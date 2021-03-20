import React from "react";
import "./heading.css";
function Heading(props) {
  const headingClass = props.className || "heading-primary";
  return <h1 className={headingClass}>{props.title}</h1>;
}

export default Heading;
