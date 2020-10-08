import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import HomePage from '../views/HomePage';
import ErrorPage from '../views/ErrorPage';

const Routes = () => {
    return(
        <div>
            <Router>
                
                <Route path="/" component={HomePage} exact/>
                <Route component={ErrorPage}/>
            </Router>
        </div>
    );
}

export default Routes;