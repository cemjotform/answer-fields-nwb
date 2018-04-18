import React from 'react';
import PropTypes from 'prop-types';

import Listview from '../../components/Listview';
import View from '../../components/View';

const Matrix = ({
  sublabels,
  answer,
  lineProps,
  ...props
}) => (
  <View {...props}>
    <Listview />
  </View>
);

Matrix.propTypes = {
  answer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({})
  ]),
  lineProps: PropTypes.shape({}),
  sublabels: PropTypes.shape({})
};

Matrix.defaultProps = {
  answer: {},
  lineProps: {},
  sublabels: {}
};

export default Matrix;
