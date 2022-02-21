import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../../components";
import { PriceList } from "../../components";
import {
  areaActions,
  priceActions,
  sizeActions,
} from "../../controllers/actions";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { pricelist } = useSelector((state) => state.price);
  const { arealist } = useSelector((state) => state.area);
  const { sizelist } = useSelector((state) => state.size);

  useEffect(() => {
    dispatch(priceActions.getPriceList());
    dispatch(areaActions.getAreaList());
    dispatch(sizeActions.getSizeList());
  }, [dispatch]);

  return (
    <Layout>
      <PriceList
        pricelist={pricelist}
        arealist={arealist}
        sizelist={sizelist}
      />
    </Layout>
  );
}
