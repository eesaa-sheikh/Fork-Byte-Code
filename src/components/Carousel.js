import noodleGirl from './imageJar/NoodleSoup.png'
import chef from './imageJar/chef.png'
import noodleFood from './imageJar/food.png'

import {useState} from "react";

import Carousel from 'react-bootstrap/Carousel';

    const data = [

        {
            image: require('./imageJar/NoodleSoup.png')
        },
        {
            image: require('./imageJar/chef.png') 
        },
        {
            image: require('./imageJar/food.png')
        }
    ]

const ImageCarousel = () => {

    const[index,setIndex] = useState(0);
    const handleSelect =( seletedIndex, e) =>{

        setIndex(seletedIndex);
    };

    return (  

        <>

        <Carousel activeIndex ={index} onSelect={handleSelect}>

            {data.map((slide, id) => {
                return(
                    <Carousel.Item key={id}>
                        <img
                        className='image-block'
                        src={slide.image}
                        alt =" Food Images"
                        />
                    </Carousel.Item>
                )
            }
            
            )}
        </Carousel>
        
        </>


    );
}
 
export default ImageCarousel;

<>

</>

