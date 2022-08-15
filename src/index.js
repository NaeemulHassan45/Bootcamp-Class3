import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hi(props) {
  return (
    <div className="hi">
      <h1 className="hello-text">
        Hello <strong>{props.name}</strong>!
      </h1>
      <h1 className="desc-text">This is Class 3</h1>
      <label className="l1-label">Completed Tasks</label>
      <ol>
        <li className="l1-item">Class 1 - Completed</li>
        <li className="l1-item">Class 2 - Completed</li>
      </ol>
      <label className="l2-label">Ongoing & Pending Tasks</label>
      <ul>
        <li className="l2-item">Class 3 - Ongoing</li>
        <li className="l2-item">Class 4 - Pending</li>
      </ul>
      <p className="sum-text">
        Sum of 5 and 10 is: <span className="sum-result">{5 + 10}</span>
      </p>
    </div>
  );
}

ReactDOM.render(<Hi name="N A L S A N" />, document.querySelector("#root"));
