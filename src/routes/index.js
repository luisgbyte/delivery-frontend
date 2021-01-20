import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Product from '~/pages/Product';
import Category from '~/pages/Category';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />

            <Route path="/dashboard" component={Dashboard} isPrivate />
            <Route path="/product" component={Product} isPrivate />
            <Route path="/category" component={Category} isPrivate />
            <Route path="/profile" component={Profile} isPrivate />
            <Route path="" exact component={() => <h1>Error 404</h1>} />
        </Switch>
    );
}
