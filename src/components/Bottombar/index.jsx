import "./styles.scss";
import menu from "../../collections/menuMobile";
import { Link } from "react-router-dom";

export default function Bottombar({ childern }) {
  return (
    <div className="bottombar">
      <ul className="nav_list">
        {menu?.map((item) => (
          <li>
            <Link className="menu" to={item?.url}>
              <i className={`bx bx-${item?.iconClass}`}></i>
              <span className="links_name">{item?.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
