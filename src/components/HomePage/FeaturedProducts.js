import React from "react";
import Product from "../Product";
import { Link } from "react-router-dom";
import Title from "../Title";
import { ProductConsumer } from "../../context";

const FeaturedProducts = (props) => {
  return (
    <section className="py-5">
      <div className="container">
        {/* title */}
        <Title title="featured products" center="true" />
        {/* products */}
        <div className="row">
          <ProductConsumer>
            {(value) => {
              const { featuredProducts } = value;
              return featuredProducts.map((product) => (
                <Product key={product.id} product={product} />
              ));
            }}
          </ProductConsumer>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
