import { act } from "react-dom/test-utils";

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log(product);

    let existingProduct = state.cart.find(
      (curItem) => curItem.id == id + color
    );
    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id == id + color) {
          let newAmount = curElem.amount + amount;
          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct;
      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  // Incrementar y disminuir
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmout = curElem.amount - 1;
        if (decAmout <= 0) {
          decAmout = 1;
        }
        return {
          ...curElem,
          amount: decAmout,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }
  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;
        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }
        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "CART_COUNT_ITEM") {
    let updateItemaval = state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;
      initialVal = initialVal + amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_item: updateItemaval,
    };
  }

  return state;
};

export default cartReducer;
