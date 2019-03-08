import React, { Component } from "react";
import ToDo from './ToDo';

class ToDoList extends Component {
  render() {
    const { todos,toggleTodo} = this.props;
    return (
      <ul>
        {
            todos.map(todo=> {
              return  <ToDo id={todo.id} {...todo} onClick = {()=>{toggleTodo(todo.id)}}/>
            })
        }
      </ul>
    );
  }
}

export default ToDoList;
