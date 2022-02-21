import { formatIDR, formatDate } from "../../../helpers";

const table = [
  {
    label: "UUID",
    value: "uuid",
    width: "180px",
    textAlign: "left",
    weight: "500px",
    color: "var(--palette-grey-700)",
  },
  {
    label: "Komoditas",
    value: "komoditas",
    width: "150px",
    textAlign: "center",
  },
  {
    label: "Size",
    value: "size",
    width: "60px",
    textAlign: "center",
  },
  {
    label: "Price",
    value: "price",
    width: "120px",
    textAlign: "center",
    format: formatIDR,
  },
  {
    label: "Kota",
    value: "area_kota",
    width: "150px",
    textAlign: "center",
  },
  {
    label: "Provinsi",
    value: "area_provinsi",
    width: "150px",
    textAlign: "center",
  },
  {
    label: "Tanggal",
    value: "tgl_parsed",
    width: "150px",
    textAlign: "center",
    format: formatDate,
  },
];

export default table;
