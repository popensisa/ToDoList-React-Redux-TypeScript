import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hook/useTypedSelector'
import { TodoActionTypes } from '../types/todo'
import { Button, TextField} from '@mui/material'
import ModalError from './ModalError'
import Wrapper from './Wrapper'

const TodoList: FC = () => {
    const {task} = useTypedSelector(state => state)
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const addTodo = (name: string) => {
        if(value){
            const todo = {
                name,
                id: Date.now()
            }
            dispatch({type: TodoActionTypes.FETCH_TODO_ADD, payload: todo})
            setValue('')
        }else{
            setOpen(true)
        }
    }
    const removeTodo = (task: any) => {
        dispatch({type: TodoActionTypes.FETCH_TODO_DELETE, payload: task.id})
    }
    return(
        <div className='content'>
            <div className='form'>
                <Button variant="contained" onClick={() => addTodo(value)}>Add a task!</Button>
                <TextField id="outlined-basic" value={value} onChange={e => setValue(e.target.value)} label="Write down your task!" variant="outlined"/>
                <h1>TodoList - React Redux TypeScript</h1>
            </div>
            <Wrapper task={task} removeTodo={removeTodo}/>
            <ModalError open={open} setOpen={setOpen}/>
        </div>
    )
}

export default TodoList