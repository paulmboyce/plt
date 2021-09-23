import { GET_ALL_PRODUCTS } from "../actions/ActionTypes";
import { getProductsAsync } from "../../../gateways/apis/ProductStoreInterface";
import * as ui from "./UiActions";

const getProductsAction = () => {
  return async (dispatch) => {
    try {
      dispatch(ui.showSpinnerAction());
      const products = await getProductsAsync();
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: { products: products ? products : [] },
      });
    } catch (err) {
      dispatch(ui.showErrorAction(err.message));
    } finally {
      dispatch(ui.hideSpinnerAction());
    }
  };
};

export { getProductsAction };
