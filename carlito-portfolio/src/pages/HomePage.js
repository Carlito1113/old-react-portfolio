import React from 'react';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import Carousel2 from '../components/Carousel2';


function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel />
            <Carousel2 />
        </div>
    );
}

export default HomePage;