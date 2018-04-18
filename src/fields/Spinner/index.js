import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../components/Text';
import Baseline from '../../components/Baseline';

const Spinner = ({
  text,
  answer,
  lineProps,
  ...props
}) => (
  <Baseline label={text} {...props}>
    <Text {...lineProps}>{answer}</Text>
  </Baseline>
);

Spinner.propTypes = {
  answer: PropTypes.string,
  lineProps: PropTypes.shape({}),
  text: PropTypes.string
};

Spinner.defaultProps = {
  answer: '',
  lineProps: {},
  text: ''
};

export default Spinner;
