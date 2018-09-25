import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";
import SushiWallet from "./components/SushiWallet";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    allSushis: [],
    fourSushis: [],
    eaten: [],
    bill: 0,
    balance: 100,
    displayPos: 0
  };

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(json => {
        this.setState({
          allSushis: json
        });
      });
  }

  displayFour = () => {
    return this.state.allSushis.slice(
      this.state.displayPos,
      this.state.displayPos + 4
    );
  };

  displayFourMore = () => {
    this.setState({
      displayPos: this.state.displayPos + 4
    });
  };

  eat = sushi => {
    const newBill = this.state.bill + sushi.price;
    if (this.state.balance > sushi.price && !this.state.eaten.includes(sushi)) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        bill: newBill,
        balance: this.state.balance - sushi.price
      });
    } else {
      alert("You can't eat this sushi");
    }
  };

  addMoney = e => {
    e.preventDefault();
    let inputVal = e.target[0].value;

    this.setState({
      balance: this.state.balance + parseInt(inputVal)
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          fourSushis={this.displayFour()}
          getMore={this.displayFourMore}
          eat={this.eat}
          eaten={this.state.eaten}
        />
        <SushiWallet balance={this.state.balance} addMoney={this.addMoney} />
        <Table balance={this.state.balance} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;
