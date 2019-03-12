import {SET_TODO_TEXT} from '../action/actionTypes'

const setTodoText = (text='',action) =>{
    switch (action.type){
        case SET_TODO_TEXT:
            return action.text
        default :
            return text;
    }
}

export default setTodoText;