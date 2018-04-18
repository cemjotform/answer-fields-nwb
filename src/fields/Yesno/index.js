import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../components/Text';
import Baseline from '../../components/Baseline';

const Yesno = ({
  text,
  answer,
  lineProps,
  ...props
}) => (
  <Baseline label={text} {...props}>
    <Text {...lineProps}>{answer}</Text>
  </Baseline>
);

Yesno.propTypes = {
  answer: PropTypes.string,
  lineProps: PropTypes.shape({}),
  text: PropTypes.string
};

Yesno.defaultProps = {
  answer: '',
  lineProps: {},
  text: ''
};

export default Yesno;
