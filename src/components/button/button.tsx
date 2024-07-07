import React from "react";

export interface ButtonProps {
  label: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
  return (
    <button
     onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;
