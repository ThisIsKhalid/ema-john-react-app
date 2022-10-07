import React from 'react';
import { useRouteError } from 'react-router-dom';
import './ErrorElement.css'

const ErrorElement = () => {
    const error = useRouteError();
    return (
        <div className='error-handler'>
            <div className='error-handler-content'>
                <h1>{error.status}</h1>
                <h4>Oops!</h4>
                <p>Sorry, an unexpected error has occurred.</p>
                <h1>{error.statusText || error.message}</h1>
            </div>
        </div>
    );
};

export default ErrorElement;