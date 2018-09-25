import React from "react";

const SushiWallet = ({ balance, addMoney }) => {
  return (
    <form onSubmit={e => addMoney(e)}>
      SushiWallet
      <input type="number" placeholder={`Current balance: ${balance}`} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SushiWallet;
