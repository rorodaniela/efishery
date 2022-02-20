import "./styles.scss";
import logo from "../../assets/logo-white.png";
import icon from "../../assets/icon-white.png";
import anonymous from "../../assets/anonymous.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import menu from "../../collections/menu";

export default function Sidebar({ children }) {
  const [open, setOpen] = useState(true);

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
          {menu?.map((item) => (
            <li>
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
          <li class="profile" style={{ width: open ? "215px" : "" }}>
            <div class="profile-details">
              <img src={anonymous} alt="profileImg" />
              <div class="name_job">
                <div class="name">Roro Daniela</div>
                <div class="job">Administrator</div>
              </div>
            </div>
            <i
              class="bx bx-log-out"
              id="log_out"
              style={{
                width: open ? "50px" : "100%",
              }}
            ></i>
          </li>
        </ul>
      </div>
      <div
        class="content"
        style={{
          left: open ? "215px" : "",
          width: open ? "calc(100% - 215px)" : "",
        }}
      >
        {children}
      </div>
    </>
  );
}
