// Bao - Hello world from JS
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './baoApp/redux/Store';

// styles
import "./baoApp/assets/css/bootstrap.min.css";
import "./baoApp/assets/css/paper-kit.css";
import "./baoApp/assets/demo/demo.css";
// pages
import Index from "./baoApp/views/Index.js";
import Ticket from "./baoApp/views/examples/react/Ticket"
import TodoList from "./baoApp/views/examples/react/TodoList"
import WeatherApp from "./baoApp/views/examples/react/WeatherApp"
import RedditBrowserApp from "./baoApp/views/examples/react/RedditBrowserApp"
import JSLeetCode from "./baoApp/views/examples/JsLeetcode"
import AiTensorFlow from "./baoApp/views/examples/AI/TensorFlow"
// others

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/index" render={props => <Index {...props} />} />
        {/* React */}
        <Route
          path="/react-ticket"
          render={props => <Ticket {...props} />}
        />
        <Route
          path="/react-todolist"
          render={props => <TodoList {...props} />}
        />
        <Route
          path="/react-weatherApp"
          render={props => <WeatherApp {...props} />}
        />
        <Route
          path="/react-redditBrowserApp"
          render={props => <RedditBrowserApp {...props} />}
        />
        {/* AI */}
        <Route
          path="/ai-tensorflow"
          render={props => <AiTensorFlow {...props} />}
        />
        {/* Basic */}
        <Route
          path="/js"
          render={props => <JSLeetCode {...props} />}
        />
        <Redirect to="/index" />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
