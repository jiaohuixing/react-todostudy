import {ADD_TODO,TOGGLE_TODO,SET_FILTER,SET_TODO_TEXT} from './actionTypes'

let netxTodoID = 0


/**
 * addTodo
 * @param text
 */
export const addTodo = (text)=>({
    type : ADD_TODO,
    id : netxTodoID++,
    text,
    completed : false
})


/**
 * 切换完成状态
 * @param {id} id 
 */
export const toggleTODO = (id)=>({
    type : TOGGLE_TODO,
    id
})


/**
 * 设置全局过滤条件
 * @param {} filter 
 */
export const setFilter = (filter) =>({
    type : SET_FILTER,
    filter
})

/**
 * 设置文本信息
 * @param {*} text 
 */
export const setTodoText = (text) =>({
    type : SET_TODO_TEXT,
    text
})