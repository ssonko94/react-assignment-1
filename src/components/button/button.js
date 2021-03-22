import React from "react";
import "./button.css";

export default class Button extends React.Component {
  render() {
    const className = this.props.className;
    return <button className={className}>{this.props.title}</button>;
  }
}
