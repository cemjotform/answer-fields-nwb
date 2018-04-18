import React from 'react';
import Styled from 'styled-components';
import View from '../View';

const StyledView = Styled(View)`
  padding: 0 0 0 20px;
`;

const CompositeView = props => <StyledView {...props} />;

export default CompositeView;
