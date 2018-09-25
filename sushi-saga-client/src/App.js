import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    eaten: [],
    currentSushi: 0,
    budget: 2000
  };

  getAllSushis() {
    fetch(API)
      .then(r => r.json())
      .then(json =>
        this.setState({
          sushis: json
        })
      );
  }

  findCurrentSushis() {
    return this.state.sushis.slice(
      this.state.currentSushi,
      this.state.currentSushi + 4
    );
  }

  handleEatSushi = (id, price) => {
    let eatenSushis = [...this.state.eaten];
    let sushiBudget = this.state.budget;

    if (sushiBudget >= price) {
      eatenSushis.push(id);
      sushiBudget -= price;
    }

    this.setState({
      eaten: eatenSushis,
      budget: sushiBudget
    });
  };

  handleMoreSushi = () => {
    let current = this.state.currentSushi;

    if (current === 96) {
      current = -4;
    }

    current += 4;

    this.setState({
      currentSushi: current
    });
  };

  componentDidMount() {
    this.getAllSushis();
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.findCurrentSushis()}
          eaten={this.state.eaten}
          handleEatSushi={this.handleEatSushi}
          handleMoreSushi={this.handleMoreSushi}
        />
        <Table eaten={this.state.eaten} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;
