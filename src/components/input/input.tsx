import React from "react";

export interface InputProps {
  type: string;
}

const Input: React.FC<InputProps> = ({type}) => {
  return (
    <div>
      <input type={type}/>
    </div>
  )
}

export default Input;
