import React from "react";
import Todo from '../models/todo'
import classes from './Todo.module.css'

const Item:React.FC<{item: Todo, onRemove: (text: string) =>void}> = ({item, onRemove}) =>{
  const removeItem = () =>{
    onRemove(item.text);
  }
  return (
    <li className={classes.item} onClick={removeItem}>{item.text}</li>
  )
}

const EachItem:React.FC<{item: Todo, onRemoveItem: () =>void}> = ({item, onRemoveItem}) =>{
  return (
    <li className={classes.item} onClick={onRemoveItem}>{item.text}</li>
  )
}

const Todos: React.FC<{items: Todo[], onRemove: (text: string) => void, onRemoveItem:(id: string)=>void}> = (props) =>{
  return (
    <ul className={classes.todos}>
      {props.items.map(item=> <Item key={item.id} item={item} onRemove={props.onRemove}/>)}
      <hr />
      {props.items.map(item=> <EachItem item={item} key={item.id} onRemoveItem={props.onRemoveItem.bind(null, item.id)}/>)}
    </ul>
  )
}


export default Todos;