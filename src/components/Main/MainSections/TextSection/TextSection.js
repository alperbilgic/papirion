import React from 'react';
import './TextSection.css';


const TextSection = (props) => {
    return (
        <div className="heading_underlined book_underlined-maintext">
        <div className="text-aligned-left-maintext">
          <div>
            <h3 className="heading-maintext">{props.children}</h3>
          </div>
          <div><a href="/dahafazla/" className="view-more-link-maintext">Daha Fazla</a></div>
        </div>
        <div className="line-decorator-maintext"></div>
      </div>
    )
}

export default TextSection;