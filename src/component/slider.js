import React from 'react';

import slid1 from './image/slid1.jpg';
import slid2 from './image/slid2.jpg';
import clark from './image/clark.jpg';
import key from './image/key.jpg';
import { Carousel } from 'antd';


const Slider = () => {

    return (
        <div>
            <Carousel autoplay>
                <div>
                    <img src={slid1}  className='sliderimg' />
                </div>
                <div>
                    <img src={slid2}  className='sliderimg' />
                </div>
                <div>
                    <img src={key}  className='sliderimg' />
                </div>
                <div>
                    <img src={clark}  className='sliderimg' />
                </div>

            </Carousel>
        
        </div>
    )

}
export default Slider;