import React from 'react';
import PropTypes from 'prop-types';

import View from '../../components/View';
import Line from '../../components/Line';
import Baseline from '../../components/Baseline';

const Mixed = ({
  text,
  answer,
  sublabels,
  lineProps,
  optionProps,
  ...props
}) => (
  <View {...props}>
    <Baseline label={text} {...lineProps}>
      {Object.keys(answer).map(key => (
        <Line
          key={key}
          label={sublabels[key]}
          value={answer[key]}
          {...optionProps}
        />
      ))}
    </Baseline>
  </View>
);

Mixed.propTypes = {
  text: PropTypes.string,
  answer: PropTypes.shape({}),
  sublabels: PropTypes.shape({}),
  lineProps: PropTypes.shape({})
};

Mixed.defaultProps = {
  text: '',
  answer: {},
  sublabels: {},
  lineProps: {}
};

export default Mixed;
