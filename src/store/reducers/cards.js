import CARDS from '../../data/dummy-data';
import {
  DELETE_CARD,
  CREATE_CARD,
  UPDATE_CARD,
  SET_CARDS,
} from '../actions/cards';
import Card from '../../models/card';

const initialState = {
  availableCards: CARDS,
  userCards: CARDS,
  // filter(card => card.ownerId === 'u1'),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CARDS:
      return {
        availableCards: action.cards,
        userCards: action.cards,
      };
    case CREATE_CARD:
      const newCard = new Card(
        // action.cardData.cardName,

        action.cardData.id,
        action.cardData.iMap,
        action.cardData.fMap,
        action.cardData.iName,
        action.cardData.fName,
        action.cardData.entry,
        action.cardData.tp,
        action.cardData.sl,
      );
      return {
        ...state,
        availableCards: state.availableCards.concat(newCard),
        userCards: state.userCards.concat(newCard),
      };
    case UPDATE_CARD:
      const cardIndex = state.userCards.findIndex(
        card => card.id === action.pid,
      );
      const updatedCard = new Card(
        action.pid,
        action.cardData.iMap,
        action.cardData.fMap,
        action.cardData.iName,
        action.cardData.fName,
        action.cardData.entry,
        action.cardData.tp,
        action.cardData.sl,
        // state.userCards[cardIndex].ownerId,
        // state.userProducts[cardIndex].price
      );
      const updatedUserCards = [...state.userCards];
      updatedUserCards[cardIndex] = updatedCard;
      const availableCardIndex = state.availableCards.findIndex(
        card => card.id === action.pid,
      );
      const updatedAvailableCards = [...state.availableCards];
      updatedAvailableCards[availableCardIndex] = updatedCard;
      return {
        ...state,
        availableCards: updatedAvailableCards,
        userCards: updatedUserCards,
      };
    case DELETE_CARD:
      return {
        ...state,
        userCards: state.userCards.filter(card => card.id !== action.pid),
        availableCards: state.availableCards.filter(
          card => card.id !== action.pid,
        ),
      };
  }
  return state;
};
