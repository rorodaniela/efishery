import { combineReducers } from "redux";
import price from "./price.reducer";
import area from "./area.reducer";
import size from "./size.reducer";

const rootReducer = combineReducers({
  price,
  area,
  size,
});

export default rootReducer