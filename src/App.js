import React from 'react';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  // Link,
  Switch,
  Redirect,
  // useLocation
} from 'react-router-dom';

import './assets/index.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "toastr/build/toastr.min.css";

import { MasterLayout } from './components/layouts';
import ErrorPage from './views/ErrorPage';
import MobTimer from './views/MobTimer';
import ScrumEstimationCard from './views/ScrumEstimationCard';

function App() {
  return (
    <Router>
      <MasterLayout>
        <Switch>
          <Route exact path="/">
            <Redirect to="/estimation_card" />
          </Route>
          <Route exact path="/mob">
            <MobTimer />
          </Route>
          <Route exact path="/estimation_card">
            <ScrumEstimationCard />
          </Route>
          <Route path="/*">
            <ErrorPage />
          </Route>
        </Switch>
      </MasterLayout>
    </Router>
  );
}

export default App;
