import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import './Slider.css';
import Left from '../../assets/icons/left-arrow.png';
import Right from '../../assets/icons/right-arrow.png'

// class component
class Slider extends Component {

  constructor(props){
    super(props);
    this.state = {
      breakPoints: [
        { width: 255, itemsToShow: 2, itemsToScroll: 2 },
        { width: 340, itemsToShow: 3, itemsToScroll: 3 },
        { width: 450, itemsToShow: 4, itemsToScroll: 4 },
        { width: 550, itemsToShow: 5, itemsToScroll: 5 },
        { width: 700, itemsToShow: 6, itemsToScroll: 6 },
      ],
    }
  }

  myArrow({ type, onClick, isEdge }) {
    const pointer = type === 'PREV' ? Left : Right;
    return (
      <button onClick={onClick} className='slider-arrow'>
        <img src={pointer} alt=""/>
      </button>
    )
  }

  render() {
    return (
      <div className='page'>
        <div className="custom-slider w-slider" style={{height: this.props.height}}>
          <Carousel className='slider__mask w-slider-mask' breakPoints={this.state.breakPoints} transitionMs={750} disableArrowsOnEnd={false} 
                    pagination={false} renderArrow={this.myArrow} >
            {this.props.children}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Slider;