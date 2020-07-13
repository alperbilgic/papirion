import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/Actions/Index';
import './AfterLogin.css';
import PersonImg from '../../../assets/images/person.png';


const AfterLogin = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [wrapperClosed, setWrapperClosed] = useState(false);
    const wrapperRef = useRef(null);

    const toggle = () => {
      if (!wrapperClosed) {
        setIsOpen(!isOpen);
      }
      setWrapperClosed(false);
    }

    const ESCToggle = (event) => {
      if (event.keyCode === 27) {
        setIsOpen(false);
      }
    }

    useEffect(() => {
      document.addEventListener("keydown", ESCToggle, false);
      function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setIsOpen(false);
          setWrapperClosed(true);
        } else {
          setWrapperClosed(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);



    return (
        <div className="signed-in-block-afterlogin" onKeyPress={ESCToggle}>
          <div data-hover="" data-delay="0" className="w-dropdown-afterlogin">
            <div className="dropdown-toggle-afterlogin w-dropdown-toggle-afterlogin" onClick={toggle}><img src={PersonImg} width="27" alt="" className="image-afterlogin"/>
              <div className="text-block-afterlogin">{props.username}</div>
            </div>
            {isOpen && <div className="dropdown-list-afterlogin" ref={wrapperRef}>
                            <div className="dropdown-linkbox-afterlogin"><a href="/anasayfam/" className="profile-dropdown__link-afterlogin w-dropdown-link-afterlogin">Ana Sayfam</a><a href="/kitaplarim/" className="profile-dropdown__link-afterlogin w-dropdown-link-afterlogin">Kitaplarım</a></div>
                            <div className="dropdown-linkbox-afterlogin"><a href="/yorumlarım" className="profile-dropdown__link-afterlogin w-dropdown-link-afterlogin">Yorumlarım</a><a href="/listelerim/" className="profile-dropdown__link-afterlogin w-dropdown-link-afterlogin">Listelerim</a></div>
                            <div className="dropdown-linkbox-afterlogin"><a href="/okumalistem/" className="profile-dropdown__link-afterlogin w-dropdown-link-afterlogin">Okuma Listem</a><a href="/favorilerim/" className="profile-dropdown__link-afterlogin w-dropdown-link-afterlogin">Favorilerim</a></div>
                            <div className="dropdown-linkbox-afterlogin"><a href="/agim/" className="profile-dropdown__link-afterlogin w-dropdown-link-afterlogin">Ağım</a><a href="/hesabim/" className="profile-dropdown__link-afterlogin w-dropdown-link-afterlogin">Hesabım</a></div>
                            <div className="line-decorator-afterlogin indropdown-afterlogin"></div>
                            <div className="dropdown-linkbox-afterlogin"><a href="/ayarlar/" className="profile-dropdown__link-afterlogin w-dropdown-link-afterlogin">Ayarlar</a><a href="/" className="profile-dropdown__link-afterlogin w-dropdown-link-afterlogin" onClick={props.logout}>Çıkış Yap</a></div>
                        </div>
            }
            
          </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
      logout: ( data ) => dispatch( actions.logout() ),
  };
}

export default connect(null, mapDispatchToProps)(AfterLogin);