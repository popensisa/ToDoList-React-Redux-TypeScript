import React, { FC } from 'react'
import { Checkbox, IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

type PropTypes = {
    task: any[]
    removeTodo: Function
}

const Wrapper: FC<PropTypes> = ({task, removeTodo}) => {

    return(
        <div className='wrapper-todo'>
            {task.length > 0 ?
                <div>
                    <h4>TodoList</h4>
                    {task.map(todo =>
                        <div key={todo.name} className='list'>
                            <span>{todo.name}</span> 
                            <div>
                                <Checkbox/> 
                                <IconButton aria-label="delete" onClick={() => removeTodo(todo)}>
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        </div>   
                    )}
                </div>
                :
                <h4>
                    There are not tasks!
                </h4>
            }
        </div>
    )
}

export default Wrapper