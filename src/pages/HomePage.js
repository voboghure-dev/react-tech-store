import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import FeaturedProducts from "../components/HomePage/FeaturedProducts";

const HomePage = (props) => {
  return (
    <>
      <Hero title="awesome gadgets" max="true">
        <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
          Our Products
        </Link>
      </Hero>
      <Services />
      <FeaturedProducts />
    </>
  );
};

export default HomePage;
