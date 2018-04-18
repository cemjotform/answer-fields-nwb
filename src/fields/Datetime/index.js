import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

import Text from '../../components/Text';
import Baseline from '../../components/Baseline';

const Datetime = ({
  text,
  answer: {
    year,
    month,
    day,
    hour,
    min,
    ampm
  },
  lineProps,
  ...props
}) => {
  const date = year && month && day ? `${year}-${month}-${day}` : '';
  const datetime = date && hour && min ? `${date} ${hour}:${min}:00 ${ampm ? ampm : ''}` : date;

  return (
    <Baseline label={text} {...props}>
      <Text {...lineProps}>
        {datetime && format(new Date(datetime), 'dddd MMMM DD, YYYY HH:mm A')}
      </Text>
    </Baseline>
  );
};

Datetime.propTypes = {
  text: PropTypes.string,
  answer: PropTypes.shape({
    year: PropTypes.string,
    month: PropTypes.string,
    day: PropTypes.string,
    hour: PropTypes.string,
    min: PropTypes.string,
    ampm: PropTypes.string
  }),
  lineProps: PropTypes.shape({})
};

Datetime.defaultProps = {
  text: '',
  answer: {},
  lineProps: {}
};

export default Datetime;
