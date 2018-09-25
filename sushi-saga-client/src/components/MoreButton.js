import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.getRandomSushis(props.allSushis)}>
            More sushi!
          </button>
}

export default MoreButton