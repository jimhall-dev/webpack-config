import "../styles/style.scss";
import React from 'react';
import Recipes from './Recipes';

const App = () => {
  return (
    <>
    <section class="hero"></section>
    <main>
      <section>
        <h1>Oh Hi, React :::</h1>
      </section>
    </main>
    <Recipes />
    </>
  );
};

export default App;