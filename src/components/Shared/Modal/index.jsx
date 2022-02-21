import "./styles.scss";

export default function Modal({ open, setOpen, component }) {
  return (
    <div
      id="myModal"
      className="modal"
      style={{ display: open ? "block" : "none" }}
    >
      <div className="modal-content">
        <div className="modal-body">{component(setOpen)}</div>
      </div>
    </div>
  );
}
