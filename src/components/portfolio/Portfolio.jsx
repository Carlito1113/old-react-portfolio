import './portfolio.scss';

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

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
          <img src="assets/recipebook.png" alt="recipe app" />
          <h3>
            <a
              href="https://recipebook-2096c.web.app/"
              rel="noreferrer"
              target="_blank"
            >
              Recipe Book
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
