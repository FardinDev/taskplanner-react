import React, {Component} from 'react';
import Root from './components/Root';
import Box from '@material-ui/core/Box';
import Navbar from './components/Navbar';
import uuid from 'uuid';

export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      name: 'Fardin',
      tasks: [
       
      ],     
    };
    
  }
 
  markDone = (id) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          task.done = !task.done;
        }
        return task;
    }) });
  }
  
  delTask = (id) => {
    this.setState({tasks: [...this.state.tasks.filter(task => task.id !== id)]})
  }

  addTask = (name) => {
    const newTask = {
      id: uuid.v4(),
      name,
      done: false
    }
    this.setState({tasks: [...this.state.tasks, newTask]});
  }

  nameChange = (e) => {
    this.setState({name: e.target.value});
  }

  render() {
    return (
      <Box>
        <Navbar />
        
        <Root name={this.state.name} nameChange={this.nameChange} tasks={this.state.tasks} markDone={this.markDone} delTask={this.delTask} addTask={this.addTask}/>
        
      </Box>
    );
}
}
