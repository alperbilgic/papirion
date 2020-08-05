import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import './BookList-single.css';
import { Link } from 'react-router-dom';
import LikeImg from '../../../assets/images/like-example.jpg';
import BookListImg from '../../../assets/images/booklist-example.JPG';

const BookList = (props) => {
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
    const userLink = '/users/' + props.booklist.user.username;

    return (
        <div className="mybooklist-main">
            <div className="mybooklist-container">
                <div className = "mybooklist-img">
                    <div className = "mybooklist-img__src"><img src={BookListImg}/></div>
                </div>
                <div className = "mybooklist-text-flex">
                    <div className = "mybooklist-listname primary-h">{props.booklist.name}</div>
                    <div className = "mybooklist-metadata tiny-text">
                        <div className = "mybooklist-metadata__films"> {props.booklist.number_of_books}</div>
                        <div className = "mybooklist-metadata__likes"> like sayısı eklenmeli {props.booklist.number_of_likes}</div>
                        <div className = "mybooklist-metadata__comments"> {props.booklist.number_of_comments}</div>
                    </div>
                    <div className = "mybooklist-description primary-p"><p>{script}</p></div>
                </div>
            </div>        
        </div>
        //<div className = line-decorator></div>
    )
}

export default BookList;