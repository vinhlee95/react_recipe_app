import React, { Component } from 'react';
import classes from './App.css';
import Recipe from './Recipe/recipe';
import BackDrop from './UI/BackDrop/backDrop';
import Modal from './UI/Modal/modal';
import Button from './UI/Button/button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          name: 'Spaghetti',
          ingredients: ['Noodles', 'Tomatoes sauce', '(Optional) Meatballs']
        },
        {
          name: 'Onion Pie',
          ingredients: ['Onie', 'Pie Crust']
        },
      ],
      showModal: false,
    }
  }

  renderRecipes() {
    return this.state.recipes.map((recipe, id) => {
      return (
        <Recipe 
          name={recipe.name} 
          key={recipe.name} 
          ingredients={recipe.ingredients} 
          id={id}
          recipes={this.state.recipes}
          handleDeleteRecipe={this.handleDeleteRecipe}
          handleUpdateRecipe={this.handleUpdateRecipe}
        />);
    });
  }

  handleUpdateRecipe = (name, ingredients, id) => {
    let updatedRecipes = this.state.recipes;
    updatedRecipes.splice(id, 1, { name, ingredients });
    this.setState({ recipes: updatedRecipes })
  }

  handleAddRecipe = () => {
    this.setState({ showModal: !this.state.showModal})
  }

  handleDeleteRecipe = id => {
    let recipes = this.state.recipes;
    this.setState({
      recipes: [
        ...recipes.slice(1, id),
        ...recipes.slice(id+1)
      ]
    });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }

  handleAddRecipeForm = (name, ingredients) => {
    const newRecipe = {name, ingredients};
    const updatedRecipes = [
      ...this.state.recipes,
      newRecipe
    ];
    this.setState({ recipes: updatedRecipes, showModal: false });
  }


  render() {
    return (
      <div className={classes.App}>
        <h1>My recipes</h1> 
        {this.renderRecipes()}
        <Button name="Add Recipe" onClick={this.handleAddRecipe} backgroundColor="#337ab7" textColor="white" />
        <BackDrop showModal={this.state.showModal} >
          <Modal handleCloseModal={this.handleCloseModal} handleAddRecipeForm={this.handleAddRecipeForm} />
        </BackDrop>
      </div>
    );
  }
}

export default App;
