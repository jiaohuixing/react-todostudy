import React, { Component } from 'react';

class AddToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            text : ''
        }
    }
    render() {
        return (
            <div>
                <input value={this.state.text} onChange={this.handleOnChange}/>
                <button onClick={this.handleClick}>Add</button>
            </div>
            
        );
    }
    handleOnChange=(e)=>{
        this.setState({
            text : e.target.value
        })
    }
    handleClick=()=>{
        this.props.addToDo(this.state.text);
    }
}

export default AddToDo;