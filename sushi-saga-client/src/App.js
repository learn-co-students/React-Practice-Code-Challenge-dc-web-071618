import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allSushi: [],
      sushiToRender: [],
      moneyToSpend: 50,
      platesEaten: []
    };
  }

  componentDidMount() {
    this.fetchSushi();
  }

  fetchSushi() {
    fetch("http://localhost:3000/sushis")
      .then(r => r.json())
      .then(data =>
        this.setState({
          allSushi: data
        })
      )
      .then(() => {
        this.setState({
          sushiToRender: [
            this.state.allSushi[this.getRandomSushi()],
            this.state.allSushi[this.getRandomSushi()],
            this.state.allSushi[this.getRandomSushi()],
            this.state.allSushi[this.getRandomSushi()]
          ]
        });
      });
  }

  getMoarSushi() {
    // debugger;
    this.setState({
      sushiToRender: [
        this.state.allSushi[this.getRandomSushi()],
        this.state.allSushi[this.getRandomSushi()],
        this.state.allSushi[this.getRandomSushi()],
        this.state.allSushi[this.getRandomSushi()]
      ]
    });
  }

  getRandomSushi() {
    return Math.floor(Math.random() * 100 + 1);
  }

  addPlate(cost) {
    this.state.moneyToSpend - cost > 0 ? this.addPlateToState(cost) : null;
  }

  addPlateToState(cost) {
    // debugger;
    this.setState({
      platesEaten: [...this.state.platesEaten, cost]
    });
    this.setState({
      moneyToSpend: this.state.moneyToSpend - cost
    });
  }

  render() {
    // debugger;
    return (
      <div className="app">
        <SushiContainer
          addPlate={this.addPlate.bind(this)}
          sushiToRender={this.state.sushiToRender}
          getMoarSushi={this.getMoarSushi.bind(this)}
          moneyToSpend={this.state.moneyToSpend}
        />
        <Table
          moneyToSpend={this.state.moneyToSpend}
          platesEaten={this.state.platesEaten}
        />
      </div>
    );
  }
}

export default App;
