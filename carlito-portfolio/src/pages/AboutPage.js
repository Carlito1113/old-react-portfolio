import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    
    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is Carlito. I am a full stack engineer with experience in MERN.</p>
                <p>I wish to learn and grow with a passionate company, develop my skills to the highest degree possible, and create my own projects of passion.</p>
                <p>I am a calm and focused individual. When I am not studying, I am playing guitar, reading, or building something.</p>
            </Content>
        </div>
        );
}

export default AboutPage;