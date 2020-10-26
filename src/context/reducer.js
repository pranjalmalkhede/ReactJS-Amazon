export const initialState = {
  basket: [],
  user: null,
  products: [],
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      let findIndex = state.basket.findIndex(
        (item) => item.id === action.item.id
      );
      let newBasket2 = [];
      if (findIndex > -1) {
        newBasket2 = state.basket.map((item, i) => {
          if (i === findIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return { ...item };
          }
        });
      } else {
        newBasket2 = [...state.basket, { ...action.item, quantity: 1 }];
      }
      return {
        ...state,
        basket: newBasket2,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [];

      if (index > -1) {
        if (state.basket[index].quantity > 1) {
          newBasket = state.basket.map((item, i) => {
            if (i === index) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            } else {
              return {
                ...item,
              };
            }
          });
        } else {
          newBasket = [...state.basket];
          newBasket.splice(index, 1);
        }
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_BASKET":
      return {
        ...state,
        products: action.items,
      };
    default:
      return state;
  }
};

export default reducer;
