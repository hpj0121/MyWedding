import React from 'react';

import './App.css';
import NavBar from './components/NavBar'
import ScrollAni from './components/ScrollAni';
import Directions from 'components/Directions';
import WeddingHall from 'components/WeddingHall';
import AccountNumber from 'components/AccountNumber';
import ShareKakao from 'components/ShareKakao';
import SimpleSlider from 'components/SimpleSlider';

const App = () => {
    return (
      <div className="container">
        <NavBar></NavBar>
        <ScrollAni></ScrollAni>
        <SimpleSlider></SimpleSlider>
        <Directions></Directions>
        <WeddingHall></WeddingHall>
        <AccountNumber></AccountNumber>
        <ShareKakao></ShareKakao>
      </div>
    );
}

export default App;
