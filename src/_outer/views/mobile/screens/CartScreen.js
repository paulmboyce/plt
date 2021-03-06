import React from "react";
import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { ThemeStyles, Theme } from "../styles/Theme";
import ButtonAction from "../components/themed/ButtonAction";
import CartItem from "../components/CartItem";
import ContinueShopping from "../components/ContinueShopping";
import {
  deleteFromCartAction,
  decrementCartAction,
  incrementCartAction,
} from "../../../../_middle/controllers/redux/actions/CartActions";
import { createOrderAction } from "../../../../_middle/controllers/redux/actions/OrderActions";

const showProductScreen = (navigation, product) => {
  navigation.navigate("Product", {
    productId: product.id,
    title: product.title,
  });
};

const CartScreen = (props) => {
  const cart = useSelector((state) => state.cart);
  const allProducts = useSelector((state) => state.products);
  const cartItemsArray = Object.values(cart.items);

  const window = useWindowDimensions();
  const dispatch = useDispatch();

  const cartItemBehaviours = {
    increment: (productId) => dispatch(incrementCartAction(productId)),
    decrement: (productId) => dispatch(decrementCartAction(productId)),
    delete: (productId) => dispatch(deleteFromCartAction(productId)),
  };

  const renderItems = () => {
    if (cartItemsArray.length === 0) {
      return (
        <Text style={ThemeStyles.text}>
          No items found. Add a product to your cart!
        </Text>
      );
    }

    return cartItemsArray.map((cartItem) => {
      const cartProduct = allProducts[cartItem.productId];
      return (
        cartProduct && (
          <TouchableOpacity
            key={cartItem.productId}
            onPress={() => {
              showProductScreen(props.navigation, cartProduct);
            }}
          >
            <CartItem
              behaviours={cartItemBehaviours}
              cartItem={cartItem}
              cartProduct={cartProduct}
            />
          </TouchableOpacity>
        )
      );
    });
  };

  const renderItemCount = () => {
    let count = 0;
    cartItemsArray.map((item) => {
      count += item.quantity;
    });
    return count;
  };

  const styles = StyleSheet.create({
    totalContainer: {
      paddingVertical: 10,
    },
  });

  const renderStartCheckoutButton = () => {
    if (cartItemsArray.length > 0) {
      return (
        <View style={ThemeStyles.box1}>
          <ButtonAction
            style={{
              width: window.width * 0.9,
              paddingVertical: 10,
              marginBottom: 10,
            }}
            title={"Proceed to checkout (" + renderItemCount() + " items)"}
            onPress={() => {
              alert("TODO: Start Checkout Process!");
            }}
          />
        </View>
      );
    }
  };
  return (
    <ScrollView style={{ backgroundColor: Theme.backgroundColor }}>
      <View style={ThemeStyles.screen}>
        <View style={ThemeStyles.box1left}>
          <View style={styles.totalContainer}>
            <Text style={ThemeStyles.textLarge}>
              Subtotal: ${Number.parseFloat(cart.total).toFixed(2)}
            </Text>
          </View>
        </View>
        {renderStartCheckoutButton()}

        <View style={ThemeStyles.box2end}>{renderItems()}</View>

        {(() => {
          if (cartItemsArray.length === 0) {
            return (
              <View style={ThemeStyles.box1}>
                <ContinueShopping navigation={props.navigation} />
              </View>
            );
          }
        })()}
      </View>
    </ScrollView>
  );
};

export default CartScreen;
