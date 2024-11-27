import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import { useRecipeStore } from './components/recipeStore';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div>
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img src="./assets/react.svg" className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Recipe Manager</h1>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more.
          </p>
        </header>

        <main>
          <section style={{ marginBottom: '30px' }}>
            <h2>Add a New Recipe</h2>
            <AddRecipeForm /> 
          </section>

          <section>
            <h2>Recipe List</h2>
            <RecipeList /> 
          </section>
      
        </main>

        
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit-recipe/:id" element={<EditRecipeForm />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />

   
        </Routes>
      </div>
    </Router>
  );
}

export default App;
