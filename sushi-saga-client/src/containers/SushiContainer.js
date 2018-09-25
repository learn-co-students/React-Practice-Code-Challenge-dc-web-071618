import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {props.fourSushis.map(s => (
          <Sushi sushi={s} eat={props.eat} eaten={props.eaten} />
        ))}
        <MoreButton getMore={props.getMore} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
