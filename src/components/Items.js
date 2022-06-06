import Item from "./Item";

function Items (props) {
  return (
    <div>
      {props.shopping_list.map(function (i, index) {
        return(
          <div key={index}>
            <Item
              name = {i.name}
              link = {i.link}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Items;