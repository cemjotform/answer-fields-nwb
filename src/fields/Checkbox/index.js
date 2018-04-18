import React from 'react';
import PropTypes from 'prop-types';

import View from '../../components/View';
import Text from '../../components/Text';
import Baseline from '../../components/Baseline';

const Checkbox = ({
  text,
  answer,
  lineProps,
  optionProps,
  ...props
}) => {
  const sanitizedAnswer = answer ? answer : [];
  const answerArray = !Array.isArray(sanitizedAnswer) ? Object.values(sanitizedAnswer) : sanitizedAnswer;

  return (
    <View {...props}>
      <Baseline
        label={text}
        {...lineProps}
      >
        {answerArray.map(opt => (
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

Checkbox.propTypes = {
  answer: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.arrayOf(PropTypes.string)
  ]),
  lineProps: PropTypes.shape({}),
  optionProps: PropTypes.shape({}),
  text: PropTypes.string
};

Checkbox.defaultProps = {
  answer: [],
  lineProps: {},
  text: '',
  optionProps: {}
};

export default Checkbox;
