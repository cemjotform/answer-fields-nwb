import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Preview from './containers/Preview';

render(
  (
    <Router>
      <Switch>
        <Route path="/preview/:field?" component={Preview} />
        {/* <Route path="/:formID?" component={Submission} /> */}
      </Switch>
    </Router>
  )
  , document.getElementById('demo')
);
