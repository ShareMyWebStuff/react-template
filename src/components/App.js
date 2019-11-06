import React, {Fragment} from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import otherRoutes from 'components/routing/otherRoutes';
import Header from 'components/layout/header';
import Landing from 'components/layout/landing';
import Footer from 'components/layout/footer';
import history from 'components/history';
import setAuthToken from 'components/utils/setAuthToken';
import 'components/App.css';

// Adds the token to the http header request.
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const  App = () =>  {

  return (
      <Router history={history}>
        <Fragment>
          <Route path="/" component={Header} />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={otherRoutes} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
  );
}

export default App;
