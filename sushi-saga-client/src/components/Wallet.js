import React, { Fragment } from "react";

const Wallet = props => {
  return (
    <Fragment>
      <h3>Add money</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.addMoney(e.target[0].value);
          e.target.reset();
        }}
      >
        <input type="number" min={0} />
        <input type="submit" />
      </form>
    </Fragment>
  );
};

export default Wallet;
