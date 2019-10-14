import React, {Component} from 'react';
import TaskItem from './TaskItem';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AddTask from './AddTask';
import TaskCard from './TaskCard';

export default class Root extends Component{

 

  formatDate = (date) => {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  state = {
    date: this.formatDate(new Date())
}
  render() {
    
    
      return (
        <div style={{ padding: '50px' }}>

          <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
                id="Username"
                label="Name"
                style={{ margin: 8 }}
                value={this.props.name}
                margin="dense"
                variant="outlined"
                onChange={this.props.nameChange}
            />
          </Grid>
        <Grid item xs={12}>
              <AddTask addTask={this.props.addTask}/>
</Grid>
            <Grid item xs={12} >
              { this.props.tasks.map((task) => (
          
        
          
                <TaskItem key={task.id} task={task} markDone={this.props.markDone} delTask={this.props.delTask}/>
            
              )
              )
        }
        </Grid>
        <Grid item xs={12} sm={6}>
              <TaskCard date={this.state.date} type={'Plan'} name={this.props.name} tasks={this.props.tasks}/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TaskCard date={this.state.date} type={'Summary'} name={this.props.name} tasks={this.props.tasks}/>
        </Grid>
      
      </Grid>


        </div>
      )
      
      
      
   
}
}
