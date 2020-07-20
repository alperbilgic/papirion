import React from 'react';
// import PropTypes from 'prop-types';
import './AbstractBook-slider.css';
import { Link } from 'react-router-dom';

const AbstractBook = (props) => {
    const link = '/abstractbooks/' + props.book.id;

    const popBook = props.book.pop_child_book;

    const image = popBook.image

    return (
        <div id={`card-${props.book.id}`} className='book w-slide'>
            <Link to={link} style={{textDecoration: 'none', color: 'black', height: '100%'}}>
                <img src={image} alt="" className='image'/>
                <div className='information' style={{height: '50%'}}>
                    <p className='detail-text'>{props.book.name}</p>
                    {props.book.authors.map( (author, index) => <p key={index} className='detail-text author-name'>{author.name}</p>)}
                </div>
            </Link>
        </div>
    )
}

export default AbstractBook;