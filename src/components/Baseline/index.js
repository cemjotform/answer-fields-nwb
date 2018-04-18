import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import View from '../View';
import Label from '../Label';

const Baselabel = Styled(Label)`
  margin-bottom: 10px;
`;

const Baseline = ({
  label,
  children,
  labelContainerProps,
  ...props
}) => (
  <View {...props}>
    <Baselabel
      label={label}
      {...labelContainerProps}
    />
    {children}
  </View>
);

Baseline.propTypes = {
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  labelContainerProps: PropTypes.shape({})
};

Baseline.defaultProps = {
  label: '',
  children: <div />,
  labelContainerProps: {}
};

export default Baseline;
