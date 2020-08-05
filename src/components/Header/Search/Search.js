import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';
import magnify from '../../../assets/icons/dropdown-arrow.png';

const SearchBox = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    const openBox = () => {
        setIsOpen(true);
    }

    useEffect(() => {
        
    function handleClickOutside(event) {
        console.log(isOpen);
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
        } 
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);

    return (
        <div className="search-main-div" onClick={openBox} ref={wrapperRef}>
            <div className= "search-box-container">
                {isOpen ? <div className="search-input-box"><input className="border-none"/></div> : 
                          <img className="magnify-icon" src={magnify}></img>}
                
            </div>
        </div>
    );
}

export default SearchBox;