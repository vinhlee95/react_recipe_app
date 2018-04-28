import React, { Component } from 'react';
import classes from './recipe.css';

class Recipe extends Component {
   constructor(props) {
      super(props);
      this.state = { showIngredients: false };
   }

   ingredientList = this.props.ingredients.map(ingredient => {
      return <li key={ingredient}>{ingredient}</li>;
   });

   render() {
      let ingredients;
      if(this.state.showIngredients) {
         ingredients = (
            <div>
               <h4>Ingredients</h4>
               <ul>
                  {this.ingredientList}
               </ul>
               <button>Delete</button>
               <button>Edit</button>
            </div>
         )
      }
      return(
            <div className={classes.recipeCard}>
               <span onClick={() => this.setState({ showIngredients: !this.state.showIngredients })}>{this.props.name}</span>
               {ingredients}
            </div>
         );
      }
};

export default Recipe;