import React from "react";
import { addCakes, minusCakes } from "../Redux/Actions/CakesActions";
import { connect } from "react-redux";
function Cakes(props) {
  console.log("props", props);
  return (
    <div>
      <h1>Cakes</h1>
      <h4>i have {props.cakes} Cakes</h4>
      <button
        onClick={() => {
          props.addCakes();
        }}
      >
        +
      </button>
      {props.cakes}
      <button
        onClick={() => {
          props.minusCakes();
        }}
      >
        -
      </button>
    </div>
  );
}
const mapStateToString = (props) => {
  return {
    cakes: props.Cakes.cakes,
  };
};
const mapDispatchToString = (dispatch) => {
  return {
    addCakes: () => dispatch(addCakes()),
    minusCakes: () => dispatch(minusCakes()),
  };
};
export default connect(mapStateToString, mapDispatchToString)(Cakes);
