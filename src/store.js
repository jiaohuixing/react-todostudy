import {createStore} from 'redux'
import rootReducers from './reducers'
import {addTodo,toggleTODO,setFilter,setTodoText} from './action'

const store = createStore(rootReducers);

//初始state输出
console.log(store.getState());

//订阅state的变化
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})


//发生actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(toggleTODO(0));
store.dispatch(setFilter('active'));
store.dispatch(setTodoText('Learn'));

unsubscribe();
