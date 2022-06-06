import React from 'react'
import Tour from  './Tour'

function Tours(props){
  return (
    <ul>
      {props.authors.map(function(i, index) {
        return (
          <li key={index}>
            <Tour
            author={i.author}
            tour={i.tour}
            cost={i.cost}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default Tours
