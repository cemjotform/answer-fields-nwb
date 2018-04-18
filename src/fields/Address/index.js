import React from 'react';
import PropTypes from 'prop-types';
import Line from '../../components/Line';
import CompositeView from '../../components/CompositeView';
import Baseline from '../../components/Baseline';

const Address = ({
  text,
  sublabels: {
    addr_line1: LabelLine1,
    addr_line2: LabelLine2,
    city: LabelCity,
    state: LabelState,
    postal: LabelPostal,
    country: LabelCountry
  },
  answer: {
    addr_line1: AnswerLine1,
    addr_line2: AnswerLine2,
    city: AnswerCity,
    state: AnswerState,
    postal: AnswerPostal,
    country: AnswerCountry
  },
  lineProps: {
    addr_line1: PropsLine1,
    addr_line2: PropsLine2,
    city: PropsCity,
    state: PropsState,
    postal: PropsPostal,
    country: PropsCountry
  },
  containerProps
}) => (
  <Baseline label={text} {...containerProps}>
    <CompositeView>
      <Line label={LabelLine1} value={AnswerLine1} {...PropsLine1} />
      <Line label={LabelLine2} value={AnswerLine2} {...PropsLine2} />
      <Line label={LabelCity} value={AnswerCity} {...PropsCity} />
      <Line label={LabelState} value={AnswerState} {...PropsState} />
      <Line label={LabelPostal} value={AnswerPostal} {...PropsPostal} />
      <Line label={LabelCountry} value={AnswerCountry} {...PropsCountry} />
    </CompositeView>
  </Baseline>
);

Address.propTypes = {
  text: PropTypes.string,
  answer: PropTypes.shape({
    addr_line1: PropTypes.string,
    addr_line2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postal: PropTypes.string,
    country: PropTypes.string
  }),
  lineProps: PropTypes.shape({
    addr_line1: PropTypes.string,
    addr_line2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postal: PropTypes.string,
    country: PropTypes.string
  }),
  sublabels: PropTypes.shape({
    addr_line1: PropTypes.string,
    addr_line2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postal: PropTypes.string,
    country: PropTypes.string
  }),
  containerProps: PropTypes.shape({})
};

Address.defaultProps = {
  text: '',
  answer: {},
  lineProps: {},
  sublabels: {},
  containerProps: {}
};

export default Address;
