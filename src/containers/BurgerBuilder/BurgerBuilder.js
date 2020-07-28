import React, { Component } from "react";
import Aux from "../../hoc/Aux-Add";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  Salad: 0.5,
  Bacon: 0.7,
  Cheese: 0.4,
  Meat: 1.3,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Salad: 0,
      Bacon: 0,
      Cheese: 0,
      Meat: 0,
    },
    totalPrice: 4,
    purchaseable: false
  };
  updatePurchaseState (ingredients) {
    
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0)
            this.setState({purchaseable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngreadients = {
      ...this.state.ingredients,
    };
    updatedIngreadients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngreadients });
    this.updatePurchaseState(updatedIngreadients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
        return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngreadients = {
      ...this.state.ingredients,
    };
    updatedIngreadients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngreadients });
    this.updatePurchaseState(updatedIngreadients);
  };

  render() {
       const disabledInfo = {
           ...this.state.ingredients
       };
       for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
       }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            purchaseable={this.state.purchaseable}
            price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
