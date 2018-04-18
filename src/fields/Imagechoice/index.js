import React from 'react';
import PropTypes from 'prop-types';

import View from '../../components/View';
import Baseline from '../../components/Baseline';
import Imageline from '../../components/Imageline';

/**
 * TODO: Currently just printing selected option. It may need to change
 * in a way to show other options too.
 */
const Imagechoice = ({
  text,
  answer,
  lineProps,
  optionProps,
  ...props
}) => (
  <View {...props}>
    <Baseline label={text} {...lineProps} >
      {answer.map(txt => txt.split('|')).map(([opt, value]) => (
        <Imageline
          key={`${opt}_${value}`}
          label={opt}
          value={value}
          {...optionProps}
        />
      ))}
    </Baseline>
  </View>
);

Imagechoice.propTypes = {
  text: PropTypes.string,
  answer: PropTypes.arrayOf(PropTypes.string),
  lineProps: PropTypes.shape({}),
  optionProps: PropTypes.shape({})
};

Imagechoice.defaultProps = {
  text: '',
  answer: [],
  lineProps: {},
  optionProps: {}
};

export default Imagechoice;
