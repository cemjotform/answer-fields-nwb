import React from 'react';
import PropTypes from 'prop-types';

import View from '../View';
import Image from '../Image';
import Baseline from '../Baseline';

const ImageLine = ({
  label,
  value,
  valueContainerProps,
  ...props
}) => (
  <Baseline label={label} {...props}>
    <View {...valueContainerProps}>
      <Image alt={label} src={value} />
    </View>
  </Baseline>
);

ImageLine.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  valueContainerProps: PropTypes.shape({})
};

ImageLine.defaultProps = {
  label: '',
  value: '',
  valueContainerProps: {}
};

export default ImageLine;
