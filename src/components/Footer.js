import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";

const Footer = (props) => {
  return (
    <ProductConsumer>
      {(value) => {
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6">
                  <p className="text-capitalize">
                    copyright &copy; reach tech store {new Date().getFullYear()}
                    . all right reserved.
                  </p>
                </div>
                <div className="col-md-6 d-flex justify-content-around">
                  {value.socialLinks.map((item) => (
                    <a href={item.url} key={item.id}>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
};

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;

export default Footer;
