import React from 'react';
import { Link } from 'react-router-dom';
import './UserStats.css';
import BookList from '../../components/BookList/BookList-single/BookList-single'

const User = (props) => {

    const book_link = '/' + 'kitaplar'; //+ props.user.username
    
    return (
        <ul className='stats'>
            <li className='book-count'>
                <li>{props.stats.books}</li>
                <li>Kitap</li>
            </li>
            <li className='book-count'>
                <li>{props.stats.librarySize}</li>
                <li>Kitaplığında</li>
            </li>
            <li className='book-count'>
                <li>{props.stats.lists}</li>
                <li>Liste</li>
            </li>
            <li className='book-count'>
                <li>{props.stats.reviews}</li>
                <li>Yorum</li>
            </li>
            <li className='book-count'>
                <li>{props.stats.following}</li>
                <li>Takip</li>
            </li>
            <li className='book-count'>
                <li>{props.stats.followers}</li>
                <li>Takipçi</li>
            </li>
        </ul>
    )
}

export default User;
