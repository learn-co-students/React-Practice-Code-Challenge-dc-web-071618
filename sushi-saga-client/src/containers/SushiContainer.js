import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log('SushiContainer', props.eatenSushi)

  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => <Sushi sushi={sushi} key={sushi.id} eatSushi={props.eatSushi} goneSushi={props.goneSushi} eatenSushi={props.goneSushi.includes(sushi)}/> )}

        <MoreButton getMoreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
