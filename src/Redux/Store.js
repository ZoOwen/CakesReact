import { createStore, combineReducers } from "redux";
import IceCream from "./Reducers/IceCreamReducers";
import Cakes from "./Reducers/CakesReducers";
const data = combineReducers({
  IceCream,
  Cakes,
});
export default createStore(
  combineReducers({ IceCream: IceCream, Cakes: Cakes })
);
