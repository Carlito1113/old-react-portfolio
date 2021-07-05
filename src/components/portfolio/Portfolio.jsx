import { useState, useEffect } from 'react';
import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
// import {
//   featuredPortfolio,
//   webPortfolio,
//   mobilePortfolio,
//   designPortfolio,
//   contentPortfolio,
// } from '../../data';

export default function Portfolio() {
  // const [selected, setSelected] = useState('featured');
  ///////////////// this useState is for the data.js file when ready in order to display active selected portfolio
  // const [data, setData] = useState('featured');
  // const list = [
  //   {
  //     id: 'featured',
  //     title: 'Featured',
  //   },
  //   {
  //     id: 'mern',
  //     title: 'MERN Apps',
  //   },
  //   {
  //     id: 'mobile',
  //     title: 'Mobile Apps',
  //   },
  // ];

  /////////////////// This useEffect hook is for switching through the future portfolio data sets
  // useEffect(() => {
  //   switch (selected) {
  //     case 'featured':
  //       setData(featuredPortfolio);
  //       break;
  //     case 'web':
  //       setData(mernPortfolio);
  //       break;
  //     default:
  //       setData(featuredPortfolio);
  //   }
  // }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      {/* this is the portfolio list when I have multiple portfolio sections to present or potentially wish to use it for contacts, testimonials, etc. */}
      {/* <ul>
        {list.map(item => {
          return (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          );
        })}
      </ul> */}

      <div className="container">
        <div className="item">
          <img src="assets/recommend.png" alt="Recommend book app" />

          <h3>
            <a
              href="https://recom-mend.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              Recommend
            </a>
          </h3>
        </div>
        <div className="item">
          <img src="assets/audiophyle.png" alt="Audiophyle music app" />
          <h3>
            <a
              href="https://audiophyle-music-platform.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              Audiophyle
            </a>
          </h3>
        </div>
        <div className="item">
          <img src="assets/wineanddine.png" alt="Food and Wine pairing app" />
          <h3>
            <a
              href="https://andrewrb22.github.io/-.theFederationOfCoders-/"
              rel="noreferrer"
              target="_blank"
            >
              Wine&Dines
            </a>
          </h3>
        </div>
        <div className="item">
          <img src="assets/notetaker.png" alt="Note Taking Application" />
          <h3>
            <a
              href="https://notetakerforcarlitoalgarin.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              Note Taker
            </a>
          </h3>
        </div>
        <div className="item">
          <img
            src="assets/fitnesstracker.png"
            alt="Fitness Logging application"
          />
          <h3>
            <a
              href="https://infinite-journey-49679.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              Fitness Logger
            </a>
          </h3>
        </div>
        <div className="item">
          <img
            src="assets/expensetracker.png"
            alt="Expense Tracking Application"
          />
          <h3>
            <a
              href="https://damp-falls-85688.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              Expense Tracker
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}
