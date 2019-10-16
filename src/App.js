import React, {Component} from 'react';
import Root from './components/Root';
import Box from '@material-ui/core/Box';
import Navbar from './components/Navbar';
import uuid from 'uuid';

export default class App extends Component{

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

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tasks: [],
      date: this.formatDate(new Date()),
      plan: '',
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
    this.setState({ tasks: [...this.state.tasks, newTask] });
    this.setState({ plan: ''+this.state.plan+''+newTask.name+'\n' });
  }

  nameChange = (e) => {
    this.setState({ name: e.target.value });
   
  }

  render() {
    return (
      <Box>
        <Navbar />
        
        <Root name={this.state.name} plan={this.state.plan} date={this.state.date} nameChange={this.nameChange} tasks={this.state.tasks} markDone={this.markDone} delTask={this.delTask} addTask={this.addTask}/>
        
      </Box>
    );
}
}
