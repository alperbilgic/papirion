import React, { Suspense } from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from './components/Main/Main';
import AbstractBooks from './components/AbstractBook/AbstractBooks/AbstractBooks';
import AbstractBookDetails from './components/AbstractBook/AbstractBookDetails/AbstractBookDetails';
import Users from './components/User/Users/Users';
import UserDetails from './components/User/UserDetails/UserDetails';
import AfterLogin from './components/Login/AfterLogin/AfterLogin';

function Routes() {
    return (
        <Switch fallback="loading...">
            <Route exact path="/" component={Main}/>  
            <Route exact path="/abstractbooks/" component={AbstractBooks}/>           
            <Route exact path="/abstractbooks/:bookId" component={AbstractBookDetails}/>
            <Route exact path="/users" component={Users}/>
            <Route exact path="/users/:userId" component={UserDetails}/>
            <Route exact path="/afterlogin/" component={AfterLogin}/>
        </Switch>
    );
}

export default Routes;