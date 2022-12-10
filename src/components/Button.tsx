import React from 'react';
import '../styles/Button.css';

interface ButtonProps {
  text: string;
  variant: string;
  action: any;
}

const Button: React.FC<ButtonProps> = ({ text, variant, action }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={action}>
      {text}
    </button>
  );
};
export default Button;
