import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AuthorDetails.css';
import EmptyAuthorPic from '../../../assets/images/profile-picture.png';

const Author = (props) => {

    // const link = '/authors/' + props.author.id;

    // return (
    //     <div id={`author-${props.author.id}`} className='author-single'>
    //         <Link to={link} style={{textDecoration: 'none', color: 'black'}}>
    //             <img src={props.image || EmptyAuthorPic} alt={props.author.name} className='image-author-single'/>
    //             <div className='information-author-single'>
    //                 <p className='detail-text-author-single'>{props.author.name}</p>
    //             </div>
    //         </Link>
    //         <div className=''>ANCD</div>
    //     </div>
    // )
    
    return(
        <div className='margined'>
            <div className='name-heading'>Orhan Pamuk</div>
            <div className='author-stats'>
                <span>4.5*</span>
                <span>32 Kitap</span>
                <span>75bin okunma</span>
            </div>
        <div className='author-details-container'>
            <div className='author-details-left-side'>
                <div className='facets'>
                    
                    <span>Sırala</span>
                    <span>Popüler</span>
                    <span>Okunma Sayısı</span>
                    <span>Yorum Sayısı</span>
                    <div className='line-decorator-facets'></div>
                </div>
            </div>
            <div className='author-image-and-bio'>
                <img src={EmptyAuthorPic} className='image-author-details'/>
                <div className='author-bio'>Ferit Orhan Pamuk (d. 7 Haziran 1952, İstanbul), Türk yazar. Birçok başka edebiyat ödülünün yanı sıra 2006 yılında Nobel Edebiyat Ödülünü kazanarak bu ödülü alan en genç kişilerden biri olmuştur. Kitapları altmış üç dile çevrildi, yüzü aşkın ülkede yayımlandı ve 13 milyon baskı yaptı.              
2006 yılında TIME dergisi tarafınd</div> 
            </div>
        </div>
        </div>
    )
}

export default Author;