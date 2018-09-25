import React from "react";

const Sushi = ({
  isEaten,
  handleEatSushi,
  sushi: { id, name, price, img_url }
}) => {
  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleEatSushi(id, price)}>
        {isEaten ? null : <img alt="" src={img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;
