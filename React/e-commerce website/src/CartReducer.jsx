export const initialState = {
  cart: [],
  total: 0,
  discount: 0,
};
const calculate = (cart, discount = 0) => {
  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  total = total - (total * discount) / 100;
  return total;
};
export function cartreducer(state, action) {
  switch (action.type) {
    case "Add_Item": {
      console.log(action);
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      let updatedCart;
      if (existingItem) {
        updatedCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      } else {
        updatedCart = [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }
      return {
        ...state,
        cart: updatedCart,
        total: calculate(updatedCart, state.discount),
      };
    }
    case "Inrease_qty": {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );
      return {
        ...state,
        cart: updatedCart,
        total: calculate(updatedCart, state.discount),
      };
    }
    case "APPLY_COUPON": {
      return {
        ...state,
        discount: action.payload,
        total: calculate(state.cart, action.payload),
      };
    }
    case "CLEAR_CART": {
      return initialState;
    }

    default:
      return state;
  }
}
