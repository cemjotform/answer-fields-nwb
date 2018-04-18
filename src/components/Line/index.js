import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import View from '../View';
import Text from '../Text';

const Sublabel = Styled(View)`
  color: #C0C1C3;
  font-size: 14px;
  font-weight: 100;
`;

const Subtext = Styled(View)`
  font-size: 16px;
  padding-top: 8px;
  font-weight: 100;
`;

const StyledView = Styled(View)`
  padding-bottom: 15px;
`;

const Line = ({
  label,
  value,
  labelContainerProps,
  valueContainerProps,
  ...props
}) => (
  <StyledView className="lineWrapper" {...props}>
    <Sublabel {...labelContainerProps} className="labelWrapper">
      <Text>{label}</Text>
    </Sublabel>
    <Subtext {...valueContainerProps} className="answerWrapper">
      <Text>{value}</Text>
    </Subtext>
  </StyledView>
);

Line.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  labelContainerProps: PropTypes.shape({}),
  valueContainerProps: PropTypes.shape({})
};

Line.defaultProps = {
  label: '',
  value: '',
  labelContainerProps: {},
  valueContainerProps: {}
};

export default Line;
