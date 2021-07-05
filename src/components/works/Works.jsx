import './works.scss';
import { useState } from 'react';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: '1',
      icon: './assets/mobile.png',
      title: 'Recommend',
      desc: 'An MERN app where users can search, save, and recommend books',
      img: './assets/recommend.png',
    },
    {
      id: '2',
      icon: './assets/mobile.png',
      title: 'Audiophyle',
      desc: 'A Full-Stack application where users can search musicians and find their popular music, bios, and more.',
      img: './assets/audiophyle.png',
    },
    {
      id: '3',
      icon: './assets/mobile.png',
      title: 'Wine&Dines',
      desc: 'This is a web application where the user can search a recipe based upon a protein type and receive a random recipe with a paired type of wine.',
      img: './assets/wineanddine.png',
    },
  ];

  const handleClick = way => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map(d => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick('left')}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick('right')}
      />
    </div>
  );
}
