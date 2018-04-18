import React from 'react';
import PropTypes from 'prop-types';

import Baseline from '../../components/Baseline';
import Text from '../../components/Text';

const Time = ({
  text,
  answer: {
    hourSelect,
    minuteSelect,
    ampm
  },
  lineProps,
  ...props
}) => {
  const time = hourSelect && minuteSelect ? `${hourSelect}:${minuteSelect} ${ampm ? ampm : ''}` : '';

  return (
    <Baseline label={text} {...props}>
      <Text {...lineProps}>
        {time}
      </Text>
    </Baseline>
  );
};

Time.propTypes = {
  text: PropTypes.string,
  answer: PropTypes.shape({
    hourSelect: PropTypes.string,
    minuteSelect: PropTypes.string,
    ampm: PropTypes.string
  }),
  lineProps: PropTypes.shape({})
};

Time.defaultProps = {
  text: '',
  answer: {},
  lineProps: {}
};

export default Time;
