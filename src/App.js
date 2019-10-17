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
      tasks: [{
        id: uuid.v4(),
        name: 'test',
        done: false
      }],
      date: this.formatDate(new Date()),
      plan: '',
      edit: '',
      taskName: '',
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
    this.setState({
      tasks: [...this.state.tasks, newTask],
      plan: '' + this.state.plan + '' + newTask.name + '\n',
      taskName: '',
    });
  }

  edtTask = (id) => {

    this.state.tasks.map(task => {
      if (task.id === id) {
        this.setState({ edit: task });
        this.setState({ taskName: task.name });
      }
      return task
  })
  }
  updateTask = (name) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === this.state.edit.id) {
          task.name = name;
        }
        
        return task;
      }),
      edit: null,
      taskName: '',
    });
  }

  setTaskName = (e) => { 
    this.setState({[e.target.name]: e.target.value})
}

  nameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <Box>
        <Navbar />
        
        <Root name={this.state.name}
          plan={this.state.plan}
          date={this.state.date}
          nameChange={this.nameChange}
          tasks={this.state.tasks}
          markDone={this.markDone}
          delTask={this.delTask}
          addTask={this.addTask}
          edtTask={this.edtTask}
          edit={this.state.edit}
          update={this.updateTask}
          taskName={this.state.taskName}
          setTaskName={this.setTaskName}
        />
        
      </Box>
    );
}
}
