import React from 'react'

const Wallet = (props) => {
    return (
      <div>
        <form onSubmit={(event) => props.updateBalance(event)}>
          <h4>Wallet Balance: ${props.balance}</h4>
          <input type="number" placeholder="Amount to add $" />
          <input type="submit" />
        </form>
      </div>
    )
}

export default Wallet
