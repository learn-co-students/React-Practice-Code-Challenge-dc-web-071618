import React, { Fragment } from "react";
import Wallet from "../components/Wallet";

const Table = props => {
  const renderPlates = array => {
    return array.map((x, index) => {
      return (
        <div className="empty-plate" key={index} style={{ top: -7 * index }} />
      );
    });
  };

  return (
    <Fragment>
      <Wallet addMoney={props.addMoney} />
      <h1 className="remaining">
        You have: ${props.moneyRemaining} remaining!
      </h1>
      <div className="table">
        <div className="stack">{renderPlates(props.eatenSushi)}</div>
      </div>
    </Fragment>
  );
};

export default Table;
