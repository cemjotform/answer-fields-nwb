import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../components/Text';
import Baseline from '../../components/Baseline';

const Radio = ({
  text,
  answer,
  lineProps,
  ...props
}) => {
  const sanitzedAnswer = typeof answer === 'object' ? Object.values(answer)[0] : answer;

  return (
    <Baseline label={text} {...props}>
      <Text {...lineProps}>{sanitzedAnswer}</Text>
    </Baseline>
  );
};

Radio.propTypes = {
  answer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      other: PropTypes.string
    })
  ]),
  lineProps: PropTypes.shape({}),
  text: PropTypes.string
};

Radio.defaultProps = {
  answer: [],
  lineProps: {},
  text: ''
};

export default Radio;
