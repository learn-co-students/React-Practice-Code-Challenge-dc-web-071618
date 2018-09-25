import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Wallet from './components/Wallet';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushis: [],
      goneSushi: [],
      sushiPosition: 0,
      balance: 100
    }
  }
  componentDidMount() {
    this.fetchSushis()
  }

  fetchSushis = () => {
    fetch(API)
    .then(response => response.json())
    .then(sushis => this.setState({sushis: sushis}))
  }

  renderFour = () => {
    //add counter to state
    //!!! don't forget to RETURN
    return this.state.sushis.slice(
      //slice at 0, 4
      this.state.sushiPosition, this.state.sushiPosition + 4
    )
  }

  renderFourMore = () => {
    this.setState({
      sushiPosition: this.state.sushiPosition + 4
    })
  }

  eatSushi = (id) => {
    // console.log('cliked on plate', id)

    //!!!use FIND not map (map will make a new array)
    const eatenSushi = this.state.sushis.find(sushi =>  sushi.id === id)

    if (eatenSushi && this.state.balance > eatenSushi.price) {
      this.setState({
        goneSushi: [...this.state.goneSushi, eatenSushi], balance: this.state.balance - eatenSushi.price
      })
    } else {
      alert('Not enough money for $u$hi')
    }
  }

  updateBalance = (event) => {
    event.preventDefault()
    let value = parseInt(event.target[0].value)
    this.setState({
      balance: this.state.balance + value
    })
  }


  render() {
    return (
      <div className="app">
        {/* this.renderFour() is invoking the function when App.js is rendered. This function has a return value that renders the sushis. this.renderFourMore is just being passed as props, this function is only updating state. After state is updated, trigger re-render of the App  */}
        <SushiContainer sushis={this.renderFour()} moreSushi={this.renderFourMore} eatSushi={this.eatSushi}
         goneSushi={this.state.goneSushi}/>
           {/* can pass state as props too! (on middle child: goneSushi={props.goneSushi}) */}
        <Wallet balance={this.state.balance} updateBalance={this.updateBalance}/>
        <Table goneSushi={this.state.goneSushi} balance={this.state.balance} />
      </div>
    );
  }
}

export default App;
