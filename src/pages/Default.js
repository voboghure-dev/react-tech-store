import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import defaultBcg from "../images/defaultBcg.jpeg";

const Default = (props) => {
  return (
    <>
      <Hero img={defaultBcg} title="404" max="true">
        <h2 className="text-uppercase">Page Not Found</h2>
        <Link to="/" className="main-link" style={{ marginTop: "2rem" }}>
          Back to Home
        </Link>
      </Hero>
    </>
  );
};

export default Default;
