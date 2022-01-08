import "../styles/index.scss";
import React from 'react';
import Recipes from './Recipes';
import sword from '../images/sword.jpg';
import web from '../images/web.svg';

const App = () => {
  return (
    <>
    <section class="hero"><h2>Hero</h2></section>
    <main>
      <section>
        <h1>Oh Hi, React</h1>
      </section>
      <img src={sword} alt="sword" width="250" />
      <Recipes />
    </main>
    </>
  );
};

export default App;