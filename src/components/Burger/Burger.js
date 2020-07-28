import React from 'react';

import styles from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ( props ) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => arr.concat(el), []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = (
      <p>Please add some delicious ingredients!</p>
    );
  }
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="BreadTop" />
      {transformedIngredients}
      <BurgerIngredient type="BreadBottom" />
    </div>
  );
};

export default Burger;