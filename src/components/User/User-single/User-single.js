  
import React from 'react';
import EmptyuserPic from '../../../assets/images/profile-picture.png';
import { Link } from 'react-router-dom';
import './User-single.css';

const User = (props) => {

    const link = '/users/' + props.user.id;

    return (
        <div id={`user-${props.user.id}`} className='user-single'>
            <Link to={link} style={{textDecoration: 'none', color: 'black'}}>
                <img src={props.image || EmptyuserPic} alt={props.user.name} className='image-user-single'/>
                <div className='information-user-single'>
                    <p className='detail-text-user-single'>{props.user.username}</p>
                    <p className='detail-text-user-single'>{props.user.username}</p>
                </div>
            </Link>
        </div>
    )
}

export default User;