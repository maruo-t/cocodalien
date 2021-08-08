import React from 'react';
import './App.css';
import { ThemeTemplete } from './assets/ThemeTemplete';
import { Home } from './page/Home';

const App = () => {
  return (
    <ThemeTemplete>
      <Home />
    </ThemeTemplete>
  );
}

export default App;
