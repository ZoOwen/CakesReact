import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

function Header(props) {
  return (
    <div>
      <h1>HEADER</h1>
      <h4>Jumlah Cakes : {props.cakes}</h4>
      <h4>Jumlah Ice Cream: {props.iceCream}</h4>
      <nav>
        <button
          onClick={() => {
            props.history.push("/");
          }}
        >
          Home
        </button>

        <button
          onClick={() => {
            props.history.push("/cakes");
          }}
        >
          Cakes
        </button>

        <button
          onClick={() => {
            props.history.push("/icecream");
          }}
        >
          IceCream
        </button>
      </nav>
    </div>
  );
}
const mapStateToString = (props) => {
  return {
    cakes: props.Cakes.cakes,
    iceCream: props.IceCream.iceCream,
  };
};

export default connect(mapStateToString, null)(withRouter(Header));
