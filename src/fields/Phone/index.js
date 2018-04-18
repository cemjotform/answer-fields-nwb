import React from 'react';
import PropTypes from 'prop-types';

import Line from '../../components/Line';
import View from '../../components/View';
import Baseline from '../../components/Baseline';

const Phone = ({
  text,
  sublabels: {
    country: LabelCountryCode,
    area: LabelAreaCode,
    phone: LabelPhoneNumber,
    full: LabelFullNumber
  },
  answer: {
    country: AnswerCountryCode,
    area: AnswerAreaCode,
    phone: AnswerPhoneNumber,
    full: AnswerFullNumber
  },
  lineProps: {
    country: PropsCountryCode,
    area: PropsAreaCode,
    phone: PropsPhoneNumber,
    full: PropsFullNumber,
    ...containerProps
  },
  ...props
}) => (
  <View {...props}>
    <Baseline label={text} {...containerProps}>
      <Line label={LabelCountryCode} value={AnswerCountryCode} {...PropsCountryCode} />
      <Line label={LabelAreaCode} value={AnswerAreaCode} {...PropsAreaCode} />
      <Line label={LabelPhoneNumber} value={AnswerPhoneNumber} {...PropsPhoneNumber} />
      <Line label={LabelFullNumber} value={AnswerFullNumber} {...PropsFullNumber} />
    </Baseline>
  </View>
);

Phone.propTypes = {
  text: PropTypes.string,
  answer: PropTypes.shape({
    country: PropTypes.string,
    area: PropTypes.string,
    phone: PropTypes.string,
    full: PropTypes.string
  }),
  lineProps: PropTypes.shape({
    country: PropTypes.shape({}),
    area: PropTypes.shape({}),
    phone: PropTypes.shape({}),
    full: PropTypes.shape({})
  }),
  sublabels: PropTypes.shape({
    country: PropTypes.string,
    area: PropTypes.string,
    phone: PropTypes.string,
    full: PropTypes.string
  })
};

Phone.defaultProps = {
  text: '',
  answer: {},
  lineProps: {},
  sublabels: {}
};

export default Phone;
