export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = card => {
  return {type: ADD_TO_CART, card: card};
};

export const removeFromCart = cardId => {
  return {type: REMOVE_FROM_CART, pid: cardId};
};
