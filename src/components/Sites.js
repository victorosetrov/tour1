import React from 'react'
import Site from  './Site'

function Sites(props){
  return (
    <ul>
      {props.authors.map(function(i, index) {
        return (
          <li key={index}>
            <Site
            author={i.author}
            site={i.site}
            direct={i.direct}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default Sites
