// import React, { Component } from 'react'
// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';


// export class TaskItem extends Component {

//     getStyle = () => {
//         return { 
       
//             textDecoration: this.props.task.done ? 'line-through' : 'none',
//         }
//     }
//     paperStyle = () => {
//         return {
         
//             padding: '2px 2px',
//         }
        
//     }
//     delBtn = () => {
//         return {
//            float: 'right'
//         }
        
//     }

    
//     render() {
        
//         const { id, name, done } = this.props.task;

//         return (
//             <div style={this.getStyle()}>

//                 <p style={this.paperStyle()}>
//                     <Checkbox value="checkedA"
//                         inputProps={{ 'aria-label': 'Checkbox A' }}
//                         onChange={this.props.markDone.bind(this, id)}
//                         checked={done ? true : false}
//                         color='primary'
                        
//                     />
//                     {name}
//                     <label onClick={this.props.delTask.bind(this, id)}>
//                     <IconButton
//                         style={this.delBtn()}
//                         color="secondary"
//                         aria-label="delete">
//                         <DeleteIcon />
//                     </IconButton>
//                     </label>
//                 </p>
//             </div>
//         )
//     }
// }

// export default TaskItem


import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function TaskItem(props) {
    
    const getStyle = () => {
                return { 
               
                    textDecoration: props.task.done ? 'line-through' : 'none',
                }
            }
  const { id, name, done } = props.task;


    return (

          <ListItem key={id} role={undefined} dense button onClick={props.markDone.bind(this, id)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={done ? true : false}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby':id }}
              />
            </ListItemIcon>
            <ListItemText style={getStyle()} id={id} primary={` ${name}`} />
            <ListItemSecondaryAction >
                <IconButton edge="end" aria-label="edit" color='primary' onClick={props.edtTask.bind(this, id)}>
                    <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" color='secondary' onClick={props.delTask.bind(this, id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
          </ListItem>


  );
}