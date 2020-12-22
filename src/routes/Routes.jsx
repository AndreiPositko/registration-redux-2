import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from '../constants/routes';
import LogIn from '../components/LogIn';
import Main from '../components/Main';

const Routes = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    console.log('-----------', isLoggedIn);

    return (
        <Router>   
            <Switch>
                {!isLoggedIn ?
                    (<>
                        <Route path={routes.auth} component={LogIn} />
                        <Redirect to={routes.auth} />
                    </>
                    ) : (
                    <>
                        <Route exact path={routes.main} component={Main} />
                        <Redirect to={routes.main} />
                    </>
                    )}
            </Switch>
        </Router>
    )
}

export default Routes;
