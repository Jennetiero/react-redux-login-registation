import React from 'react';
import { PerformanceResourceTiming, Redirect} from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props => ( 
        localStorage.getItem('user')
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
    )} />
)