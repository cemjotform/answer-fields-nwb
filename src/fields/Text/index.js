import React from 'react';
import PropTypes from 'prop-types';

import SimpleText from '../../components/Text';
import View from '../../components/View';

const Text = ({
  text,
  lineProps,
  ...props
}) => (
  <View {...props}>
    <SimpleText dangerouslySetInnerHTML={{ __html: text }} {...lineProps} />
  </View>
);

Text.propTypes = {
  text: PropTypes.string,
  lineProps: PropTypes.shape({})
};

Text.defaultProps = {
  text: '',
  lineProps: {}
};

export default Text;
