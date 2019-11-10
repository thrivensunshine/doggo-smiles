import React from 'react';

const DogCard = (props) => (
  <div className="dogCard">
<img className="dogPic" src={props.doggo} alt="" />
  </div>
);

export default DogCard;
