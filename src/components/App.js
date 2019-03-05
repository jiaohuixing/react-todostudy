import React, { Component } from 'react';
import ToDoList from './ToDoList';
import AddToDo from './AddToDo';
import Footer from './Footer';

const todos = [
  {
    id:1,
    text:'text1',
    completed : false
  },
  {
    id:2,
    text:'text2',
    completed : false
  },
  {
    id:3,
    text:'text3',
    completed : false
  },
]
const filter = 'all';
class App extends Component {
  render() {
    return (
      <div>
        <AddToDo />
        <ToDoList todos={todos}/>
        <Footer filter={filter} />
      </div>
    );
  }
}

export default App;
