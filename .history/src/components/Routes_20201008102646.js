import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

Pages
import HomePage from './views/HomePage';

const Routes = () => {
    return(
        <div>
            <Router>
                <Route path="/" component={HomePage}
            </Router>
        </div>
    );
}

export default Routes;