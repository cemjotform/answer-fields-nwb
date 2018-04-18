import React from 'react';
import PropTypes from 'prop-types';
import { Image as SimpleImage } from 'react-native';

const Image = ({
  alt,
  src,
  ...props
}) => {
  const source = src ? { uri: src } : {};

  return (
    <SimpleImage
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
