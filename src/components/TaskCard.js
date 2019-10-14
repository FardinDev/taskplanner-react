import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export class TaskCard extends Component {

    
    render() {


        return (

            <Card style={{ minWidth: 275}}>
            <CardContent>
            <Typography variant="body2" component="p" gutterBottom>
            Task {this.props.type} - {this.props.date}
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
            {this.props.name} 
            </Typography>
            <br />
            <Typography variant="body2" component="div">
                
            { this.props.tasks.map((task) => (
          
        
          
          <p key={task.id}>-- {task.name} </p>
      
        )
        )
    }
            
            </Typography>
            </CardContent>
            </Card> 

        
        )
    }
}

export default TaskCard
