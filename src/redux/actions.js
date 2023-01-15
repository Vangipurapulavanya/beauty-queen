export const showDescriptionModal = (display, item) => ({
  type: "SHOW_MODAL",
  showDescriptionModal: display,
  item,
});

export const hideDescriptionModal = () => ({
    type: "HIDE_MODAL",
});
//cart actions
export const addToCart = (item) =>({
  type: "ADD_TO_CART",
  item
});

export const removeFromCart = (id) => ({
  type: "REMOVE_FROM_CART",
  id
})

export const increaseItemQuantity = (id) => ({
  type: "INCREASE_CART_ITEM",
  id
})


export const decreaseItemQuantity = (id) => ({
  type: "DECREASE_CART_ITEM",
  id
})