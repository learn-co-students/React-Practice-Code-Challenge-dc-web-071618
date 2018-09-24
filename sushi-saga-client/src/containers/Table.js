import React from "react";

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      renderPlates: []
    };
  }

  componentDidMount() {
    this.setState({
      renderPlates: this.props.platesEaten
    });
  }

  renderPlates = () => {
    return this.props.platesEaten.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }} />;
    });
  };

  render() {
    return (
      <div>
        <h1 className="remaining">
          You have: ${this.props.moneyToSpend} remaining!
        </h1>
        <div className="table">
          <div className="stack">
            {/*
               renderPlates takes an array
               and renders an empty plate
               for every element in the array
            */
            this.renderPlates([])}
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
