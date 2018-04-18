import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import View from '../View';
import Text from '../Text';

const LabelText = Styled(Text)`
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: 600;
`;

const Label = ({
  label,
  textProps,
  ...props
}) => (
  <View {...props}>
    <LabelText {...textProps}>{label}</LabelText>
  </View>
);

Label.propTypes = {
  label: PropTypes.string,
  textProps: PropTypes.shape({})
};

Label.defaultProps = {
  label: '',
  textProps: {}
};

export default Label;

