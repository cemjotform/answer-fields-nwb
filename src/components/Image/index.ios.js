import React from 'react';
import { Image } from 'react-native';

const Image = ({
  alt,
  src,
  ...props
}) => {
  const source = src ? { uri: src } : {};

  return (
    <Image
      alt={alt}
      source={source}
      {...props}
    />
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string
};

Image.defaultProps = {
  alt: '',
  src: ''
};

export default Image;
