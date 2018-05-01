import React, { Component } from 'react';
import classes from './modal.css';
import Button from '../Button/button';

class Modal extends Component {
   state = {
      recipeName: '',
      ingredient: '',
      ingredients: []
   };

   handleChangeRecipe = (e) => {
      this.setState({ recipeName: e.target.value });
   }

   handleChangeIngredient = (e) => {
      this.setState({ ingredient: e.target.value })
   }

   handleAddIngredient = (e) => {
      e.preventDefault();
      let updatedIngredients = [
         ...this.state.ingredients,
         this.state.ingredient
      ]
      this.setState({ ingredients: updatedIngredients, ingredient: '' });
   }

   handleAddRecipeForm = (e) => {
      const { recipeName, ingredients } = this.state;
      e.preventDefault();
      this.props.handleAddRecipeForm(recipeName, ingredients);
   }

   renderIngredients() {
      return this.state.ingredients.map((ingredient, id) => {
         return (
            <div key={ingredient} className={classes.ingredientItem}>
               <li>{ingredient}</li>
               <button className={classes.deleteIngredientButton} onClick={e => this.handleRemoveIngredient(e,id)} >X</button>
            </div>
         );
      });
   }

   handleRemoveIngredient = (e,id) => {
      e.preventDefault();
      const ingredients = this.state.ingredients;
      this.setState({ 
         ingredients: [
            ...ingredients.slice(1, id),
            ...ingredients.slice(id+1)
         ]
      })
   }


   render() {
      return (
         <div className={classes.Modal}>
            <form className={classes.addRecipeForm} >
               <div className={classes.formInfo}>
                  <h4>Add a Recipe</h4>
                  <label>Recipe</label>
                  <input 
                     placeholder="Recipe Name" 
                     onChange={this.handleChangeRecipe}
                     value={this.state.recipe} />

                  <label>Ingredients</label>
                  <ul className={classes.ingredientList} >
                     {this.renderIngredients()}
                  </ul>
                  <input 
                     placeholder="Ingredient name"
                     value={this.state.ingredient}
                     onChange={this.handleChangeIngredient} />
                  <Button 
                     name="Add Ingredient" 
                     backgroundColor="#337ab7" 
                     textColor="white"
                     onClick={this.handleAddIngredient} />
               </div>
               <div className={classes.buttonContainer}>
                  <Button 
                     name="Add Recipe" 
                     backgroundColor="#337ab7" 
                     textColor="white"
                     onClick={this.handleAddRecipeForm} />
                  <Button name="Close" marginLeft="10px" onClick={() => this.props.handleCloseModal()} />
               </div>
            </form>
         </div>
      );
   }
}

export default Modal;