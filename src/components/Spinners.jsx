import React, { Component } from "react";
import Loading from "./Loading 1.gif";
export class Spinners extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Loading} alt="loading" />
      </div>
    );
  }
}

export default Spinners;
