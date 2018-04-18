import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
  alt,
  ...props
}) => (
  <img
    alt={alt}
    {...props}
  />
);

Image.propTypes = {
  alt: PropTypes.string
};

Image.defaultProps = {
  alt: ''
};

export default Image;
