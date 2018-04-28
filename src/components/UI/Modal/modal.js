import React, { Component } from 'react';
import classes from './modal.css';
import Button from '../Button/button';

class Modal extends Component {
   state = {
      recipe: '',
      ingredient: '',
   };

   handleChangeRecipe = (e) => {
      this.setState({ recipe: e.target.value });
   }

   handleChangeIngredient = (e) => {
      this.setState({ ingredient: e.target.value})
   }

   handleAddRecipe = (e) => {
      e.preventDefault();
      
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
                     onClick={this.handleAddRecipe} />
                  <Button name="Close" marginLeft="10px" onClick={() => this.props.handleCloseModal()} />
               </div>
            </form>
         </div>
      );
   }
}

export default Modal;