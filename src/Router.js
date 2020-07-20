import React/*, { Suspense }*/ from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from './components/Main/Main';
import Authors from './components/Author/Author-page/Author-page';
import AbstractBooks from './components/AbstractBook/AbstractBook-page/AbstractBook-page';
import AbstractBookDetails from './components/AbstractBook/AbstractBookDetails/AbstractBookDetails';
import Users from './components/User/Users-page/Users-page';
import UserDetails from './components/User/UserDetails/UserDetails';
import MyReadListPage from './components/ProfilePages/MyReadList/MyReadLists-page';
import MyFavoritesListPage from './components/ProfilePages/MyFavorites/MyFavorites-page';
import MyBooksPage from './components/ProfilePages/MyBooks/MyBooks-page';
import MyListsPage from './components/ProfilePages/MyLists/MyLists-page';
import MyReviewsPage from './components/ProfilePages/MyReviews/MyReviews-page';
import AfterLogin from './components/Login/AfterLogin/AfterLogin';

function Routes() {
    return (
        <Switch fallback="loading...">
            <Route exact path="/" component={Main}/>  
            <Route exact path="/authors/" component={Authors}/>           
            <Route exact path="/abstractbooks/" component={AbstractBooks}/>           
            <Route exact path="/abstractbooks/:bookId" component={AbstractBookDetails}/>
            <Route exact path="/users/" component={Users}/>
            <Route exact path="/users/:username" component={UserDetails}/>
            <Route exact path="/users/:username/okumalistem" component={MyReadListPage}/>
            <Route exact path="/users/:username/favorilerim" component={MyFavoritesListPage}/>
            <Route exact path="/users/:username/kitaplarim" component={MyBooksPage}/>
            <Route exact path="/users/:username/listelerim" component={MyListsPage}/>
            <Route exact path="/users/:username/yorumlarim" component={MyReviewsPage}/>
            <Route exact path="/afterlogin/" component={AfterLogin}/>
        </Switch>
    );
}

export default Routes;