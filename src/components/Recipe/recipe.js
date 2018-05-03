import React, { Component } from 'react';
import classes from './recipe.css';
import Button from '../UI/Button/button';
import BackDrop from '../UI/BackDrop/backDrop';
import EditModal from '../UI/EditModal/edit_modal';

class Recipe extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         showIngredients: true,
         showEditModal: false,
      };
   }

   ingredientList = this.props.ingredients.map(ingredient => {
      return (
         <li key={ingredient} className={classes.ingredientItem} >{ingredient}</li>);
   });

   handleDeleteRecipe(e,id) {
      e.preventDefault();
      this.props.handleDeleteRecipe(id);
   }

   handleShowEditModal = e => {
      e.preventDefault();
      this.setState({ showEditModal: true })
   }

   handleCloseEditModal = () => {
      this.setState({ showEditModal: false })
   }

   render() {
      let ingredients;
      if(this.state.showIngredients) {
         ingredients = (
            <div className={classes.ingredientInfo} >
               <h5>Ingredients</h5>
               <ul className={classes.ingredientList} >
                  {this.ingredientList}
               </ul>
               <Button name="Delete" backgroundColor="red" textColor="white" onClick={e => this.handleDeleteRecipe(e, this.props.id)} />
               <Button name="Edit" backgroundColor="#dff0d8" textColor="black" marginLeft="10px" onClick={e => this.handleShowEditModal(e)} />
            </div>
         )
      }
      return(
            <div className={classes.recipeCard}>
               <h4 
                  onClick={() => this.setState({ showIngredients: !this.state.showIngredients })}
                  className={classes.recipeName} >
                  {this.props.name}
               </h4>
               {ingredients}
               <BackDrop showModal={this.state.showEditModal} >
                  <EditModal 
                     handleCloseModal={this.handleCloseModal}
                     modalName="Edit a Recipe"
                     recipeName={this.props.name}
                     ingredients={this.props.ingredients}
                     handleUpdateRecipe={this.props.handleUpdateRecipe}
                     id={this.props.id}
                     closeEditModal={this.handleCloseEditModal} />
               </BackDrop>
            </div>
         );
      }
};

export default Recipe;