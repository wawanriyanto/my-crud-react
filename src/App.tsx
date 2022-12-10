import React from 'react';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import logo from './logo.svg';
import './App.css';
class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'baca'
      },
      {
        id: 2,
        title: 'nulis'
      }
    ]
  };

  deleteTask = (id: number): void => {
    this.setState({
      todos: this.state.todos.filter((item) => item.id !== id)
    });
  };

  addTask = (data: any): any => {
    const id = this.state.todos.length;
    const newData = {
      id: id + 1,
      title: data
    };
    this.setState({
      todos: [...this.state.todos, newData]
    });
  };

  render(): React.ReactNode {
    const { todos } = this.state;
    return (
      <div className="app">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h3> Task list</h3>
        </div>
        <div className="list">
          {todos.map((item) => (
            <TodoItem key={item.id} todo={item} del={this.deleteTask} />
          ))}
        </div>
        <div className="form-input">
          <FormInput add={this.addTask} />
        </div>
      </div>
    );
  }
}

export default App;
