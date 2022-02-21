import { formatDate, formatIDR } from "../../helpers";

export default function CardPrice({
  komoditas,
  uuid,
  tgl_parsed,
  price,
  kota,
  provinsi,
}) {
  return (
    <div
      className="card"
      style={{ justifyContent: komoditas && uuid ? "center" : "" }}
    >
      <div className="flex row">
        <i className="bx bx-water"></i>
        <h4>{komoditas || "Tidak ada nama komoditas"}</h4>
      </div>
      <div className="col">
        <span>{uuid || "-"}</span>
        <div className="flex">
          <i className="bx bx-calendar"></i>
          <span>{formatDate(tgl_parsed)}</span>
        </div>
      </div>
      <div className="flex row">
        <i className="bx bxs-purchase-tag-alt"></i>
        <p className="detail-info">{formatIDR(price)}</p>
      </div>
      <div className="flex row">
        <i className="bx bx-current-location"></i>
        <p className="detail-info">
          {kota}{" "}
          <span style={{ display: kota && provinsi ? "" : "none" }}> , </span>
          {provinsi}
        </p>
      </div>
    </div>
  );
}
