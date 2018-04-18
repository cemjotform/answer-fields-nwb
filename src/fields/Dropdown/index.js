import React from 'react';
import PropTypes from 'prop-types';

import View from '../../components/View';
import Text from '../../components/Text';
import Baseline from '../../components/Baseline';

const Dropdown = ({
  text,
  answer,
  lineProps,
  optionProps,
  ...props
}) => {
  const AnswerDropdownLocal = typeof answer === 'string' ? [answer] : answer;
  return (
    <View {...props}>
      <Baseline
        label={text}
        {...lineProps}
      >
        {AnswerDropdownLocal.map(opt => (
          <Text
            key={`dropdown_${opt}`}
            {...optionProps}
          >
            {opt}
          </Text>
        ))}
      </Baseline>
    </View>
  );
};

Dropdown.propTypes = {
  answer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  lineProps: PropTypes.shape({}),
  optionProps: PropTypes.shape({}),
  text: PropTypes.string
};

Dropdown.defaultProps = {
  answer: [],
  lineProps: {},
  text: '',
  optionProps: {}
};

export default Dropdown;
