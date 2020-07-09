import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import './BookList.css';
import { Link } from 'react-router-dom';
import LikeImg from '../../../assets/images/like-example.jpg';
import BookListImg from '../../../assets/images/booklist-example.JPG';

const Review = (props) => {
    const [script, setScript] = useState('');
    const [_isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        if (props.booklist.description <= 300) {
            setScript(props.booklist.description);
        } else {
            setScript(props.booklist.description.slice(0,300) + "...")
        }
    
        setIsMounted(true);
            
    }, [_isMounted, props.booklist.description]);

    const link = '/booklists/' + props.booklist.id;

    return (
        <div className="slider__slide-booklist list-slide-booklist w-slide-booklist">
          <div className="slider-div-booklist slider-div-booklist-list">
            <div className="list-container-booklist">
                <div className="list-image-container-booklist">
                    <img src={BookListImg} alt="sth" className="list-image-booklist"/>
                </div>
                <div className="list-content-booklist">
                    <div className="list-name-booklist">
                        <Link to="#" style={{textDecoration: 'none'}} className="link-4-booklist">{props.booklist.description}</Link>
                    </div>
                    <div className="list-content-detail-booklist">
                        <div className="username-avatar-booklist">
                            <img src={props.booklist.user.image} width="25" alt="" className="image-11-booklist"/>
                        </div>
                        <Link href="#" style={{textDecoration: 'none'}} className="link-2-booklist">{props.booklist.user.username}</Link>
                        <div className="list-likes-booklist">
                            <img src={LikeImg} width="39" alt="" className="image-12-booklist"/>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Review;