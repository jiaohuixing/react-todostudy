import React, { Component } from "react";
import ToDo from './ToDo';

class ToDoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {
            todos.map(todo=> {
              return  <ToDo id={todo.id} {...todo} />
            })
        }
      </ul>
    );
  }
}

export default ToDoList;
