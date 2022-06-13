import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo"



const initialState: TodoState = {
    task: [],
    completed: false,
}


export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch(action.type){
        case TodoActionTypes.FETCH_TODO_ADD:
            return {...state, task: [...state.task, action.payload], completed: false }
        case TodoActionTypes.FETCH_TODO_DELETE:
            return {...state, task: state.task.filter(task => task.id !== action.payload)}
        default: 
            return state
    }
}