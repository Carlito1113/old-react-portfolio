import React from 'react';

import Card from '../components/Card';

import fitnesstracker from '../assets/images/fitnesstracker.png';
import notetaker from '../assets/images/notetaker.png';
import burgertime from '../assets/images/burgertime.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel2 extends React.Component {

        constructor(props){
            super(props);
            this.state = {
                items: [
                    {
                        id: 0,
                        title: 'Fitness Tracker',
                        subTitle: 'An application to create, store, and update workouts',
                        imgSrc: fitnesstracker,
                        link: 'https://infinite-journey-49679.herokuapp.com/?id=5f9cb775dedcff0017199027',
                        selected: false
                    },
                    {
                        id: 1,
                        title: 'Note Taker',
                        subTitle: 'An application to create, store, and delete notes',
                        imgSrc: notetaker,
                        link: 'https://notetakerforcarlitoalgarin.herokuapp.com/',
                        selected: false
                    },
                    {
                        id: 2,
                        title: 'Burger Time',
                        subTitle: 'A simple application to add, update, and delete burgers',
                        imgSrc: burgertime,
                        link: 'https://arcane-wildwood-34618.herokuapp.com/',
                        selected: false
                    },
                ]
            }
        }


        handleCardClick = (id, card) => {
            let items = [...this.state.items];

            items[id].selected = items[id].selected ? false : true;

            items.forEach(item => {
                if(item.id !== id) {
                    item.selected = false;
                }
            });

            this.setState({
                items
            });
        }

        makeItems = (items) => {
            return items.map(item => {
                return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
            })
        }

        render() {
            return(
                <Container fluid={true}>
                    <Row className="justify-content-around">
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
            );
        }

}


export default Carousel2;