import { GET_ALL_PRODUCTS } from "../actions/ActionTypes";

import { extractFields } from "./ProductFields";

const reduceProducts = (oldState = {}, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTS: {
      if (payload.products) {
        console.log(`Got [${Object.keys(payload.products).length}] products`);

        const productsArray = extractFields(payload.products);
        const products = {};
        productsArray.forEach((product) => {
          products[product.id] = product;
        });

        return { ...products };
      }
    }

    default:
      return oldState;
  }
};

export default reduceProducts;
