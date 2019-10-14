import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
export class AddTask extends Component {
    state = {
        name: '',
    }

    setTask = (e) => { 
        this.setState({[e.target.name]: e.target.value})
    }

    submit = (e) => {


        this.props.addTask(this.state.name);
        this.setState({name: ''})
        e.preventDefault();

        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submit} style={{display: 'flex'}} autoComplete="off">
                <TextField
                        id='name'
                        name='name'
                    label="Task Panel"
                    style={{ margin: 8 }}
                    placeholder="Enter Tasks"
                        fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                    shrink: true,
                        }}
                        value={this.state.name}
                        onChange={this.setTask}
                        
                />
                </form>
            </div>
        )
    }
}

export default AddTask
