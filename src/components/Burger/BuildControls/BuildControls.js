import React from "react";

import classes from "./BuildControls.module.css";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "Salad" },
  { label: "Bacon", type: "Bacon" },
  { label: "Cheese", type: "Cheese" },
  { label: "Meat", type: "Meat" },
];

const BuildControls = ({
  price,
  currentPrice,
  ingredientAdded,
  ingredientRemoved,
  disabled,
  purchaseable,
  ordered,
  //   isAuth,
}) => (
  <div className={classes.BuildControls}>
    <p>
      Price: <strong>{price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => {
      return (
        <BuildControl
          key={ctrl.label + 666}
          ingredientLabel={ctrl.label}
          type={ctrl.type}
          added={() => ingredientAdded(ctrl.type)}
          removed={() => ingredientRemoved(ctrl.type)}
          disabled={disabled[ctrl.type]}
        />
      );
    })}
    <button
      className={classes.OrderButton}
      disabled={!purchaseable}
      onClick={ordered}
    >
      Order Now
    </button>
  </div>
);

export default BuildControls;
