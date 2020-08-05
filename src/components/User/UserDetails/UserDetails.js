import React, { Component } from 'react';
import EmptyuserPic from '../../../assets/images/profile-picture.png';
import { Link } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem,
         NavLink } from 'reactstrap';
import './UserDetails.css';
import UserStats from '../../../containers/UserStats/UserStats';
import BookListSingle from '../../BookList/BookList-single/BookList-single';
import AbstractBookSingle from '../../AbstractBook/AbstractBook-single/AbstractBook-single';
import ReviewSingle from '../../Review/Review-single/Review-single';

class UserDetails extends Component {

    state = {
        username: this.props.match.params.username,
        user: {},
        stats: {},
        activeTab: 'anasayfa',
        tabInfo: {},
    }

    toggle = tab => {
        if(this.state.activeTab !== tab) this.setState({activeTab: tab});
      }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/api/users/${this.state.username}/`, {
        method: 'GET',
        }).then( resp => resp.json())
        .then(res => {
            this.setState({
                user: res,
                stats: {
                    books: res.number_of_books,
                    librarySize: res.number_of_books_in_library,
                    lists: res.number_of_lists,
                    reviews: res.number_of_reviews,
                    followers: res.number_of_followers,
                    following: res.number_of_following,
                }
            })
        })
        .catch( error => console.log(error))
    }

    componentDidUpdate() {
        console.log( this.state.tabInfo[this.state.activeTab] );
        if ( this.state.tabInfo[this.state.activeTab] === undefined && this.state.tabInfo[this.state.activeTab] !== 'anasayfa' ) {
            fetch(`${process.env.REACT_APP_API_URL}/api/users/${this.state.username}/${this.state.activeTab}`, {
                method: 'GET',
                }).then( resp => resp.json())
                .then(res => {
                    console.log(res);
                    this.setState(prevState => ({
                        tabInfo: {
                            ...prevState.tabInfo,
                            [this.state.activeTab]: res.results
                        }
                    }))
                })
                .catch( error => console.log(error))
        }
    }

    render () {
        return (
            <div className='user-detail-main'>
                
                <div className= 'profile-header'> 
                    <div className= 'profile-image'> 
                        <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
                            <img src={this.state.user.image || EmptyuserPic} className='image-user-single small-size'/>
                        </Link>
                    </div>
                    <div className='user-info'>
                        <div className='primary-h-big'>{this.state.user.fullname}</div>
                        <ul  className='user-metadata'>
                            <li className='location'>Location eklenecek</li>
                            <li className='user-external-links'>twitter.. bağlantıları eklenecek</li>
                        </ul>
                        <div className='primary-p'>{this.state.user.bio}</div>
                    </div>
                    <div className='stats-and-button'>
                        <div className='user-stats'><UserStats stats={this.state.stats}/></div>
                        <div className='btn-wrapper'><button className='primary-btn'> Takip Et </button></div>
                    </div>
                </div>
                
                <div className='fields-bar'>
                    <div className='secondary-h'>Ana Sayfa</div>
                    <div className='secondary-h'>Activity</div>
                    <div className='secondary-h'>Kitaplar</div>
                    <div className='secondary-h'>Yorumlar</div>
                    <div className='secondary-h'>Okuma Listesi</div>
                    <div className='secondary-h'>Listeler</div>
                    <div className='secondary-h'>Favoriler</div>
                    <div className='secondary-h'>Ağ</div>
                </div>
                <Nav tabs className='fields-bar'>
                    <NavItem>
                        <NavLink
                            className='secondary-h'
                            onClick={() => { this.toggle('anasayfa'); }}
                        >
                            Ana Sayfa
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className='secondary-h'
                            onClick={() => { this.toggle('activity'); }}
                        >
                            Activity
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className='secondary-h'
                            onClick={() => { this.toggle('mybooks'); }}
                        >
                            Kitaplar
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className='secondary-h'
                            onClick={() => { this.toggle('reviews'); }}
                        >
                            Yorumlar
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className='secondary-h'
                            onClick={() => { this.toggle('readlist'); }}
                        >
                            Okuma Listesi
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className='secondary-h'
                            onClick={() => { this.toggle('mylists'); }}
                        >
                            Listeler
                        </NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink
                            className='secondary-h'
                            onClick={() => { this.toggle('favorites'); }}
                        >
                            Okuma Listesi
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className='secondary-h'
                            onClick={() => { this.toggle('network'); }}
                        >
                            Listeler
                        </NavLink>
                    </NavItem> */}
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="anasayfa">

                    </TabPane>
                    <TabPane tabId="activity">
                        
                    </TabPane>
                    <TabPane tabId="mybooks">
                        {this.state.tabInfo.mybooks && this.state.tabInfo.mybooks.map( book => <AbstractBookSingle book={book}/>)}
                    </TabPane>
                    <TabPane tabId="reviews">
                        {this.state.tabInfo.reviews && this.state.tabInfo.reviews.map( review => <ReviewSingle review={review}/>)}
                    </TabPane>
                    <TabPane tabId="readlist">
                        {this.state.tabInfo.readlist && this.state.tabInfo.readlist.map( book => <AbstractBookSingle book={book}/>)}
                    </TabPane>
                    <TabPane tabId="mylists">
                        {this.state.tabInfo.mylists && this.state.tabInfo.mylists.map( booklist => <BookListSingle booklist={booklist}/>)}
                    </TabPane>
                    {/* <TabPane tabId="favorites">
                        {this.state.tabInfo.mylists && this.state.tabInfo.mylists.map( booklist => <BookListSingle booklist={booklist}/>)}
                    </TabPane>
                    <TabPane tabId="network">
                        {this.state.tabInfo.mylists && this.state.tabInfo.mylists.map( booklist => <BookListSingle booklist={booklist}/>)}
                    </TabPane> */}
                </TabContent>
            </div>
        )
    }
}

export default UserDetails;



