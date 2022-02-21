import "./styles.scss";
import logo from "../../../assets/logo-white.png";
import icon from "../../../assets/icon-white.png";
import anonymous from "../../../assets/anonymous.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import menu from "../../../collections/menu";

export default function Sidebar({ children }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={"sidebar"} style={{ width: open ? "215px" : "" }}>
        <div className="logo-details" onClick={handleOpen}>
          <img
            className="icon"
            style={{ opacity: open ? 1 : 0 }}
            src={icon}
            alt="icon-efishery"
          />
          <img
            className="logo"
            style={{ opacity: open ? 1 : 0 }}
            src={logo}
            alt="logo-efishery"
          />
          <i
            className="bx bx-menu"
            id="btn"
            style={{ textAlign: open ? "right" : "center" }}
          ></i>
        </div>
        <ul className="nav_list">
          {menu?.map((item, idx) => (
            <li key={idx}>
              <Link className="menu" to={item?.url}>
                <i className={`bx bx-${item?.iconClass}`}></i>
                <span
                  className="links_name"
                  style={{
                    opacity: open ? 1 : 0,
                    pointerEvents: open ? "auto" : "none",
                  }}
                >
                  {item?.name}
                </span>
              </Link>
              <span className="tooltip" style={{ display: open ? "none" : "" }}>
                {item?.name}
              </span>
            </li>
          ))}
          <li className="profile" style={{ width: open ? "215px" : "" }}>
            <div className="profile-details">
              <img src={anonymous} alt="profileImg" />
              <div className="name_job">
                <div className="name">Roro Daniela</div>
                <div className="job">Administrator</div>
              </div>
            </div>
            <i
              className="bx bx-log-out"
              id="log_out"
              style={{
                width: open ? "50px" : "100%",
              }}
            ></i>
          </li>
        </ul>
      </div>
      <div
        className="content"
        style={{
          left: open ? "215px" : "",
          width: open ? "calc(100% - 215px)" : "calc(100% - 78px)",
        }}
      >
        {children}
      </div>
    </>
  );
}
