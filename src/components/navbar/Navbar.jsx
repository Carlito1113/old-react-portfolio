import './navbar.scss';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+727 331 0237</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>carlito1113@yahoo.com</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
