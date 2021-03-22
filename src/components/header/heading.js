import React from "react";
import "./heading.css";
// function Heading(props) {
//   const headingClass = props.className || "heading-primary";
//   return <h1 className={headingClass}>{props.title}</h1>;
// }

export default class Subheading extends React.Component {
  render() {
    const className = this.props.className || "subheadingClass";
    const TestId = "subHeadingTest";
    return (
      <h2 className={className} TestId={TestId}>
        {this.props.title}
      </h2>
    );
  }
}
