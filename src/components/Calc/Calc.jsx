import React from "react";
import "boxicons";
import "./style.css";

const Calc = () => {
  // window.addEventListener("DOMContentLoaded", event => {
  const num1 = document.querySelector(".num1");
  const num2 = document.querySelector(".num2");
  const add = document.querySelector(".add");
  const sub = document.querySelector(".sub");
  const mult = document.querySelector(".multiply");
  const div = document.querySelector(".divide");
  const result = document.querySelector(".result");

  function addF() {
    result.textContent = (parseFloat(num1.value) + parseFloat(num2.value)).toString();
  }
  add?.addEventListener("click", addF);
  function subF() {
    result.textContent = (parseFloat(num1.value) - parseFloat(num2.value)).toString();
  }
  sub?.addEventListener("click", subF);
  function multF() {
    result.textContent = (parseFloat(num1.value) * parseFloat(num2.value)).toString();
  }
  mult?.addEventListener("click", multF);
  function divF() {
    result.textContent = (parseFloat(num1.value) / parseFloat(num2.value)).toString();
  }
  div?.addEventListener("click", divF);
  // });

  return (
    <>
      <div className="content">
        <div className="numbers">
          <input type="number" className="num1" placeholder="First number" />
          <input type="number" className="num2" placeholder="Second number" />
        </div>
        <div>
          <output className="result" />
        </div>
        <div className="sign">
          <button className="add sign-item button">
            Add
            {/* <i className="bx bx-plus" /> */}
          </button>
          <button className="sub sign-item button">
            Sub
            {/* <i className="bx bx-minus" /> */}
          </button>
          <button className="multiply sign-item button">
            Mult
            {/* <i className="bx bx-plus" /> */}
          </button>
          <button className="divide sign-item button">
            Div
            {/* <i className="bx bx-minus" /> */}
          </button>
        </div>
      </div>
    </>
  );
};
export default Calc;
