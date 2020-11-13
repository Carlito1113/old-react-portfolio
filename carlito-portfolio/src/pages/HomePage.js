import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import Carousel2 from '../components/Carousel2';
import Container2 from '../components/BackgroundElements';

function HomePage(props) {

    return(
        <>
            <Container2>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel />
            <br />
            <br />
            <Carousel2 />
            <br />
            <br />
            </Container2>
        </>
    );
}

export default HomePage;