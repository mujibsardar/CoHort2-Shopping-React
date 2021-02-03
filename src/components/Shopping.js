
import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

export class Shopping extends Component {
  constructor(props) {
   super(props);
   this.state = {products: []};
  }

  render() {
    return (
    <Link onClick={this.props.onClick} to={this.props.path}>
      <div>{this.props.text}</div>
    </Link>
    );
  }
}

export default Shopping;
