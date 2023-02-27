import React from 'react';

const NavBar = (props) => {

  return(
    <div className='fixed_box'>
      <div className='nav_parent'>
        <div className='nav_child' data-menu="intro" onClick={props.onClickNavMenu}>표제&거니</div>
        <div className='line'></div>
        <div className='nav_child' data-menu="gallery" onClick={props.onClickNavMenu}>사진</div>
        <div className='line'></div>
        <div className='nav_child' data-menu="map" onClick={props.onClickNavMenu}>오시는 길</div>
      </div>
    </div>
  );
}

export default NavBar;