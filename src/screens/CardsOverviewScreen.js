import React, {useEffect, useState, useCallback} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';

import * as cardActions from '../store/actions/cards';
import CardItem from '../components/CardItem';
import COLORS from '../constants/colors';
// import * as cartActions from '../store/actions/cart';

const CardsOverviewScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const cards = useSelector(state => state.cards.availableCards);
  const dispatch = useDispatch();

  const loadCards = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(cardActions.fetchCards());
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    const willFocusSub = props.navigation.addListener('willFocus', loadCards);
    return () => {
      willFocusSub.remove;
    };
  }, [loadCards]);

  useEffect(() => {
    loadCards();
  }, [dispatch, loadCards]);

  const selectItemHandler = id => {
    props.navigation.navigate('Details', {
      cardId: id,
    });
  };

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.text}>An Error occured!</Text>
        <Button
          title="Try Again!"
          onPress={loadCards}
          color={COLORS.primaryColor}
        />
      </View>
    );
  }
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={COLORS.primaryColor} />
      </View>
    );
  }
  if (!isLoading && cards.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No Cards found!</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={cards}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <CardItem
          id={itemData.item.id}
          iMap={itemData.item.iMap}
          fMap={itemData.item.fMap}
          iName={itemData.item.iName}
          fName={itemData.item.fName}
          entry={itemData.item.entry}
          tp={itemData.item.tp}
          sl={itemData.item.sl}
          onSelect={() => {
            selectItemHandler(itemData.item.id);
          }}>
          {/* <View style={{backgroundColor: 'black'}}> */}
          {/* <TouchableOpacity
            color={COLORS.primary}
            title="View Details"
            onPress={() => {
              selectItemHandler(itemData.item.id, itemData.item.title);
            }}></TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => {
              selectItemHandler(itemData.item.id);
            }}>
            <Text
              style={{
                backgroundColor: COLORS.accentColor,
                color: COLORS.primaryColor,
                fontSize: 17,
                textAlign: 'center',
                marginRight: 10,
              }}>
              Details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          // onPress={() => {
          //   dispatch(cartActions.addToCart(itemData.item));
          // }}
          >
            <Text
              style={{
                backgroundColor: COLORS.accentColor,
                color: COLORS.primaryColor,
                fontSize: 17,
                textAlign: 'center',
                marginRight: 10,
              }}>
              To Cart
            </Text>
          </TouchableOpacity>
          {/* <Button
            color={COLORS.primary}
            title="To Cart"
            onPress={() => {
              dispatch(cartActions.addToCart(itemData.item));
            }}
          /> */}
          {/* </View> */}
        </CardItem>
      )}
    />
  );
};
const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardsOverviewScreen;
