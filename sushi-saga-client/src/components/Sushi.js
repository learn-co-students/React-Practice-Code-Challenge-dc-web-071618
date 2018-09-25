import React, { Fragment } from 'react'

class Sushi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEaten: this.props.isEaten
    }
  }


  render() {
    return (
      <div className="sushi">
        <div className="plate" 
            onClick={() => this.props.eatSushi(this.props.sushi)}>
          { 
            /* Tell me if this sushi has been eaten! */ 
            this.props.isEatenArray.includes(this.props.sushi.id) ?
              null
            :
              <img src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    ) 
  }
}

export default Sushi