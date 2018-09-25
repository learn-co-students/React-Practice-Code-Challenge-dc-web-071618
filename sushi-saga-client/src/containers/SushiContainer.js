import React, { Fragment } from "react";

import Sushi from "../components/Sushi";
import MoreButton from "../components/MoreButton";

const SushiContainer = ({ handleMoreSushi, handleEatSushi, sushis, eaten }) => {
  // debugger;
  return (
    <Fragment>
      <div className="belt">
        {sushis.map(s => {
          let isEaten = eaten.includes(s.id);

          return (
            <Sushi
              key={s.id}
              sushi={s}
              isEaten={isEaten}
              handleEatSushi={handleEatSushi}
            />
          );
        })}
        <MoreButton handleMoreSushi={handleMoreSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
