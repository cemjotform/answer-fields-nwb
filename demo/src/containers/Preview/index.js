import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';
import MockData from '../../mockData.json';
import * as AnswerFields from '../../../../src';

const Preview = ({ location: { pathname }, match: { params: { field } } }) => {
  const Component = AnswerFields[field];
  return (
    <div className="appContainer">
      <div className="navigationContainer">
        {Object.keys(AnswerFields).map((fieldName) => {
          const componentPath = `/preview/${fieldName}`;
          return (
            <Link
              key={`link_${fieldName}`}
              to={componentPath}
              href={componentPath}
              className={`${pathname === componentPath ? 'active' : ''}`}
            >
              {fieldName}
            </Link>
          );
        })}
      </div>
      <div className="previewContainer">
        <div className="previewContent">
          {Component ? <Component {...MockData[field]} /> : null}
        </div>
      </div>
    </div>
  );
};

Preview.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      field: PropTypes.string
    })
  })
};

Preview.defaultProps = {
  match: {}
};

export default Preview;

