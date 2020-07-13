import React from 'react';
import { Link } from 'react-router-dom';
import FaceBook from '../../assets/images/facebook.png';
import Instagram from '../../assets/images/instagram.png';
import Twitter from '../../assets/images/twitter.png';
import './Footer.css';

const Footer = () => {

    return (
    <div>
        <div className="footer-section">
            <div className="line-decorator footer-line-decorator"></div>
            <div className="footer-container w-container">
            <div className="footer-links-div"><Link to="/hakkımızda/" className="footer-links">Hakkımızda</Link><Link to="/yardım/" className="footer-links">Yardım</Link><Link to="/iletişim/" className="footer-links">İletişim</Link><Link to="/kullanimsartlari/" className="footer-links">Kullanım Şartları</Link></div>
            </div>
            <div className="footer-social-main">
                <div className="footer-social facebook"><img src={FaceBook} width="20" alt="" className="image-social-logo"/></div>
                <div className="footer-social instagram"><img src={Instagram} width="20" alt="" className="image-social-logo"/></div>
                <div className="footer-social twitter"><img src={Twitter} width="20" alt="" className="image-social-logo"/></div>
            </div>
            <div className="footer-links trademark-text">© Book App </div>
        </div>
    </div>
    )
}

export default Footer;