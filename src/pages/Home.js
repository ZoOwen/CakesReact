import React from "react";
import { connect } from "react-redux";
function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <h4>Jumlah Cakes : {props.cakes}</h4>
      <h4>Jumlah Ice Cream: {props.iceCream}</h4>
      <h4>Total barang : {props.total}</h4>
    </div>
  );
}
const mapStateToString = (props) => {
  return {
    cakes: props.Cakes.cakes,
    iceCream: props.IceCream.iceCream,
    total: props.Cakes.cakes + props.IceCream.iceCream,
  };
};
export default connect(mapStateToString)(Home);
