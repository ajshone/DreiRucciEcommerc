import { Carousel } from 'react-bootstrap'
import React, {useState} from 'react'
import cover1 from '../images/cover1.png'
import cover2 from '../images/cover2.png'
import cover3 from '../images/cover3.png'
import cover4 from '../images/cover4.png'

const ContolledCarousel = () => {
    const [index, setIndex] = useState(0);
      
    const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
        return (
          <Carousel activeIndex={index} onSelect={handleSelect} interval="4000">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={cover1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={cover2}
                alt="Second slide"
              />
      
              
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={cover3}
                alt="Third slide"
              />
      
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={cover4}
                alt="Third slide"
              />
      
            </Carousel.Item>
          </Carousel>
        );
      }
      

export default ContolledCarousel