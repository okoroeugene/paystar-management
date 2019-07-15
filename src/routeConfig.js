'use strict';

import React, { Component } from 'react';
import {
    Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import constants from '../src/constants';
import history from './config/history';
import MainLayout from './components/MainLayout';
import EmptyLayout from './components/EmptyLayout';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Categories from './components/Categories';
import Packages from './components/Packages';
import Providers from './components/Providers';
import NewPackages from './components/NewPackages';

function isAuthenticated() {
    // var token = window.sessionStorage.getItem(constants.TOKEN)
    // if (!token) return false;
    return true;
}

const AppRoute = ({ Layout, Component, path }, ...rest) => (
    <Route {...rest} path={path} render={props => (
        <Layout>
            <Component {...props} />
        </Layout>
    )} />
)

const ProtectedRoute = ({ Layout, Component, path }, ...rest) => (
    <Route {...rest} path={path} render={props => (
        isAuthenticated() === true
            ? <Layout>
                <Component {...props} />
            </Layout>
            : <Redirect to={{
                pathname: "/login",
                state: { from: props.location }
            }} />
    )} />
)

const App = () => (
    <Router history={history}>
        <Switch>
            <AppRoute exact path={"/login"} Layout={EmptyLayout} Component={Login} />
            <AppRoute exact path={"/register"} Layout={EmptyLayout} Component={Register} />
            <ProtectedRoute exact path={"/dashboard"} Layout={MainLayout} Component={Dashboard} />
            <ProtectedRoute exact path={"/categories"} Layout={MainLayout} Component={Categories} />
            <ProtectedRoute exact path={"/providers"} Layout={MainLayout} Component={Providers} />
            <ProtectedRoute exact path={"/packages"} Layout={MainLayout} Component={Packages} />
            <ProtectedRoute exact path={"/new-packages"} Layout={MainLayout} Component={NewPackages} />
            <Redirect from="/" to="dashboard" />
        </Switch>
    </Router>
)

export default App;