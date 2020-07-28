import React from "react";

import Aux from "../../../hoc/Aux-Add";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredientSummary).map(
    (igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>
            {igKey}: {props.ingredientSummary[igKey]}
          </span>
        </li>
      );
    }
  );
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingreadients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
    </Aux>
  );
};
export default OrderSummary;
