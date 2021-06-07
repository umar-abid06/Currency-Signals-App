export const DELETE_CARD = 'DELETE_PRODUCT';
export const CREATE_CARD = 'CREATE_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';
export const SET_CARDS = 'SET_CARDS';
import Card from '../../models/card';

export const fetchCards = () => {
  return async dispatch => {
    try {
      const response = await fetch(
        'https://forex-signals-fccd5-default-rtdb.firebaseio.com/cards.json',
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const resData = await response.json();
      const loadedCards = [];
      for (const key in resData) {
        loadedCards.push(
          new Card(
            key,
            // resData[key].id,
            resData[key].iMap,
            resData[key].fMap,
            resData[key].iName,
            resData[key].fName,
            resData[key].entry,
            resData[key].tp,
            resData[key].sl,
          ),
        );
      }

      dispatch({type: SET_CARDS, cards: loadedCards});
    } catch (err) {
      throw err;
    }
  };
};

export const deleteCard = cardId => {
  return async dispatch => {
    // const token = getState().auth.token;
    await fetch(
      `https://forex-signals-fccd5-default-rtdb.firebaseio.com/cards/${cardId}.json`,
      {
        method: 'DELETE',
      },
    );
    dispatch({type: DELETE_CARD, pid: cardId});
  };
};
export const createCard = (iMap, fMap, iName, fName, entry, tp, sl) => {
  return async dispatch => {
    // const token = getState().auth.token;
    const response = await fetch(
      `https://forex-signals-fccd5-default-rtdb.firebaseio.com/cards.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          iMap,
          fMap,
          iName,
          fName,
          entry,
          tp,
          sl,
        }),
      },
    );
    const resData = await response.json();
    dispatch({
      type: CREATE_CARD,
      cardData: {
        id: resData.name,
        iMap,
        fMap,
        iName,
        fName,
        entry,
        tp,
        sl,
      },
    });
  };
};

export const updateCard = (id, iMap, fMap, iName, fName, entry, tp, sl) => {
  return async dispatch => {
    // const token = getState().auth.token;
    await fetch(
      `https://forex-signals-fccd5-default-rtdb.firebaseio.com/cards/${id}.json`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          iMap,
          fMap,
          iName,
          fName,
          entry,
          tp,
          sl,
        }),
      },
    );
    dispatch({
      type: UPDATE_CARD,
      pid: id,
      cardData: {
        iMap,
        fMap,
        iName,
        fName,
        entry,
        tp,
        sl,
      },
    });
  };
};
