import React from "react";
import PropTypes from "prop-types";

import View from "../../components/View";
import Baseline from "../../components/Baseline";

const Rating = ({ text, stars, answer, lineProps, iconProps, ...props }) => (
  <View {...props}>
    <Baseline label={text} {...lineProps}>
      <svg viewBox="0 0 24 24" fill="black" height="18" width="18">
        <use
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref="https://icons.jotfor.ms/cardforms/assets/icons/icon-sets-v2/solid/Entertainment/jfc_icon_solid-star.svg"
          href="https://icons.jotfor.ms/cardforms/assets/icons/icon-sets-v2/solid/Entertainment/jfc_icon_solid-star.svg"
        />
      </svg>
    </Baseline>
  </View>
);

Rating.propTypes = {
  answer: PropTypes.string,
  lineProps: PropTypes.shape({}),
  text: PropTypes.string
};

Rating.defaultProps = {
  answer: "",
  lineProps: {},
  text: ""
};

export default Rating;
