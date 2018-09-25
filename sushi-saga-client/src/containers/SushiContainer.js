import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
         props.sushis.map(sushi => <Sushi 
          isEaten={false} 
          sushi={sushi}
         balance={props.balance}
         isEatenArray={props.isEatenArray}
            eatSushi={props.eatSushi}/>)
        }
        <MoreButton allSushis={props.allSushis}
        getRandomSushis={props.getRandomSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer