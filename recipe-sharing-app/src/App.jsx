import React from 'react';
import './App.css';
import AddRecipeForm from './components/AddRecipeForm'; // Import the AddRecipeForm component
import RecipeList from './components/RecipeList'; // Import the RecipeList component

function App() {
  return (
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
          <AddRecipeForm /> {/* Display the AddRecipeForm component */}
        </section>

        <section>
          <h2>Recipe List</h2>
          <RecipeList /> {/* Display the RecipeList component */}
        </section>
      </main>
    </div>
  );
}

export default App;
