import { INCREMENTT, DECREMENTT } from "../Actions/IceCreamActions";

const initState = {
  iceCream: 0,
};

const IceCream = (state = initState, action) => {
  switch (action.type) {
    case INCREMENTT:
      return {
        ...state,
        iceCream: state.iceCream + 1,
      };
    case DECREMENTT:
      return {
        ...state,
        iceCream: state.iceCream - 1,
      };
    default:
      return state;
  }
};

export default IceCream;
