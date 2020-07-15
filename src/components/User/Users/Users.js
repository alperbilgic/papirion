import React from 'react';
import EmptyUserPic from '../../../assets/images/profile-picture.png';
import './Users.css';

const User = (props) => {

    return (
        <div id={`card-${props.user.id}`} className='user w-slide-user'>
            <img src={props.user.image || EmptyUserPic} alt={props.user.username} className='image-user'/>
            <div className='information-user'>
                <p className='detail-text-user'>{props.user.name}</p>
            </div>
        </div>
    )
}

export default User;