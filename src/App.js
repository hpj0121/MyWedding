import React, { useState } from 'react';

import './App.css';
import NavBar from './components/NavBar'
import ScrollAni from './components/ScrollAni';
import Gallery from 'components/Gallery';
import Directions from 'components/Directions';

const App = () => {
    return (
      <div className="container">
        <NavBar></NavBar>
        <ScrollAni></ScrollAni>
        <Gallery></Gallery>
        <Directions></Directions>
      </div>
    );
}

export default App;
