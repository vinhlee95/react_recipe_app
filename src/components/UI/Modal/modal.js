import React from 'react';
import classes from './modal.css';
import Button from '../Button/button';

const Modal = ({ handleCloseModal }) => {
   return (
      <div className={classes.Modal}>
         <form className={classes.addRecipeForm} >
            <div className={classes.formInfo}>
               <h4>Add a Recipe</h4>
               <label>Recipe</label>
               <input placeholder="Recipe Name" />
               <label>Ingredients</label>
               <input placeholder="Ingredient name" />
               <Button name="Add Ingredient" backgroundColor="#337ab7" textColor="white" />
            </div>
            <div className={classes.buttonContainer}>
               <Button name="Add Recipe" backgroundColor="#337ab7" textColor="white" />
               <Button name="Close" marginLeft="10px" onClick={() => handleCloseModal()} />
            </div>
         </form>
      </div>
   );
}

export default Modal;