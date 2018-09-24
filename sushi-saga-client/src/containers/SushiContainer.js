import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  let getMoarSushi = () => {
    // debugger;
    props.getMoarSushi();
  };
  return (
    <Fragment>
      <div className="belt">
        {props.sushiToRender.map(sushi => (
          <Sushi
            addPlate={props.addPlate}
            singleSushi={sushi}
            moneyToSpend={props.moneyToSpend}
          />
        ))}
        <MoreButton getMoarSushi={getMoarSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
