import React from "react";

const Todos: React.FC<{items: string[]}> = (props) =>{
  return (
    <ul>
      {props.items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  )
}


export default Todos;