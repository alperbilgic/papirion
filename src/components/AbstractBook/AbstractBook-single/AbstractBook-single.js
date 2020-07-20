import React from 'react';
// import PropTypes from 'prop-types';
import './AbstractBook-single.css';
import { Link } from 'react-router-dom';

const AbstractBook = (props) => {
    const link = '/abstractbooks/' + props.book.id;
    console.log(props.book);
    const popBook = props.book.pop_child_book;

    const image = popBook.image;

    return (
        <div className="book-image-container"><img src={image} alt=""/>
            <Link to={link}>
                <div className="overlay">
                    <div className="book-overlay-text">{props.book.name}</div>
                </div>
            </Link>
        </div>
    )
}

export default AbstractBook;