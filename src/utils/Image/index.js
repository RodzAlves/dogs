import React, { useState } from 'react';
import { ImageWrapper, Skeleton } from './styles';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoadImage({ target }) {
    target.style.opacity = 1;
    setSkeleton(false);
  }

  return (
    <ImageWrapper>
      {skeleton && <Skeleton></Skeleton>}
      <img onLoad={handleLoadImage} alt={alt} {...props} />
    </ImageWrapper>
  );
};

export default Image;
