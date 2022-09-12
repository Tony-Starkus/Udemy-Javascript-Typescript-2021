import React from 'react';

interface IProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<IProps> = (props) => {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.text}
    </button>
  );
};

export default Button;
