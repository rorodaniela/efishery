import "./styles.scss";
import { Table } from "../../components";
import head from "./structures/table";
import Pagination from "../Shared/Pagination";
import { useEffect, useState } from "react";
import CardPrice from "./CardPrice";
import Dropdown from "../Shared/Dropdown";
import { useDispatch } from "react-redux";
import { priceActions } from "../../controllers/actions";
import Modal from "../Shared/Modal";
import AddPrice from "./AddPrice";

export default function PriceList({ pricelist, arealist, sizelist }) {
  const dispatch = useDispatch();
  const [currentDataPage, setCurrentDataPage] = useState([]);
  const [filter, setFilter] = useState({});
  const [area, setArea] = useState();
  const [size, setSize] = useState();
  const [open, setOpen] = useState(false);

  const handleChange = (name, value) => {
    setFilter({ ...filter, [name]: value });
  };

  const handleSearch = () => {
    dispatch(priceActions.getPriceList(filter));
  };

  useEffect(() => {
    let tempArea = [];
    let tempSize = [];
    arealist?.map((item) => {
      return tempArea.push(item?.city);
    });
    sizelist?.map((item) => {
      return tempSize.push(item?.size);
    });
    setArea(tempArea);
    setSize(tempSize);
  }, [arealist, sizelist]);

  return (
    <div className="root">
      <h3 className="title">Harga Penjualan Ikan</h3>
      <hr className="divider" />
      <div className="flex">
        <div className="input">
          <label>Filter Kota</label>
          <Dropdown
            name="city"
            label="Kota"
            selected={filter?.city}
            setSelected={handleChange}
            options={area}
          />
        </div>
        <div className="input">
          <label>Filter Size</label>
          <Dropdown
            name="size"
            label="Ukuran"
            selected={filter?.size}
            setSelected={handleChange}
            options={size}
          />
        </div>
      </div>
      <div className="flex">
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
        <button className="btn btn-secondary" onClick={() => setFilter()}>
          Reset
        </button>
        <button className="btn btn-secondary" onClick={() => setOpen(!open)}>
          Add
        </button>
      </div>
      <div className="table-desktop">
        <Pagination
          position={"flex-end"}
          data={pricelist}
          setCurrentDataPage={setCurrentDataPage}
        />
        <Table head={head} data={currentDataPage} />
      </div>
      <div className="mobile-card">
        {currentDataPage?.map((item, idx) => (
          <CardPrice
            key={idx}
            uuid={item?.uuid}
            komoditas={item?.komoditas}
            price={item?.price}
            kota={item?.kota}
            provinsi={item?.area_provinsi}
            tgl_parsed={item?.tgl_parsed}
          />
        ))}
        <Pagination
          position={"center"}
          data={pricelist}
          setCurrentDataPage={setCurrentDataPage}
        />
      </div>
      <Modal open={open} setOpen={setOpen} component={AddPrice} />
    </div>
  );
}
