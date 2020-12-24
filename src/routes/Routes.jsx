import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from '../constants/routes';
import LogIn from '../components/LogIn/index';
import Main from '../components/Main/index';
import Contacts from '../components/Contacts/index';
import PrivateRoute from './../components/PrivateRoute';
import PublicRoute from './../components/PublicRoute';

const Routes = () => {

    return (
        <Router>   
            <Switch>
                <PublicRoute path={routes.login} component={LogIn} />
                
                <PrivateRoute exact path={routes.main} component={Main}/>
                <PrivateRoute path={routes.contacts} component={Contacts}/> 
            </Switch>
        </Router>
    )
}

export default Routes;
