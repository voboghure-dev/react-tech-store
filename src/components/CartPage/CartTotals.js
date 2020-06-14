import React from "react";
import { ProductConsumer } from "../../context";

const CartTotals = (props) => {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {(value) => {
            const { clearCart, cartSubTotal, cartTax, cartTotal } = value;
            return (
              <div className="col text-title text-center my-4">
                <button
                  className="btn btn-outline-danger text-capitalize mb-4"
                  onClick={clearCart}
                >
                  clear cart
                </button>
                <h3>sub total: ${cartSubTotal}</h3>
                <h3>tax: ${cartTax}</h3>
                <h3>total: ${cartTotal}</h3>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
};

export default CartTotals;
