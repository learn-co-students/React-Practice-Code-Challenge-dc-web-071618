import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    balance: 100,
    isEaten: false,
    isEatenArray: []
  }

  getRandomSushis = (sushis) => {
    this.setState({
      allSushis: sushis
    })
    let fourSushis = [];
    for(let i=0; i < 4; i++) {
      fourSushis.push(sushis[Math.floor(Math.random()*sushis.length)])
    }
    this.setState({
      sushis: fourSushis
    })
  }

  eatSushi = (sushi) => {
    console.log(this.state.balance);
    if ((this.state.balance - sushi.price) > 0) {
      const isEatenArraySlice = this.state.isEatenArray.slice()
      isEatenArraySlice.push(sushi.id)
      this.setState({
        isEatenArray: isEatenArraySlice
    })
      this.setState({
      balance: this.state.balance - sushi.price
      })
    }
    console.log(this.state.balance)
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/sushis').then(res => res.json())
    .then(sushis => {
      this.getRandomSushis(sushis)
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
        sushis={this.state.sushis} 
        allSushis={this.state.allSushis}
        getRandomSushis={this.getRandomSushis}
        balance={this.state.balance}
        isEaten={this.state.isEaten}
        isEatenArray={this.state.isEatenArray}
        eatSushi={this.eatSushi}/>
        <Table balance={this.state.balance}/>
      </div>
    );
  }
}

export default App;