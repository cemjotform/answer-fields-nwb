import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../components/Text';
import Baseline from '../../components/Baseline';

const Textbox = ({
  text,
  answer,
  lineProps,
  ...props
}) => (
  <Baseline label={text} {...props}>
    <Text {...lineProps}>{answer}</Text>
  </Baseline>
);

Textbox.propTypes = {
  answer: PropTypes.string,
  lineProps: PropTypes.shape({}),
  text: PropTypes.string
};

Textbox.defaultProps = {
  answer: '',
  lineProps: {},
  text: ''
};

export default Textbox;
