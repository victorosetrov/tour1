function Item (props) {
  return (
    <div>
      <h3> - {props.name} - <a href={props.link} target="_blank">Buy here</a></h3>
    </div>
  )
}

export default Item;