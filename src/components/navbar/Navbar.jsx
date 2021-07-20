import './navbar.scss';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'navbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            {`{C.A}`}
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+727 331 0237</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>carlito1113@yahoo.com</span>
          </div>
          <div className="itemContainer">
            <a
              href="https://github.com/Carlito1113"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github icon"></i>
            </a>
          </div>
          <div className="itemContainer">
            <span>
              <a
                href="https://www.linkedin.com/in/carlito-algarin-5b29771b1/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in icon"></i>
              </a>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
