import React from "react";

export interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({src, alt}) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  )
}

export default Image;
