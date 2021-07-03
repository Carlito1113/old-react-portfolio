import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react'

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1113,
      backSpeed: 60,
      strings: ['Developer', 'Musician', "Longboarder"],
    });
  }, [])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            // src="assets/guitarpicsatpractice.png"
            alt="carlito playing guitar"
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I'm</h2>
          <h1>Carlito Algarin</h1>
          <h3>
            Passionate <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down arrow" />
        </a>
      </div>
    </div>
  );
}
