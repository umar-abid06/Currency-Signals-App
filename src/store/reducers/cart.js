import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/cart';
import {ADD_ORDER} from '../actions/orders';
import CartItem from '../../models/cart-item';
import {DELETE_CARD} from '../actions/cards';

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedCard = action.card;
      const cardPrice = addedCard.price;
      const cardTitle = addedCard.title;

      let updatedOrNewCartItem;

      if (state.items[addedCard.id]) {
        // already have the item in the cart
        updatedOrNewCartItem = new CartItem(
          state.items[addedCard.id].quantity + 1,
          cardPrice,
          cardTitle,
          state.items[addedCard.id].sum + cardPrice,
        );
      } else {
        updatedOrNewCartItem = new CartItem(1, cardPrice, cardTitle, cardPrice);
      }
      return {
        ...state,
        items: {...state.items, [addedCard.id]: updatedOrNewCartItem},
        totalAmount: state.totalAmount + cardPrice,
      };
    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.pid];
      const currentQty = selectedCartItem.quantity;
      let updatedCartItems;
      if (currentQty > 1) {
        // need to reduce it, not erase it
        const updatedCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.cardPrice,
          selectedCartItem.cardTitle,
          selectedCartItem.sum - selectedCartItem.cardPrice,
        );
        updatedCartItems = {...state.items, [action.pid]: updatedCartItem};
      } else {
        updatedCartItems = {...state.items};
        delete updatedCartItems[action.pid];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.cardPrice,
      };
    case ADD_ORDER:
      return initialState;
    case DELETE_CARD:
      if (!state.items[action.pid]) {
        return state;
      }
      const updatedItems = {...state.items};
      const itemTotal = state.items[action.pid].sum;
      delete updatedItems[action.pid];
      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount - itemTotal,
      };
  }

  return state;
};
