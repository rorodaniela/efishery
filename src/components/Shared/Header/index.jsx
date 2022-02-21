import "./styles.scss";
import logo from "../../../assets/logo-white.png";
import icon from "../../../assets/icon-white.png";

export default function Header(props) {
  return (
    <div className="header">
      <h3 className="page-name">Dashboard</h3>
      <div className="logo-details">
        <img className="icon" src={icon} alt="icon-efishery" />
        <img className="logo" src={logo} alt="logo-efishery" />
      </div>
    </div>
  );
}
