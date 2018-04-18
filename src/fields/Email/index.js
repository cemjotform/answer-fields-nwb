import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../components/Text';
import Baseline from '../../components/Baseline';

const Email = ({
  text,
  answer,
  lineProps,
  ...props
}) => (
  <Baseline label={text} {...props}>
    <Text {...lineProps}>{answer}</Text>
  </Baseline>
);

Email.propTypes = {
  answer: PropTypes.string,
  lineProps: PropTypes.shape({}),
  text: PropTypes.string
};

Email.defaultProps = {
  answer: '',
  lineProps: {},
  text: ''
};

export default Email;
