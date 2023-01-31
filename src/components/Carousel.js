import {useState} from "react";

import Carousel from 'react-bootstrap/Carousel';

    const data = [

        {
            image: require('./imageJar/AmigosBurger.jpeg')
        },
        {
            image: require('./imageJar/tsujiri5.jpeg') 
        },
        {
            image: require('./imageJar/chinchin2.jpeg')
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

