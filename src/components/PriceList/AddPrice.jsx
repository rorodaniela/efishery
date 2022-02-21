import { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo.png";
import { priceActions } from "../../controllers/actions";

export default function AddPrice(setOpen) {
  const dispatch = useDispatch();
  const [newData, setNewData] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(priceActions.addPrice([newData], setOpen));
  };

  const inputs = [
    {
      label: "Nama Komoditas",
      name: "komoditas",
      value: newData?.komoditas,
    },
    {
      label: "Jumlah Komoditas",
      name: "size",
      value: newData?.size,
    },
    {
      label: "Kota",
      name: "area_kota",
      value: newData?.area_kota,
    },
    {
      label: "Provinsi",
      name: "area_provinsi",
      value: newData?.area_provinsi,
    },
  ];

  return (
    <>
      <div className="flex space-between">
        <img className="logo" src={logo} alt="logo-efishery" />
        <h3 className="title text-center">Jual Hasil Panen</h3>
        <div onClick={() => setOpen(false)}>
          <i className="bx bx-x-circle" />
        </div>
      </div>
      <form>
        {inputs?.map((item, idx) => (
          <div className="flex-col" key={idx}>
            <label>{item?.label}</label>
            <input
              type="text"
              id={item?.name}
              name={item?.name}
              value={item?.value}
              onChange={handleOnChange}
            />
          </div>
        ))}
        <button onClick={handleSubmit} className="btn btn-primary fullwidth">
          Kirim
        </button>
      </form>
    </>
  );
}
