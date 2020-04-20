import React from "react";
import { addIceCream, minusIceCream } from "../Redux/Actions/IceCreamActions";
import { connect } from "react-redux";

function IceCream(props) {
  console.log("props", props);
  return (
    <div>
      <h1>IceCream</h1>
      <h4>i have {props.iceCream} Ice Cream</h4>
      <button
        onClick={() => {
          props.addIceCream();
        }}
      >
        +
      </button>
      {props.iceCream}
      <button
        onClick={() => {
          props.minusIceCream();
        }}
      >
        -
      </button>
    </div>
  );
}

const mapStateToString = (props) => {
  return {
    iceCream: props.IceCream.iceCream,
  };
};
const mapDispatchToString = (dispatch) => {
  return {
    addIceCream: () => dispatch(addIceCream()),
    minusIceCream: () => dispatch(minusIceCream()),
  };
};

export default connect(mapStateToString, mapDispatchToString)(IceCream);
