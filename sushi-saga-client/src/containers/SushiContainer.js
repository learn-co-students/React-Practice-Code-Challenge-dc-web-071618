import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {props.allSushi
          .filter(
            sushi =>
              sushi.id >= props.idToDisplay && sushi.id < props.idToDisplay + 4
          )
          .map(sushi => (
            <Sushi
              sushi={sushi}
              key={sushi.id}
              eatSushi={props.eatSushi}
              eatenSushi={props.eatenSushi}
            />
          ))}
        <MoreButton showMoreSushi={props.showMoreSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
