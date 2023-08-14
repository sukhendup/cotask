import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox'
const Task = ({ title,
    description, 
    isCompleted,
    updateHandler,
    deleteHandler,
    id,}) => {
  return (
    <div className="todo">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        {/* <input
          onChange={() => updateHandler(id)}
          type="checkbox"
          checked={isCompleted}
        /> */}
        <Checkbox onChange={() => updateHandler(id)} checked={isCompleted} color="default" 
         sx={{ '& .MuiSvgIcon-root': { fontSize: 35 ,color: 'rgb(51, 51, 51)'} }}/>
        {/* <button onClick={() => deleteHandler(id)} className="btn">
          Delete
        </button> */}
         <Button onClick={() => deleteHandler(id)} variant="text" startIcon={<DeleteIcon />}
         sx={{ color: 'rgb(51, 51, 51)' }}>
            Delete
        </Button>
      </div>
    </div>
  )
}

export default Task
