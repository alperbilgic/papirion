import React, { useState } from 'react';
import './AfterLogin.css';
import PersonImg from '../../../assets/images/person.png';


const AfterLogin = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }



    return (
        <div className="signed-in-block-afterlogin">
          <div data-hover="" data-delay="0" className="w-dropdown-afterlogin">
            <div className="dropdown-toggle-afterlogin w-dropdown-toggle-afterlogin" onClick={toggle}><img src={PersonImg} width="27" alt="" className="image-afterlogin"/>
              <div className="text-block-afterlogin">{props.username}</div>
            </div>
            {isOpen && <div className="dropdown-list-afterlogin">
                            <div className="dropdown-linkbox-afterlogin"><a href="#" className="profile-dropdown__link-afterlogin w-dropdown-link-afterlogin">Ana Sayfam</a><a href="#" className="profile-dropdown__link-afterlogin w-dropdown-link-afterlogin">Kitaplarım</a></div>
                            <div className="dropdown-linkbox-afterlogin"><a href="#" className="profile-dropdown__link-afterlogin w-dropdown-link-afterlogin">Yorumlarım</a><a href="#" className="profile-dropdown__link-afterlogin w-dropdown-link-afterlogin">Listelerim</a></div>
                            <div className="dropdown-linkbox-afterlogin"><a href="#" className="profile-dropdown__link-afterlogin w-dropdown-link-afterlogin">Okuma Listem</a><a href="#" className="profile-dropdown__link-afterlogin w-dropdown-link-afterlogin">Favorilerim</a></div>
                            <div className="dropdown-linkbox-afterlogin"><a href="#" className="profile-dropdown__link-afterlogin w-dropdown-link-afterlogin">Ağım</a><a href="#" className="profile-dropdown__link-afterlogin w-dropdown-link-afterlogin">Hesabım</a></div>
                            <div className="line-decorator-afterlogin indropdown-afterlogin"></div>
                            <div className="dropdown-linkbox-afterlogin"><a href="#" className="profile-dropdown__link-afterlogin w-dropdown-link-afterlogin">Ayarlar</a><a href="#" className="profile-dropdown__link-afterlogin w-dropdown-link-afterlogin">Çıkış Yap</a></div>
                        </div>
            }
            
          </div>
        </div>
    )
}

export default AfterLogin;