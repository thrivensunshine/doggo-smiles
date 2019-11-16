import React from 'react';

const CatCard = (props) => (
  <div className="catCard">
  <button onClick = {()=>{
    console.log("works")
  }}>Get a Kitty</button>
  <img className="catPic" src={props.kitty} alt="" />
  </div>
);

export default CatCard;
