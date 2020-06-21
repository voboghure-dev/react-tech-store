import React from "react";
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown,
} from "react-icons/fa";

const CartItem = (props) => {
  const { id, title, price, count, total, image } = props.cartItem;

  return (
    <div className="row mt-5 mt-ld-0 text-capitalize text-center align-items-center">
      {/* image */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <img src={image} width="60" className="img-fluid" alt="product" />
      </div>
      {/* end of image */}
      {/* title */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">product: </span>
        {title}
      </div>
      {/* end of title */}
      {/* price */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">price: </span>$ {price}
      </div>
      {/* end of price */}
      {/* quantity */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <div className="d-flex justify-content-center">
          <div>
            <FaChevronCircleDown
              onClick={() => props.decrement(id)}
              className="cart-icon text-primary"
            />
            <span className="text-title text-muted mx-3">{count}</span>
            <FaChevronCircleUp
              onClick={() => props.increment(id)}
              className="cart-icon text-primary"
            />
          </div>
        </div>
      </div>
      {/* end of quantity */}
      {/* remove */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <FaTrash
          onClick={() => props.removeItem(id)}
          className="cart-icon text-danger"
        />
      </div>
      {/* end of remove */}
      {/* total */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <strong className="text-muted">item total: $ {total}</strong>
      </div>
      {/* end of total */}
    </div>
  );
};

export default CartItem;
