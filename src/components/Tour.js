import React from 'react'

function Tour(props){
  return(
    <div>
      <h3>{props.author}</h3>
      <div>{props.tour} - {props.cost}</div>
    </div>
  );
}

export default Tour;
