import React, {Component} from 'react';
import TaskItem from './TaskItem';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AddTask from './AddTask';
import PlanCard from './PlanCard';
import SummaryCard from './SummaryCard';

export default class Root extends Component{

 

  render() {
    
    
      return (
        <div style={{ padding: '50px'}} >

          <Grid container spacing={3}>
          <Grid item xs={12} >
            <TextField
                id="Username"
                label="Name"
                placeholder="Enter Name"
                autoFocus
                style={{ margin: 8 }}
                value={this.props.name}
                margin="dense"
                variant="outlined"
                onChange={this.props.nameChange}
            />
          </Grid>
        <Grid item xs={12} sm={6}>
              <AddTask addTask={this.props.addTask}/>
</Grid>
            <Grid item xs={12} sm={6}>
              { this.props.tasks.map((task) => (
          
        
          
                <TaskItem key={task.id} task={task} markDone={this.props.markDone} delTask={this.props.delTask}/>
            
              )
              )
        }
        </Grid>
        <Grid item xs={12} sm={6} style={{ backgroundColor: '#B5FBDD' }}>
          <PlanCard date={this.props.date} type={'Plan'} taskId ={1} name={this.props.name} tasks={this.props.tasks}/>
        </Grid>
        <Grid item xs={12} sm={6} style={{ backgroundColor: '#D4DADE' }}>
        <SummaryCard date={this.props.date} type={'Summary'} taskId ={2} name={this.props.name} tasks={this.props.tasks}/>
        </Grid>
      
      </Grid>


        </div>
      )
      
      
      
   
}
}
