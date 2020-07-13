import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import './ReviewSlider.css';
import Left from '../../../assets/icons/left-arrow.png';
import Right from '../../../assets/icons/right-arrow.png'

// class component
class Slider extends Component {

  constructor(props){
    super(props);
    this.state = {
      breakPoints: [
        { width: 255, itemsToShow: 1, itemsToScroll: 1 },
        { width: 450, itemsToShow: 2, itemsToScroll: 2 },
        { width: 700, itemsToShow: 3, itemsToScroll: 3 },
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
      <div className='page-review'>
        <div className="custom-slider-review w-slider-review" style={{height: this.props.height}}>
          <Carousel className='slider__mask-review w-slider-mask-review' breakPoints={this.state.breakPoints} transitionMs={750} disableArrowsOnEnd={false} 
                    pagination={false} renderArrow={this.myArrow} >
            {
              this.props.children
            }
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Slider;