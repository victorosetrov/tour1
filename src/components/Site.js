import React from 'react'

function Site(props){
  return(
    <div>
      <h3>{props.author}</h3>
      <div>{props.site} - {props.direct}</div>
    </div>
  );
}

export default Site;
