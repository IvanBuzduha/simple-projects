import React, { Component } from "react";
import "./styles.css";
class NeonButton extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="bgNeon">
          <a href="#" className="neonButton">
            <span />
            <span />
            <span />
            <span />
            NEON BUTTON
          </a>
          <a href="#" className="neonButton">
            <span />
            <span />
            <span />
            <span />
            NEON BUTTON
          </a>
          <a href="#" className="neonButton">
            <span />
            <span />
            <span />
            <span />
            NEON BUTTON
          </a>
        </div>
      </>
    );
  }
}
export default NeonButton;
