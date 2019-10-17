import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



export class SummaryCard extends Component {



    copy = () => {
        console.log(
            document.getElementById(this.props.taskId));
    }
    
    render() {


        return (

            <Card style={{ minWidth: 175, margin: 25, cursor: 'pointer' }}  >
                <CardContent onClick={this.copy}>
                    <Typography variant="body2" component="div" gutterBottom>
                    Task {this.props.type} - {this.props.date}
                    <div>{this.props.name}</div>
                    </Typography>
                    <br />
                    <Typography variant="body2" component="div">
                    <b> Done  <span role='img' aria-labelledby='done'>✅</span></b>
                        { this.props.tasks.map((task) => ( task.done ? 
                    
                            <div key={task.id}>
                                {task.name.split("\n").map((i,key) => {
                                return <div key={key}> {i}</div>;
                                })}

                            </div>
                            : ''
                            )
                            )
                        }
                    </Typography>
                    <br />
                    <Typography variant="body2" component="div">
               

                    <b> Pending  <span role='img' aria-labelledby='pending'>⏱</span></b>
                    
                        { this.props.tasks.map((task) => ( !task.done ?
                    
                            <div key={task.id}>
                                {task.name.split("\n").map((i,key) => {
                                return <div key={key}> {i}</div>;
                                })}

                            </div>
                            : ''
                            )
                            )
                        }
                    </Typography>
{/* 
                    <TextField
                        id={''+this.props.taskId}
                        name='name'
                        label="Task"
                        style={{ margin: 8 }}
                        placeholder="Enter Tasks"
                        fullWidth
                        multiline
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        defaultValue={this.state.value}
                        onChange={this.setTask}
                        required

                    /> */}
                </CardContent>
            </Card> 

        
        )
    }
}

export default SummaryCard
