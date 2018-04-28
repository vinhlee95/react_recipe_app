import React, { Component } from 'react';
import classes from './App.css';
import Recipe from './Recipe/recipe';
import BackDrop from './UI/BackDrop/backDrop';
import Modal from './UI/Modal/modal';

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
      showModal: true,
    }
  }

  renderRecipes() {
    return this.state.recipes.map(recipe => {
      return <Recipe name={recipe.name} key={recipe.name} ingredients={recipe.ingredients} />;
    });
  }

  handleAddRecipe = () => {
    this.setState({ showModal: !this.state.showModal})
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <div className={classes.App}>
        <h1>My recipes</h1> 
        {this.renderRecipes()}
        <button className="btn-info" onClick={this.handleAddRecipe}>Add Recipe</button>
        <BackDrop showModal={this.state.showModal} >
          <Modal handleCloseModal={this.handleCloseModal} />
        </BackDrop>
      </div>
    );
  }
}

export default App;
