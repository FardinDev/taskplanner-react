import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
export class AddTask extends Component {
 

   

    submit = (e) => {
        
        if (this.props.edit) {

            e.preventDefault();
            this.props.update(this.props.taskName);
         
        }
        else {
            
            e.preventDefault();
            this.props.addTask(this.props.taskName);
        }

        
    }
    render() {
        return (
            <div >
                <form onSubmit={this.submit} style={{display: 'flex'}} autoComplete="off" >
                <TextField
                        id='name'
                        name='taskName'
                        label="Task"
                        style={{ margin: 8 }}
                        placeholder="Enter Tasks"
                        fullWidth
                        multiline
                        rows="5"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                        shrink: true,
                        }}

                        value={this.props.taskName}
                        onChange={this.props.setTaskName}
                        required

                    />
                    {/* <Fab color="primary" type='submit' aria-label="add" >
                        <AddIcon />
                    </Fab> */}

                    <Button variant="outlined" type='submit' color="primary" style={{margin: '8px'}}>
                    <AddIcon />

                    </Button>
                </form>
            </div>
        )
    }
}

export default AddTask
