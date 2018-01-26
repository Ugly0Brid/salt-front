import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import HeaderPage from './components/HeaderPage';

const RouterConfig = ({history}) => {
  return (
    <Router history={history}>
      <Switch>
        <Route name="home" breadcrumbName="Home" path="/" component={HeaderPage}/>
      </Switch>
    </Router>
  );
};
export default RouterConfig;


