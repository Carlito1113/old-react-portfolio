import React from 'react';

import Card from '../components/Card';

import wineanddines from '../assets/images/wineanddines.png';
import audiophyle from '../assets/images/audiophyle.png';
import budgettracker from '../assets/images/budgettracker.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

        constructor(props){
            super(props);
            this.state = {
                items: [
                    {
                        id: 0,
                        title: 'Wine&Dines',
                        subTitle: 'Recipe generator & wine pairing app',
                        imgSrc: wineanddines,
                        link: 'https://andrewrb22.github.io/-.theFederationOfCoders-/',
                        selected: false
                    },
                    {
                        id: 1,
                        title: 'Audiophyle',
                        subTitle: 'Application for music lovers',
                        imgSrc: audiophyle,
                        link: 'https://audiophyle-music-platform.herokuapp.com/',
                        selected: false
                    },
                    {
                        id: 2,
                        title: 'Budget Tracker',
                        subTitle: 'An application for budget calculation',
                        imgSrc: budgettracker,
                        link: 'https://damp-falls-85688.herokuapp.com/',
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


export default Carousel;