import React from 'react';
import PropTypes from 'prop-types';

import Line from '../../components/Line';
import CompositeView from '../../components/CompositeView';
import Baseline from '../../components/Baseline';

const Fullname = ({
  text,
  sublabels: {
    prefix: LabelPrefix,
    first: LabelFirstName,
    middle: LabelMiddleName,
    last: LabelLastName,
    suffix: LabelSuffix
  },
  answer: {
    prefix: AnswerPrefix,
    first: AnswerFirstName,
    middle: AnswerMiddleName,
    last: AnswerLastName,
    suffix: AnswerSuffix
  },
  lineProps: {
    prefix: PropsPrefix,
    first: PropsFirstName,
    middle: PropsMiddleName,
    last: PropsLastName,
    suffix: PropsSuffix,
    ...containerProps
  },
  ...props
}) => (
  <Baseline label={text} {...containerProps}>
    <CompositeView>
      <Line label={LabelPrefix} value={AnswerPrefix} {...PropsPrefix} />
      <Line label={LabelFirstName} value={AnswerFirstName} {...PropsFirstName} />
      <Line label={LabelMiddleName} value={AnswerMiddleName} {...PropsMiddleName} />
      <Line label={LabelLastName} value={AnswerLastName} {...PropsLastName} />
      <Line label={LabelSuffix} value={AnswerSuffix} {...PropsSuffix} />
    </CompositeView>
  </Baseline>
);

Fullname.propTypes = {
  text: PropTypes.string,
  answer: PropTypes.shape({
    prefix: PropTypes.string,
    first: PropTypes.string,
    middle: PropTypes.string,
    last: PropTypes.string,
    suffix: PropTypes.string
  }),
  lineProps: PropTypes.shape({
    prefix: PropTypes.shape({}),
    first: PropTypes.shape({}),
    middle: PropTypes.shape({}),
    last: PropTypes.shape({}),
    suffix: PropTypes.shape({})
  }),
  sublabels: PropTypes.shape({
    prefix: PropTypes.string,
    first: PropTypes.string,
    middle: PropTypes.string,
    last: PropTypes.string,
    suffix: PropTypes.string
  })
};

Fullname.defaultProps = {
  text: '',
  answer: {},
  lineProps: {},
  sublabels: {}
};

export default Fullname;
