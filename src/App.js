import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch,
  Redirect,
  // useLocation
} from 'react-router-dom';

import './assets/index.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import { MasterLayout } from './components/layouts';
import ErrorPage from './views/ErrorPage';
import MobTimer from './views/MobTimer';
import ScrumEstimationCard from './views/ScrumEstimationCard';

function App() {
  return (
    <Router>
      <MasterLayout>
        <Switch>
          <Route exact path="/awesome-tools">
            <Redirect to="/awesome-tools/estimation_card" />
          </Route>
          <Route exact path="/awesome-tools/mob">
            <MobTimer />
          </Route>
          <Route exact path="/awesome-tools/estimation_card">
            <ScrumEstimationCard />
          </Route>
          <Route path="/awesome-tools/*">
            <ErrorPage />
          </Route>
        </Switch>
      </MasterLayout>
    </Router>
  );
}

export default App;