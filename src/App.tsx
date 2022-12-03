import React from 'react';
import Button from './components/Button';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h3> Task list</h3>
      </div>
      <div className="list">
        <TodoItem/>
      </div>
      <div className="form-input">
        <FormInput/>
      </div>
    </div>
  );
}

export default App;
