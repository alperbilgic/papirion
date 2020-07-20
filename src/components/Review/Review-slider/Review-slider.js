import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import './Review-slider.css';
import { Link } from 'react-router-dom';
import EmptyAuthorPic from '../../../assets/images/profile-picture.png';


const Review = (props) => {
    const [script, setScript] = useState('');
    const [_isMounted, setIsMounted] = useState(false);
    useEffect(() => {
            if (props.review.review.length <= 300) {
                setScript(props.review.review);
            } else {
                setScript(props.review.review.slice(0,300) + "...")
            }
            setIsMounted(true);

      }, [_isMounted, props.review.review]);

    const link = '/reviews/' + props.review.id;

    return (
        <div id={`review-${props.review.id}`} className='review-slide w-slide'>
                <div className='review-slider-divider'>
                <div className="book-image-container">
                    <img src={props.review.abstract_book.pop_child_book.image} width="78" alt="" className="image-9"/>
                </div>
                <div className="review-heading">
                    <div className="review-heading__bookname"><Link to="/abstractbooks/" className="link" style={{textDecoration: 'none', color: 'black', height: '100%'}}>{props.review.abstract_book.name}</Link>
                        <div className="line-decorator sub"></div>
                    </div>
                    <div className="review-heading-username">
                        <div className="username-avatar"><img src={props.review.user.image || EmptyAuthorPic} width="31" alt="" className="image-11"/></div><Link to="/users/" className="link-2" style={{textDecoration: 'none', color: 'black', height: '100%'}}>{props.review.user.username}</Link></div>
                        <div className="review-heading-rating"></div>
                    </div>
                    <div className="review-text"><Link to={link} className="link-3" style={{textDecoration: 'none', color: 'black', height: '100%'}}>{script}</Link></div>
                </div>
        </div>
    )
}

export default Review;