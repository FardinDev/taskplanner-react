import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
export class AddTask extends Component {
    state = {
        name: '',
    }

    setTask = (e) => { 
        this.setState({[e.target.name]: e.target.value})
    }

    submit = (e) => {


        e.preventDefault();
        this.props.addTask(this.state.name);
        this.setState({name: ''})

        
    }
    render() {
        return (
            <div >
                <form onSubmit={this.submit} style={{display: 'flex'}} autoComplete="off" >
                <TextField
                        id='name'
                        name='name'
                        label="Task"
                        style={{ margin: 8 }}
                        placeholder="Enter Tasks"
                        fullWidth
                        multiline
                        rows="4"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        value={this.state.name}
                        onChange={this.setTask}
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
