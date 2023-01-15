
const initialState = {
  showDescriptionModal: false,
  item: {
    id: 1,
    img: "",
    category: "skin",
    title: "oil",
    price: 25,
  },
};

export function modalsStore(state = initialState, action) {
  switch (action.type) {
    case "SHOW_MODAL": {
      return {
        ...state,
        showDescriptionModal: action.showDescriptionModal,
        item: action.item,
      };
    }

    case "HIDE_MODAL": {
      return {
        ...state,
        showDescriptionModal: false,
      };
    }
    default:
      return state;
  }
}

export function cartStore(state = { items: [] }, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      action.item = {
        ...action.item,
        quantity: 1
      }
      return {
        ...state,
        items:[...state.items,action.item]
      };
    }
    case "INCREASE_CART_ITEM": {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              quantity: item.quantity ? item.quantity + 1 : 1,
            };
          }
          return item;
        }),
      };
    }
    case "DECREASE_CART_ITEM": {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              quantity:
                item.quantity && item.quantity !== 1 ? item.quantity - 1 : 1,
            };
          }
          return item;
        }),
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        items: state.items.filter((item) => {
          return item.id !== action.id;
        }),
      };
    }
    default:
      return state;
  }
}
