import React from 'react';
import Button from './Button';
import '../styles/FormInput.css';

interface formInputProps {
  add: Function;
}
class FormInput extends React.Component<formInputProps> {
  state = {
    text: ''
  };

  change = (e: any): void => {
    this.setState({
      text: e.target.value
    });
  };

  submit = (e: any): void => {
    e.preventDefault();
    if (this.state.text !== '') {
      this.props.add(this.state.text);
    }
    this.setState({ text: '' });
  };

  render(): React.ReactNode {
    return (
      <form style={inputForm} onSubmit={this.submit}>
        <input
          type="text"
          style={input}
          placeholder="add task"
          onChange={this.change}
          value={this.state.text}
        ></input>
        <Button text="add" variant="success" action={this.submit} />{' '}
        {/* action harus diisi karena parameter default */}
      </form>
    );
  }
}
export default FormInput;

const inputForm = {
  background: '#fff',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  height: '3rem',
  padding: '0 1rem',
  justifyContent: 'space-between',
  margin: '0.5rem 0'
};
const input = {
  width: '70%',
  border: 'none'
};
