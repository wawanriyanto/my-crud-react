import React from 'react';
// import Button from './components/Button';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state={
    todos:[
      {
        id:1,
        title:"baca"
      },
      {
        id:2,
        title:"nulis"
      }
    ]
  }
  render(): React.ReactNode {
    const {todos} = this.state
    return (
      <div className="app">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h3> Task list</h3>
        </div>
        <div className="list">
          {todos.map(item =>
          <TodoItem key={item.id} todo ={item}/>
            )}
        </div>
        <div className="form-input">
          <FormInput/>
        </div>
      </div>
    )
  }
}

export default App;
