import React, {useState, useEffect, useCallback, useReducer} from 'react';
import {
  View,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Alert,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import * as cardsActions from '../store/actions/cards';
import Input from '../components/Input';
// import COLORS from '../constants/colors';
// import Modal from '../components/Modal';
// import CountryPicker from '../components/CountryPicker';
// import {CountryData} from '../data/countries-data';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};
const EditCardScreen = props => {
  const cardId = props.route.params?.cardId;
  const editedCard = useSelector(state =>
    state.cards.userCards.find(card => card.id === cardId),
  );
  const dispatch = useDispatch();
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      // id: editedCard ? editedCard.id : '',
      iMap: editedCard ? editedCard.iMap : '',
      fMap: editedCard ? editedCard.fMap : '',
      iName: editedCard ? editedCard.iName : '',
      fName: editedCard ? editedCard.fName : '',
      entry: editedCard ? editedCard.entry : '',
      tp: editedCard ? editedCard.tp : '',
      sl: editedCard ? editedCard.sl : '',
    },
    inputValidities: {
      // id: editedCard ? true : false,
      iMap: editedCard ? true : false,
      fMap: editedCard ? true : false,
      iName: editedCard ? true : false,
      fName: editedCard ? true : false,
      entry: editedCard ? true : false,
      tp: editedCard ? true : false,
      sl: editedCard ? true : false,
    },
    formIsValid: editedCard ? true : false,
  });

  const submitHandler = useCallback(() => {
    if (!formState.formIsValid) {
      Alert.alert('Wrong Input!,', 'Please, check the errors in the form', [
        {text: 'Okay'},
      ]);
      return;
    }
    if (editedCard) {
      dispatch(
        cardsActions.updateCard(
          // +formState.inputValues.id,
          cardId,
          formState.inputValues.iMap,
          formState.inputValues.fMap,
          formState.inputValues.iName,
          formState.inputValues.fName,
          +formState.inputValues.entry,
          +formState.inputValues.tp,
          +formState.inputValues.sl,
        ),
      );
    } else {
      dispatch(
        cardsActions.createCard(
          // cardId,
          // +formState.inputValues.id,
          formState.inputValues.iMap,
          formState.inputValues.fMap,
          formState.inputValues.iName,
          formState.inputValues.fName,
          +formState.inputValues.entry,
          +formState.inputValues.tp,
          +formState.inputValues.sl,
        ),
      );
    }
    props.navigation.goBack();
  }, [dispatch, cardId, formState]);

  useEffect(() => {
    props.navigation.setParams({submit: submitHandler});
  }, [submitHandler]);

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState],
  );

  return (
    <KeyboardAvoidingView
      behavior="height"
      keyboardVerticalOffset={50}
      style={{flex: 1}}>
      <ScrollView>
        <Text
          style={{
            fontSize: 19,
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 19,
            textDecorationLine: 'underline',
          }}>
          Add a Currency Signal
        </Text>
        <View style={styles.form}>
          {/* <Input
            cid="id"
            keyboardType="number-pad"
            returnKeyType="next"
            label="Enter a distinct Id no:"
            errorText="Please enter a valid and distinct ID"
            onInputChange={inputChangeHandler}
            initialValue={editedCard ? editedCard.id.toString() : ''}
            initiallyValid={!!editedCard}
            required
            // min={0.1}
          /> */}
          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => setCountryCodePicker(true)}>
              <Text>Country</Text>
            </TouchableOpacity>
            <View>
              <TextInput placeholder="Select country!" style={{margin: 8}} />
            </View>
          </View> */}
          {/* <Modal /> */}
          <Input
            cid="iName"
            onInputChange={inputChangeHandler}
            returnKeyType="next"
            label="From (Enter the first Currency Code)"
            errorText="Please enter a valid Currency Code!"
            initialValue={editedCard ? editedCard.iName : ''}
            initiallyValid={!!editedCard}
            required
          />

          <Input
            cid="fName"
            onInputChange={inputChangeHandler}
            returnKeyType="next"
            label="To (Enter the second Currency Code)"
            errorText="Please enter a valid Currency Code!"
            initialValue={editedCard ? editedCard.fName : ''}
            initiallyValid={!!editedCard}
            required
          />

          <View style={styles.formControl}>
            <Input
              cid="iMap"
              onInputChange={inputChangeHandler}
              returnKeyType="next"
              label="From (Enter the link of the first Currency Flag)"
              errorText="Please enter a valid Currency Flag!"
              initialValue={editedCard ? editedCard.iMap : ''}
              initiallyValid={!!editedCard}
              required
            />

            <Input
              cid="fMap"
              onInputChange={inputChangeHandler}
              returnKeyType="next"
              label="To (Enter the link of the second Currency Flag)"
              errorText="Please enter a valid Currency Flag!"
              initialValue={editedCard ? editedCard.fMap : ''}
              initiallyValid={!!editedCard}
              required
            />
          </View>
          <Input
            cid="entry"
            onInputChange={inputChangeHandler}
            returnKeyType="next"
            label="Entry Value"
            errorText="Please enter a valid number!"
            keyboardType="decimal-pad"
            returnKeyType="next"
            initialValue={editedCard ? editedCard.entry.toString() : ''}
            initiallyValid={!!editedCard}
            required
            // min={0.1}
          />
          <Input
            cid="tp"
            onInputChange={inputChangeHandler}
            returnKeyType="next"
            label="TP Value"
            errorText="Please enter a valid number!"
            keyboardType="decimal-pad"
            returnKeyType="next"
            initialValue={editedCard ? editedCard.tp.toString() : ''}
            initiallyValid={!!editedCard}
            required
            // min={0.1}
          />
          <Input
            cid="sl"
            onInputChange={inputChangeHandler}
            returnKeyType="next"
            label="SL Value"
            errorText="Please enter a valid number!"
            keyboardType="decimal-pad"
            returnKeyType="next"
            initialValue={editedCard ? editedCard.sl.toString() : ''}
            initiallyValid={!!editedCard}
            required
            // min={0.1}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
});
export default EditCardScreen;
