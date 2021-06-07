import React, {useReducer, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../constants/colors';
import CountryPicker from './CountryPicker';
import {CountryData} from '../data/countries-data';
const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};

const Modal = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : '',
    isValid: props.initiallyValid,
    touched: false,
  });
  const {onInputChange, cid} = props;
  useEffect(() => {
    if (inputState.touched) {
      props.onInputChange(cid, inputState.value, inputState.isValid);
    }
  }, [inputState, onInputChange, cid]);

  const textChangeHandler = text => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }
    dispatch({type: INPUT_CHANGE, value: text, isValid: isValid});
  };

  const lostFocusHandler = () => {
    dispatch({type: INPUT_BLUR});
  };

  const [countryCodePicker, setCountryCodePicker] = useState(false);

  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{props.label}</Text>
      {/* <TextInput
        {...props}
        style={styles.input}
        value={inputState.value}
        onChangeText={textChangeHandler}
        onBlur={lostFocusHandler}
      /> */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => setCountryCodePicker(true)}>
          <Text>Country</Text>
        </TouchableOpacity>
        <View>
          <TextInput
            {...props}
            placeholder="Select country!"
            style={{margin: 8}}
            value={inputState.value}
          />
        </View>
      </View>
      {!inputState.isValid && inputState.touched && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.errorText}</Text>
        </View>
      )}
      <CountryPicker data={CountryData} isVisible={countryCodePicker} />
    </View>
  );
};
const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: '100%',
  },
  label: {
    fontSize: 15,
    marginVertical: 4,
  },
  input: {
    fontSize: 15,
    paddingHorizontal: 2,
    paddingVertical: 3,
    borderBottomColor: COLORS.primaryColor,
    borderBottomWidth: 2,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 13,
  },
});
export default Modal;
