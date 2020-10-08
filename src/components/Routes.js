import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import HomePage from '../views/HomePage/HomePage';
import ErrorPage from '../views/ErrorPage/ErrorPage';

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route component={ErrorPage} exact/>
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;