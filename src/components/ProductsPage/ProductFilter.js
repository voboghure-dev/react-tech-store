import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";

const ProductFilter = (props) => {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          search,
          price,
          min,
          max,
          company,
          shipping,
          storeProducts,
          handleChange,
        } = value;
        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                {/* text search */}
                <div>
                  <lable htmlFor="search">search products</lable>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleChange}
                    value={search}
                    className="filter-item"
                  />
                </div>
                {/* end of text search */}
                {/* company */}
                <div>
                  <lable htmlFor="company">company</lable>
                  <select
                    name="company"
                    id="company"
                    className="filter-item"
                    onChange={handleChange}
                    value={company}
                  >
                    <option value="all">all</option>
                    <option value="fuji">fuji</option>
                    <option value="htc">htc</option>
                  </select>
                </div>
                {/* end of company */}
                {/* price range */}
                <div>
                  <lable htmlFor="price">
                    <p className="mb-2">
                      product price: <span>$ {price}</span>
                    </p>
                  </lable>
                  <input
                    type="range"
                    name="price"
                    id="price"
                    min={min}
                    max={max}
                    className="filter-price"
                    value={price}
                    onChange={handleChange}
                  />
                </div>
                {/* end of price range */}
                {/* free shipping */}
                <div>
                  <lable htmlFor="shipping" className="mx-2">
                    free shipping
                  </lable>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    onChange={handleChange}
                    value={shipping && true}
                  />
                </div>
                {/* end of free shipping */}
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  lable {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
  }
`;

export default ProductFilter;
