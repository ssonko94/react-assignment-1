import React from "react";
import "./heading.css";
// function Heading(props) {
//   const headingClass = props.className || "heading-primary";
//   return <h1 className={headingClass}>{props.title}</h1>;
// }

export default class Subheading extends React.Component {
  render() {
    const className = this.props.className || "subheadingClass";
    return (
      <h2 className={className} data-testid="subHeadingTest">
        {this.props.title}
      </h2>
    );
  }
}
