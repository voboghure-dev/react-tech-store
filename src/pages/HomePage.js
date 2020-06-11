import React from "react";
import { ProductConsumer } from "../context";

const HomePage = (props) => {
  return (
    <>
      <ProductConsumer>
        {(value) => {
          return <h1>Hello from HomePage</h1>;
        }}
      </ProductConsumer>
    </>
  );
};

export default HomePage;
