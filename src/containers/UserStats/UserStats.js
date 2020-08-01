import React from 'react';
import { Link } from 'react-router-dom';
import './UserStats.css';
import BookList from '../../components/BookList/BookList-single/BookList-single'

const User = (props) => {

    const book_link = '/' + 'kitaplar'; //+ props.user.username

    console.log(props.user);
    
    return (
        <ul className='stats'>
            <li className='book-count'>
                <li>149</li>
                <li>Kitap</li>
            </li>
            <li className='book-count'>
                <li>7</li>
                <li>Liste</li>
            </li>
            <li className='book-count'>
                <li>82</li>
                <li>Yorum</li>
            </li>
            <li className='book-count'>
                <li>36</li>
                <li>Takip</li>
            </li>
            <li className='book-count'>
                <li>55</li>
                <li>Takipçi</li>
            </li>
        </ul>
    )
}

export default User;
