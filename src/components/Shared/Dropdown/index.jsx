import "./styles.scss";
import { useState } from "react";

export default function Dropdown({
  label,
  name,
  selected,
  setSelected,
  options,
}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected ? selected : `Pilih ${label}`}
        <span>
          <i className="bx bxs-chevron-down"></i>
        </span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options?.map((value, idx) => (
            <div
              key={idx}
              className="dropdown-item"
              onClick={(e) => {
                setSelected(name, value);
                setIsActive(false);
              }}
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
