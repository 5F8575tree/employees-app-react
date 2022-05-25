import React from "react";
import Card from "../components/Card";

const Polls = () => {
  return (
    <div className="polls">
      <h2 className="poll-header">New Questions</h2>
      <div className="new-poll">
        <ul className="new-poll-list">
          <li className="poll-items">
            <Card />
          </li>
        </ul>
      </div>
      <h2 className="poll-header">Completed Questions</h2>
      <div className="completed-polls">
        <ul className="new-poll-list">
          <li className="poll-items"></li>
        </ul>
      </div>
    </div>
  );
};

export default Polls;
