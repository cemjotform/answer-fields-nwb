import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../components/Text';
import Baseline from '../../components/Baseline';

const Textarea = ({
  text,
  answer,
  lineProps,
  ...props
}) => (
  <Baseline label={text} {...props}>
    <Text {...lineProps}>{answer}</Text>
  </Baseline>
);

Textarea.propTypes = {
  answer: PropTypes.string,
  lineProps: PropTypes.shape({}),
  text: PropTypes.string
};

Textarea.defaultProps = {
  answer: '',
  lineProps: {},
  text: ''
};

export default Textarea;
