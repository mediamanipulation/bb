import React from 'react';

import classes from './BuildControl.module.css';

const BuildControl = ({ ingredientLabel, removed, disabled, added }) => (
  <div className={classes.BuildControl}>
    <div className={classes.IngredientLabel}>{ingredientLabel}</div>
    <button onClick={removed} disabled={disabled} className={classes.Less}>
      Less
    </button>
    <button onClick={added} className={classes.More}>
      More
    </button>
  </div>
);

export default BuildControl;