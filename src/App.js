import React, { useState } from 'react';

import './App.css';
import NavBar from './components/NavBar'
import ScrollAni from './components/ScrollAni';
import Gallery from 'components/Gallery';
import Directions from 'components/Directions';
import WeddingHall from 'components/WeddingHall';
import AccountNumber from 'components/AccountNumber';
import ShareKakao from 'components/ShareKakao';

const App = () => {
    return (
      <div className="container">
        <NavBar></NavBar>
        <ScrollAni></ScrollAni>
        <Gallery></Gallery>
        <Directions></Directions>
        <WeddingHall></WeddingHall>
        <AccountNumber></AccountNumber>
        <ShareKakao></ShareKakao>
      </div>
    );
}

export default App;
