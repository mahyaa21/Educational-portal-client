/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router,Route,Switch,Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.1.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.jsx";

import { Provider } from 'react-redux';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser,logoutUser } from './redux/_actions/authentication';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { localeSet } from './redux/_actions/locale';

const hist = createBrowserHistory();

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router history={hist}>
        <Switch>
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Redirect to="/admin/dashboard" />
        </Switch>
      </Router>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);



serviceWorker.register();
