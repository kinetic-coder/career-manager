import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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