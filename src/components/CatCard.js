import React from 'react';

const CatCard = (props) => (
  <div className="catCard">

  <img className="catPic" src={props.kitty} alt="" />
  </div>
);

export default CatCard;
