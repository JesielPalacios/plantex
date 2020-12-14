import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Datos
import tasks from './sample/tareas.json';

// Componentes
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';

class App extends Component {

  state = {
    tasks: tasks
  }

  añadirTarea = (title, description) => {
    const nuevaTarea = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }

    this.setState({
      tasks: [...this.state.tasks, nuevaTarea]
    })
  }

    borrarTarea = (id) => {
      this.state.tasks.filter(task => task.id !==id)
      const nuevasTareas = this.state.tasks.filter(task => task.id !==id)
      this.setState({tasks: nuevasTareas})
    }

    checarHecho = id => {
      const nuevasTareas = this.state.tasks.map(task => {
        if (task.id === id) {
          task.done = !task.done
        }
        return task;
      });
      this.setState({tasks: nuevasTareas})
    }

  render() {
    return <div>
      <Router>
        <Link to="/">Inicio</Link>
        <br/>
        <Link to="/posts">Post</Link>
        <Route exact path="/" render={() => {
          return <div>
            <TaskForm addTask={this.añadirTarea}/>
            <Tasks
              tasks={this.state.tasks}
              deleteTask={this.borrarTarea}
              cheackDone={this.checarHecho}
            />
          </div>
        }}>
        </Route>
        <Route path="/posts" component={Posts} />
      </Router>
    </div>
  };
}

export default App;
