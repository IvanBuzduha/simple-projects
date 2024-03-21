/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import "./style.css";
import "./script.js";

class ClockAnalog extends Component {
  state = {};
  render() {
    return (
      <>
        <div class="container">
          <div id="time">
            <div id="hours">00</div>
            <div id="minutes">00</div>
            <div id="seconds">00</div>
            <div id="ampm">AM</div>
            <div id="day">Day</div>
          </div>
          <div class="clock">
            <div class="circle" id="sc">
              <i />
            </div>
            <div class="circle circle2" id="mn">
              <i />
            </div>
            <div class="circle circle3" id="hr">
              <i />
            </div>
            <div class="num" />
          </div>
        </div>
      </>
    );
  }
}
export default ClockAnalog;
