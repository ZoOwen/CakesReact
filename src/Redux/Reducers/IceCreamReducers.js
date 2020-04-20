import { INCREMENT, DECREMENT } from "../Actions/IceCreamActions";

const initState = {
  iceCream: 0,
};

const IceCream = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        iceCream: state.iceCream + 1,
      };
    case DECREMENT:
      return {
        ...state,
        iceCream: state.iceCream - 1,
      };
    default:
      return state;
  }
};

export default IceCream;
