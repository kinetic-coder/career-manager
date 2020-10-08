import React from 'react';
import './ErrorPage.css';
import NavigationBar from '../../compo'

const ErrorPage = () => (
    <div className="error-message-section">
        <NavigationBar/>
        <h1 className="error-message-heading">Opps!</h1>
        <p className="error-message">
            Sorry, we don't have the page your looking for.
        </p>
    </div>
);

export default ErrorPage;
