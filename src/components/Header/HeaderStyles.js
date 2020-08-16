import React from 'react';


function HeaderStyles() {
    return <style>{`
    .nav-container-header {
        position: absolute;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        margin: 0px;
        padding: 0px;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start;
        background-color: transparent;
    }
    
    .w-container-header {
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
        width: 64rem;
    }
    
    .w-container-header:before,
    .w-container-header:after {
      content: " ";
      display: table;
      grid-column-start: 1;
      grid-row-start: 1;
      grid-column-end: 2;
      grid-row-end: 2;
    }
    .w-container-header:after {
      clear: both;
    }
    
    .navbar-header {
        margin-top: 12px;
        padding: 0px;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        background-color: transparent;
      }
    
    .inner-container-header {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        border: 1px solid transparent;
        background-color: transparent;
    }
    
    .container-2-header {
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }
      
      .line-decorator.sub {
        margin-top: 3.8%;
        margin-right: 39px;
        margin-left: 0px;
        background-color: #c9c9c9;
        color: #aaa2a2;
      }
      
      .line-decorator.indropdown {
        margin-right: 10px;
        margin-left: 10px;
        padding-right: 0px;
        padding-left: 0px;
      }
      
      .line-decorator.vertical-line-decorator {
        position: absolute;
        width: 23px;
        height: 300px;
        margin-left: -27px;
        border-left: 1px solid #b1b1b1;
        background-color: transparent;
      }
      
      .line-decorator.footer-line-decorator {
        width: 40vw;
        margin-right: auto;
        margin-bottom: 10px;
        margin-left: auto;
      }
    
      .w-nav-header {
        position: relative;
        width: 100%;
        z-index: 1000;
      }
      .w-nav-header:before,
      .w-nav-header:after {
        content: " ";
        display: table;
        grid-column-start: 1;
        grid-row-start: 1;
        grid-column-end: 2;
        grid-row-end: 2;
      }
      .w-nav-header:after {
        clear: both;
      }
      .w-nav-brand-header {
        position: relative;
        float: left;
        text-decoration: none;
        color: #333333;
      }
      .w-nav-link-header {
        position: relative;
        display: inline-block;
        vertical-align: top;
        text-decoration: none;
        color: #222222;
        padding: 20px;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
      }
      .w-nav-link-header.w--current {
        color: #0082f3;
      }
    
    .nav-menu-header {
        left: %50;
        top: 4%;
        right: 0px;
        bottom: 0%;
        display: block;
        width: 100%;
        height: 70px;
        min-width: 150px;
        margin-top: 0%;
        margin-right: auto;
        margin-left: auto;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        -ms-grid-row-align: center;
        align-self: center;
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        background-color: rgba( 243, 243, 243, 0.1);
    }
    
    .w-nav-menu-header {
        display: flex;
        justify-content: flex-end;
        position: relative;
        float: right;
    }
    
    .w-nav-link-header {
        position: relative;
        display: inline-block;
        vertical-align: top;
        text-decoration: none;
        color: #222222;
        padding: 20px;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
      }
      .w-nav-link-header.w--current {
        color: #0082f3;
      }
    
      .navlink-header {
        font-family: 'Maven Pro', sans-serif;
        color: #000;
        font-size: 14px;
        line-height: 1;
        font-weight: 500;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        white-space: normal;
      }
      
      .navlink-header:hover {
        color: #7c77b8;
      }
      
      .navlink-header.dropdown-link {
        color: #000;
        text-align: center;
      }
      
    `}</style>;
}

export default HeaderStyles;   