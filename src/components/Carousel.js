import {useState} from "react";

import Carousel from 'react-bootstrap/Carousel';

    const data = [

        {
            image: require('./imageJar/amigos4.webp'),
            caption: "Amigos Burgers",
            description: "Juicy burgers"
        },
        {
            image: require('./imageJar/tsujiri5.jpeg') ,
            caption: "Tsujiri",
            description: "Serving teasingly good matcha delicacies"
        },
        {
            image: require('./imageJar/chinchin2.jpeg'),
            caption: "Chin Chin Labs",
            description: "Ice-cream like you've never seen before"
        }
    ]

const ImageCarousel = () => {

    const[index,setIndex] = useState(0);
    const handleSelect =( seletedIndex, e) =>{

        setIndex(seletedIndex);
    };

    return (  

        <div id="carousel">

        <Carousel activeIndex ={index} onSelect={handleSelect}>

            {data.map((slide, id) => {
                return(
                
                    <Carousel.Item key={id}>
                        <img
                        className='image-block'
                        src={slide.image}
                        alt =" Food Images"
                        />
                    
                    <Carousel.Caption id="carousel-caption">
                        <h3>{slide.caption}</h3>
                        <p>{slide.description}</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                
                )
            }
            
            )}
        </Carousel>
        
        </div>


    );
}
 
export default ImageCarousel;
