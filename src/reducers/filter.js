import {SET_FILTER} from '../action/actionTypes'

const setFilter = (filter='all',action) =>{
    switch (action.type){
        case SET_FILTER:
            return action.filter
        default :
            return filter;
    }
}

export default setFilter;