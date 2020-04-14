import React from 'react';

const ImageCard = ({ data }) => {
  const { id, pageUrl, tags, webformatURL, views, downloads, likes } = data;
  console.log(webformatURL);
  return (
    <div>
      <img src={webformatURL} alt={'img'} />
    </div>
  );
};

export default ImageCard;
