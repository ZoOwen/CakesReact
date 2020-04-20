export const INCREMENTT = "INCREMENTT";
export const DECREMENTT = "DECREMENTT";

export const addIceCream = () => {
  return {
    type: INCREMENTT,
  };
};

export const minusIceCream = () => {
  return {
    type: DECREMENTT,
  };
};
