export enum TodoActionTypes {
    FETCH_TODO_ADD = 'FETCH_TODO_ADD',
    FETCH_TODO_DELETE = 'FETCH_TODO_DELETE',
}
export interface TodoState {
    task: any[]
    completed: boolean
}

interface TodoAddAction {
    type: TodoActionTypes.FETCH_TODO_ADD
    payload: any[]
}
interface TodoDeleteAction {
    type: TodoActionTypes.FETCH_TODO_DELETE
    payload: any[]
}

export type TodoAction = TodoDeleteAction | TodoAddAction