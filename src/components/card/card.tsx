import React from "react";

export interface CardProps {
  title: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

const Card: React.FC<CardProps> = ({title, body, footer}) => {
  return (
    <div>
      {title && (<div>{title}</div>)}
      {body && (<div>{body}</div>)}
      {footer && (<div>{footer}</div>)}
    </div>
  )
}

export default Card;
