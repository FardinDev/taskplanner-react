import React, { Component } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


export class TaskItem extends Component {

    getStyle = () => {
        return { 
       
            textDecoration: this.props.task.done ? 'line-through' : 'none',
        }
    }
    paperStyle = () => {
        return {
         
            padding: '2px 2px',
        }
        
    }
    delBtn = () => {
        return {
           float: 'right'
        }
        
    }

    
    render() {
        
        const { id, name, done } = this.props.task;

        return (
            <div style={this.getStyle()}>

                <p style={this.paperStyle()}>
                    <Checkbox value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                        onChange={this.props.markDone.bind(this, id)}
                        checked={done ? true : false}
                        color='primary'
                        
                    />
                    {name}
                    <label onClick={this.props.delTask.bind(this, id)}>
                    <IconButton
                        style={this.delBtn()}
                        color="secondary"
                        aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                    </label>
                </p>
            </div>
        )
    }
}

export default TaskItem
