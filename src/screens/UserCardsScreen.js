import React from 'react';
import {FlatList, Button, Platform, View, Text, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';

import CardItem from '../components/CardItem';
import COLORS from '../constants/colors';
import * as cardsActions from '../store/actions/cards';

const UserCardsScreen = props => {
  const userCards = useSelector(state => state.cards.userCards);
  const dispatch = useDispatch();

  const editCardHandler = id => {
    props.navigation.navigate('Edit', {cardId: id});
  };
  const deleteHandler = id => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      {text: 'No', style: 'default'},
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(cardsActions.deleteCard(id));
        },
      },
    ]);
  };

  return (
    <View style={{backgroundColor: COLORS.accentColor, flex: 1}}>
      <FlatList
        data={userCards}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <CardItem
            iMap={itemData.item.iMap}
            fMap={itemData.item.fMap}
            iName={itemData.item.iName}
            fName={itemData.item.fName}
            entry={itemData.item.entry}
            tp={itemData.item.tp}
            sl={itemData.item.sl}
            onSelect={() => {
              editCardHandler(itemData.item.id);
            }}>
            <TouchableOpacity onPress={() => editCardHandler(itemData.item.id)}>
              <Text
                style={{
                  backgroundColor: COLORS.accentColor,
                  color: COLORS.primaryColor,
                  fontSize: 17,
                  textAlign: 'center',
                  marginRight: 10,
                }}>
                Edit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                onPress={deleteHandler.bind(this, itemData.item.id)}
                style={{
                  backgroundColor: COLORS.accentColor,
                  color: COLORS.primaryColor,
                  fontSize: 17,
                  textAlign: 'center',
                  marginRight: 10,
                }}>
                Delete
              </Text>
            </TouchableOpacity>
            {/* <Button
              color={COLORS.primary}
              title="Edit"
              onPress={() => {
                editCardHandler.bind(this, itemData.item.id);
              }}
            /> */}
            {/* <Button
              color={COLORS.primary}
              title="Delete"
              onPress={() => {
                dispatch(cardsActions.deleteProduct(itemData.item.id));
              }}
            /> */}
          </CardItem>
        )}
      />
    </View>
  );
};

export default UserCardsScreen;
