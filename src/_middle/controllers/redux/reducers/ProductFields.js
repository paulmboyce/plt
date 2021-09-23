import Product from "../../../../_core/entities/Product";
export const extractFields = (products) => {
  return products.map(
    (product) =>
      new Product(
        product.id,
        product.colour,
        product.name,
        product.price,
        product.img
      )
  );
};
