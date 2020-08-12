import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route, Redirect, Switch, Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/Store';
import MediaQuery from 'react-responsive';
import { createHashHistory } from 'history';
import './index.css';

// view pages
import Overview from "./views/Retail/Overview";
import Sales from "./views/Retail/Sales"

// mobile
import MobileOverview from "./views/MobileRetail/Overview";
import MobileSales from "./views/MobileRetail/Sales"

const history = createHashHistory();

ReactDOM.render(
  <Provider store={store}>
    <MediaQuery query='(min-width:767px)'>
      <HashRouter>
        <Switch>
          <Route
            path="/retail/overview"
            render={props => <Overview {...props} />}
          />
          <Route
            path="/retail/sales"
            render={props => <Sales {...props} />}
          />
          <Redirect to="/retail/sales" />
        </Switch>
      </HashRouter>
    </MediaQuery>

    <MediaQuery query='(max-width:767px)'>
        <div>
          <Router history={history}>
            <div className="mobile_appWrap">
                <Switch>
                  <Route
                    path="/retail/mobile/overview"
                    render={props => <MobileOverview {...props} />}
                  />
                  <Route
                    path="/retail/mobile/sales"
                    render={props => <MobileSales {...props} />}
                  />
                  <Redirect to="/retail/mobile/sales" />
                </Switch>
            </div>
          </Router>
        </div>
    </MediaQuery>
  </Provider>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
