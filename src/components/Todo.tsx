import React from "react";
import Todo from '../models/todo'

const Item:React.FC<{item: Todo}> = ({item}) =>{
  return (
    <li>{item.text}</li>
  )
}

const Todos: React.FC<{items: Todo[]}> = (props) =>{
  return (
    <ul>
      {props.items.map(item=> <Item item={item} />)}
    </ul>
  )
}


export default Todos;