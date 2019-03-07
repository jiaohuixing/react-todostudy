import React, { Component } from 'react';
import ToDoList from './ToDoList';
import AddToDo from './AddToDo';
import Footer from './Footer';

// const todos = [
//   {
//     id:1,
//     text:'text1',
//     completed : true
//   },
//   {
//     id:2,
//     text:'text2',
//     completed : false
//   },
//   {
//     id:3,
//     text:'text3',
//     completed : false
//   },
// ]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos : [],
      filter : 'all'
    }
    this.nextToDoID = 0;
  }
  getVisibleToDos = ()=>{
    const currentFilter = this.state.filter;
    return this.state.todos.filter(todo=>{
      if (currentFilter === 'active'){
        return !todo.completed
      }else if(currentFilter === 'completed'){
        return todo.completed
      }else{
        return true
      }
    })
  }
  render() {
    const todos = this.getVisibleToDos();
    const {filter} = this.props;
    return (
      <div>
        <AddToDo addToDo={this.addToDo}/>
        <ToDoList todos={todos}/>
        <Footer filter={filter} />
      </div>
    );
  }

  addToDo = (text)=>{
    const {todos} = this.state;
    const todo = {
      id : this.nextToDoID++,
      text,
      completed:false
    }
    let newToDos = [todo,...todos];
    this.setState({
      todos : newToDos
    })
  }

  toggleTodo = (id)=>{
    
  }
}

export default App;
