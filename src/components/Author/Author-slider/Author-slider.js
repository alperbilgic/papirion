import React from 'react';
import EmptyAuthorPic from '../../../assets/images/profile-picture.png';
import './Author-slider.css';

const Author = (props) => {

    return (
        <div id={`card-${props.author.id}`} className='author w-slide-author'>
            <img src={props.image || EmptyAuthorPic} alt={props.author.name} className='image-author'/>
            <div className='information-author'>
                <p className='detail-text-author'>{props.author.name}</p>
            </div>
        </div>
    )
}

export default Author;