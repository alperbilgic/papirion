import React from 'react';


function HeaderStyles() {
    return <style>{`
    .signin-block {
        left: auto;
        top: 0%;
        right: 0%;
        bottom: 0%;
        margin: 3.6vh;
    }
    
    .person-image {
        width: 65%;
        height: 100%;
        -webkit-filter: invert(100%);
        filter: invert(100%);
        cursor: pointer;
    }
    
    .signin-popup {
        position: absolute;
        left: auto;
        right: 5%;
        bottom: 0%;
        top: 10%;
        padding: 0;
        display: block;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
    }
    
    .form-block {
        margin: 0 0 0px;
        padding: 10px;
        border-radius: 5px;
        background-color: #f3f3f3;
        box-shadow: 0 1px 2px 0 rgba(46, 53, 77, 0.14), 0 2px 4px 0 rgba(46, 53, 77, 0.14), 0 4px 8px 0 rgba(46, 53, 77, 0.14);
    }
    
    .signin-form {
        display: block;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
    }
    
    .signin__first-part {
        text-align: left;
    }
    
    .signin__second-part {
        position: relative;
    }
    
    .signin__second-part__texts {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }
    
    .text-inside-signin {
        position: static;
        font-family: 'Libre Baskerville', sans-serif;
        color: #333;
        font-weight: 400;
        text-decoration: none;
    }
    
    .text-inside-signin.password-forget {
        left: auto;
        top: 60%;
        right: 6%;
        bottom: auto;
        color: #549fc5;
        font-size: 12px;
        font-style: italic;
    }
    
    .signin-inputs {
        border-radius: 6px;
        background-color: rgba(243, 243, 243, 0.88);
    }
      
    .submit-button-login {
        position: relative;
        display: inline-block;
        float: right;
        border-radius: 5px;
        border: 0;
        background-color: #c8cde5;
        font-family: 'Libre Baskerville', sans-serif;
        color: #3b1d14;
    }

    .submit-button-login:hover {
        background-color: #c8cde5;
        color: #3b1d14;
    }
      
    .create-account-button {
        border: 0;
        border-radius: 5px;
        background-color: transparent;
        font-family: 'Libre Baskerville', sans-serif;
        color: #000;
        font-size: 12.5px;
        text-decoration: underline;
    }

    .create-account-button:hover {
        background-color: transparent;
        color: #000000;
    }
    
    .w-input {
      display: block;
      width: 100%;
      height: 38px;
      padding: 8px 12px;
      margin-bottom: 10px;
      font-size: 14px;
      line-height: 1.428571429;
      color: #333333;
      vertical-align: middle;
      background-color: #ffffff;
      border: 1px solid #cccccc;
    }
    .w-input:-moz-placeholder {
      color: #999;
    }
    .w-input::-moz-placeholder {
      color: #999;
      opacity: 1;
    }
    .w-input:-ms-input-placeholder {
      color: #999;
    }
    .w-input::-webkit-input-placeholder {
      color: #999;
    }
    .w-input:focus,
    .w-select:focus {
      border-color: #3898EC;
      outline: 0;
    }
    .w-input[disabled],
    .w-input[readonly],
    fieldset[disabled] .w-input {
      cursor: not-allowed;
      background-color: #eeeeee;
    }
    textarea.w-input {
      height: auto;
    }
    
    .signin__buttons {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        margin-top: 0px;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }
    
    .w-clearfix:before,
    .w-clearfix:after {
      content: " ";
      display: table;
      grid-column-start: 1;
      grid-row-start: 1;
      grid-column-end: 2;
      grid-row-end: 2;
    }
    .w-clearfix:after {
      clear: both;
    }
    
    .w-button {
        display: inline-block;
        padding: 9px 15px;
        background-color: #3898EC;
        color: white;
        border: 0;
        line-height: inherit;
        text-decoration: none;
        cursor: pointer;
        border-radius: 0;
    }
    
    input.w-button {
        -webkit-appearance: button;
    }
    
    .w-form-done {
        display: none;
        padding: 20px;
        text-align: center;
        background-color: #dddddd;
    }
    .w-form-fail {
        display: none;
        margin-top: 10px;
        padding: 10px;
        background-color: #ffdede;
    }
    `}</style>;
}

export default HeaderStyles;   