import React from 'react';


function HeaderStyles() {
    return <style>{`

    .w-dropdown-gozat {
        display: inline-block;
        position: relative;
        text-align: left;
        margin-left: 0;
        margin-right: 0;
        padding: 20px;
        z-index: 900;
      }
      .w-dropdown-btn-gozat,
      .w-dropdown-toggle-gozat,
      .w-dropdown-link-gozat {
        position: relative;
        vertical-align: top;
        text-decoration: none;
        color: #222222;
        padding: 20px;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
        white-space: nowrap;
      }
      .w-dropdown-toggle-gozat {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: inline-block;
        cursor: pointer;
        padding-right: 40px;
      }
      .w-dropdown-gozat:hover {
        cursor: pointer;
      }
      .w-icon-dropdown-toggle-gozat {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        margin-right: 20px;
        width: 1em;
        height: 1em;
      }
    
      .w-icon-arrow-down-gozat:before,
       .w-icon-dropdown-toggle:before {
        content: "\\2228";
       }

      .dropdown-toggle-ellipsis-gozat::after {
        margin-top: 10px;
        color: #00000;
      }
      
      .dropdown-toggle-ellipsis-gozat::before {
        display: inline-block;
        padding: 0.5rem;
      }
    
      .icon-4-gozat {
        position: static;
        left: auto;
        top: 0%;
        right: 0%;
        bottom: 0%;
        margin-top: 12px;
        margin-right: 30px;
        margin-left: 0px;
        padding-left: 0px;
        clear: none;
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
      }

      .dropdown-list-gozat {
        background-color: rgba(243, 243, 243, 0.63);
      }
      
      .dropdown-list-gozat.w--open {
        top: 55px;
        right: -15.5156px;
        border-radius: 0px 0px 6px 6px;
        background-color: rgba(243, 243, 243, 0.63);
        box-shadow: 1px 1px 9px -4px #000;
      }
    
      .w-dropdown-list-gozat {
        position: absolute;
        display: none;
        min-width: 100%;
      }
      .w-dropdown-list-gozat.w--open {
        display: block;
      }
      .w-dropdown-link-gozat {
        padding: 10px 20px;
        display: block;
        color: #222222;
      }
      .w-dropdown-link-gozat.w--current {
        color: #0082f3;
      }
    
      .dropdown-toggle-gozat {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }
    
      .w-icon-dropdown-toggle-gozat {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        margin-right: 20px;
        width: 1em;
        height: 1em;
      }
    
      .navlink-gozat {
        font-family: 'Maven Pro', sans-serif;
        color: #000;
        font-size: 14px;
        line-height: 1;
        font-weight: 500;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        white-space: normal;
      }
      
      .navlink-gozat:hover {
        color: #7c77b8;
      }
      
      .navlink-gozat.dropdown-link-gozat {
        color: #000;
        text-align: center;
      }
    `}</style>;
}

export default HeaderStyles;   