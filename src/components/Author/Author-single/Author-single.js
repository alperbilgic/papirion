import React from 'react';
import EmptyAuthorPic from '../../../assets/images/profile-picture.png';
import { Link } from 'react-router-dom';
import './Author-single.css';

const Author = (props) => {

    const link = '/authors/' + props.author.id;

    return (
        <div id={`author-${props.author.id}`} className='author-single'>
            <Link to={link} style={{textDecoration: 'none', color: 'black'}}>
                <img src={props.image || EmptyAuthorPic} alt={props.author.name} className='image-author-single'/>
                <div className='information-author-single'>
                    <p className='detail-text-author-single'>{props.author.name}</p>
                </div>
            </Link>
        </div>
    )
}

export default Author;