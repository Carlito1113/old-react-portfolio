import './portfolio.scss';

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Recommend</li>
        <li>Recipebook</li>
        <li>Audiophyle</li>
      </ul>

      <div className="container">
        <div className="item">
          <img src="assets/recommend.png" alt="Recommend book app" />
          <h3>Recommend</h3>
        </div>
        <div className="item">
          <img src="assets/recommend.png" alt="Recommend book app" />
          <h3>Recommend</h3>
        </div>
        <div className="item">
          <img src="assets/recommend.png" alt="Recommend book app" />
          <h3>Recommend</h3>
        </div>
        <div className="item">
          <img src="assets/recommend.png" alt="Recommend book app" />
          <h3>Recommend</h3>
        </div>
        <div className="item">
          <img src="assets/recommend.png" alt="Recommend book app" />
          <h3>Recommend</h3>
        </div>
        <div className="item">
          <img src="assets/recommend.png" alt="Recommend book app" />
          <h3>Recommend</h3>
        </div>
      </div>
    </div>
  );
}
