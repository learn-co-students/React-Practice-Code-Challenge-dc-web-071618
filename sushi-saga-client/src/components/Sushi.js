import React, { Fragment } from 'react'

const Sushi = (props) => {
  // console.log('Sushi', props)
  // console.log('Sushi img', props.sushi.img_url)
  // console.log(props.goneSushi.includes(props.sushi))
  // console.log('eatenSushi', props.eatenSushi)
  
  return (
    <div className="sushi">
      {props.eatenSushi ? <div>Gone!</div> :   <div className="plate"
             onClick={() => props.eatSushi(props.sushi.id)}>
             {
            /* Tell me if this sushi has been eaten! */
            props.goneSushi.includes(props.sushi) ? null : <img src={props.sushi.img_url} alt={props.sushi.name} width="100%" />
          }
        </div>  }

      <h4 className="sushi-details">
        {props.sushi.id}.{props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
