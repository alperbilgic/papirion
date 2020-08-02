import React from 'react';
import EmptyuserPic from '../../../assets/images/profile-picture.png';
import { Link } from 'react-router-dom';
import './UserDetails.css';
import UserStats from '../../../containers/UserStats/UserStats';

const User = (props) => {

    const link = '/users/'; //+ props.user.id;

    return (
        <div className='user-detail-main'>
            
            <div className= 'profile-header'> 
                <div className= 'profile-image'> 
                    <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
                        <img src={EmptyuserPic} className='image-user-single small-size'/>
                    </Link>
                </div>
                <div className='user-info'>
                    <div className='primary-h-big'>Onur Sezen</div>
                    <ul  className='user-metadata'>
                        <li className='location'>Ankara</li>
                        <li className='user-external-links'>twitter.com</li>
                    </ul>
                    <div className='primary-p'>bio bio bio bio bio bio bio bio</div>
                </div>
                <div className='stats-and-button'>
                    <div className='user-stats'><UserStats/></div>
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
        </div>
    )
}

export default User;



