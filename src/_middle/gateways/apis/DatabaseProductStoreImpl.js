import { callDatabaseApi, METHOD_GET } from "./DatabaseApi";

const PRODUCTS_COLLECTION = "products";

const getProductsAsync = async () => {
  return callDatabaseApi({
    method: METHOD_GET,
    collection: PRODUCTS_COLLECTION,
  });
};

export { getProductsAsync };
