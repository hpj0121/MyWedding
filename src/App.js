import React, { useState } from 'react';

import './App.css';
import NavBar from './components/NavBar'
import ScrollAni from './components/ScrollAni';
import Gallery from 'components/Gallery';

const App = () => {
    return (
      <div className="container">
        <NavBar></NavBar>
        <ScrollAni></ScrollAni>
        <Gallery></Gallery>
      </div>
    );
}

export default App;
