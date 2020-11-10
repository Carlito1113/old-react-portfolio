import React from 'react';

import wineanddines from '../assets/images/wineanddines.png';
import audiophyle from '../assets/images/audiophyle.png';
import budgettracker from '../assets/images/budgettracker.png';
import fitnesstracker from '../assets/images/fitnesstracker.png';
import notetaker from '../assets/images/notetaker.png';
import burgertime from '../assets/images/burgertime.png';

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
                    {
                        id: 3,
                        title: 'Fitness Tracker',
                        subTitle: 'An application to create, store, and update workouts',
                        imgSrc: fitnesstracker,
                        link: 'https://infinite-journey-49679.herokuapp.com/?id=5f9cb775dedcff0017199027',
                        selected: false
                    },
                    {
                        id: 4,
                        title: 'Note Taker',
                        subTitle: 'An application to create, store, and delete notes',
                        imgSrc: notetaker,
                        link: 'https://notetakerforcarlitoalgarin.herokuapp.com/',
                        selected: false
                    },
                    {
                        id: 5,
                        title: 'Burger Time',
                        subTitle: 'A simple application to add, update, and delete burgers',
                        imgSrc: burgertime,
                        link: 'https://arcane-wildwood-34618.herokuapp.com/',
                        selected: false
                    },
                ]
            }
        }

        render() {
            return(
                <p>Carousel Works!</p>
            );
        }

}

export default Carousel;