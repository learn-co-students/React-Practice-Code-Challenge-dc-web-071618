import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    allSushi: [],
    idToDisplay: 1,
    eatenSushi: [],
    moneyRemaining: 100
  };

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(sushiData => this.setState({ allSushi: sushiData }));
  }

  showMoreSushi = () => {
    if (this.state.idToDisplay > 96) {
      this.setState({ idToDisplay: 1 });
    } else {
      this.setState({ idToDisplay: this.state.idToDisplay + 4 });
    }
  };

  eatSushi = sushiId => {
    let selectedSushi = this.state.allSushi.find(sushi => sushiId === sushi.id);
    if (
      selectedSushi.price <= this.state.moneyRemaining &&
      this.state.eatenSushi.includes(selectedSushi) === false
    ) {
      this.setState({
        eatenSushi: [...this.state.eatenSushi, selectedSushi],
        moneyRemaining: this.state.moneyRemaining - selectedSushi.price
      });
    }
  };

  addMoney = amount => {
    this.setState({
      moneyRemaining: this.state.moneyRemaining + parseInt(amount)
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          allSushi={this.state.allSushi}
          idToDisplay={this.state.idToDisplay}
          moneyRemaining={this.state.moneyRemaining}
          showMoreSushi={this.showMoreSushi}
          eatSushi={this.eatSushi}
          eatenSushi={this.state.eatenSushi}
        />
        <Table
          moneyRemaining={this.state.moneyRemaining}
          eatenSushi={this.state.eatenSushi}
          addMoney={this.addMoney}
        />
      </div>
    );
  }
}

export default App;
