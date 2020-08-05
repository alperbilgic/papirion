import React/*, { Suspense }*/ from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from './components/Main/Main';
import Authors from './components/Author/Author-page/Author-page';
import AbstractBooks from './components/AbstractBook/AbstractBook-page/AbstractBook-page';
import AbstractBookDetails from './components/AbstractBook/AbstractBookDetails/AbstractBookDetails';
import Users from './components/User/Users-page/Users-page';
import Reviews from './components/Review/Review-single/Review-single';
import UserDetails from './components/User/UserDetails/UserDetails';
import ReadListPage from './components/ProfilePages/ReadList/ReadList-page';
import FavoritesListPage from './components/ProfilePages/Favorites/Favorites-page';
import BooksPage from './components/ProfilePages/Books/Books-page';
import ListsPage from './components/ProfilePages/Lists/Lists-page';
import ReviewsPage from './components/ProfilePages/Reviews/Reviews-page';
import AfterLogin from './components/Login/AfterLogin/AfterLogin';

function Routes() {
    return (
        <Switch fallback="loading...">
            <Route exact path="/" component={Main}/>  
            <Route exact path="/authors/" component={Authors}/>           
            <Route exact path="/abstractbooks/" component={AbstractBooks}/>           
            <Route exact path="/abstractbooks/:bookId" component={AbstractBookDetails}/>
            <Route exact path="/users/" component={Users}/>
            <Route exact path="/reviews/" component={Reviews}/>
            <Route exact path="/users/:username" component={UserDetails}/>
            <Route exact path="/users/:username/okumalistem" component={ReadListPage}/>
            <Route exact path="/users/:username/favorilerim" component={FavoritesListPage}/>
            <Route exact path="/users/:username/kitaplarim" component={BooksPage}/>
            <Route exact path="/users/:username/listelerim" component={ListsPage}/>
            <Route exact path="/users/:username/yorumlarim" component={ReviewsPage}/>
            <Route exact path="/afterlogin/" component={AfterLogin}/>
        </Switch>
    );
}

export default Routes;