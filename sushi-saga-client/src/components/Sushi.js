import React from "react";

class Sushi extends React.Component {
  constructor() {
    super();
    this.state = {
      eaten: false
    };
  }

  nomNom() {
    this.setState({
      eaten: true
    });
    this.props.addPlate(this.props.singleSushi.price);
  }

  render() {
    return (
      !!this.props.singleSushi && (
        <div key={this.props.id} className="sushi">
          <div
            className="plate"
            onClick={
              !this.state.eaten &&
              this.props.moneyToSpend - this.props.singleSushi.price >= 0
                ? () => this.nomNom()
                : null
            }
          >
            {this.state.eaten ? null : (
              <img src={this.props.singleSushi.img_url} width="100%" />
            )}
          </div>
          <h4 className="sushi-details">
            {this.props.singleSushi.name} - ${this.props.singleSushi.price}
          </h4>
        </div>
      )
    );
  }
}

export default Sushi;
