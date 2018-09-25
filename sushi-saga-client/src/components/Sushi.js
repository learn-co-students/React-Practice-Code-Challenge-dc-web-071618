import React, { Fragment } from "react";

const Sushi = props => {
  return (
    <div className="sushi">
      {!props.eaten.includes(props.sushi) ? (
        <div className="plate" onClick={() => props.eat(props.sushi)}>
          <img src={props.sushi.img_url} width="100%" />
        </div>
      ) : null}

      {/* <div className="plate" onClick={() => props.eat(props.sushi)}>
        {!props.eaten.includes(props.sushi) ? (
          <img src={props.sushi.img_url} width="100%" />
        ) : (
          ""
        )}
      </div> */}
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  );
};

export default Sushi;
