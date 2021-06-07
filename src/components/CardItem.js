import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  VirtualizedView,
} from 'react-native';

import COLORS from '../constants/colors';

const CardItem = props => {
  let TouchableEffect = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableEffect = TouchableNativeFeedback;
  }

  return (
    <View onPress={props.onSelect}>
      <View style={styles.card}>
        <View
          style={{
            flex: 0.12,
            backgroundColor: COLORS.accentColor,
            marginLeft: 7,
          }}
        />
        <View style={styles.imageContainer}>
          <Image style={styles.image1} source={{uri: props.iMap.toString()}} />
          <Image style={styles.image2} source={{uri: props.fMap.toString()}} />
        </View>
        <View style={styles.upperTextContainer}>
          <Text style={styles.upperText}>
            {props.iName}/{props.fName}
          </Text>

          <View style={styles.lowerTextContainer}>
            <Text style={[styles.lowerText, {fontWeight: 'bold'}]}>
              Entry:{props.entry}
            </Text>
            <Text
              style={[styles.lowerText, {color: 'green', fontWeight: 'bold'}]}>
              TP:{props.tp}
            </Text>
            <Text
              style={[styles.lowerText, {color: 'maroon', fontWeight: 'bold'}]}>
              SL:{props.sl}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}>
          {props.children}
        </View>
        <View
          style={{
            flex: 0.12,
            backgroundColor: COLORS.accentColor,
            marginRight: 7,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    height: 100,
    margin: 10,
    backgroundColor: COLORS.primaryColor,
    borderRadius: 10,
    elevation: 5,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.26,
    shadowColor: 'red',
  },
  imageContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    flex: 1,
    marginHorizontal: 20,

    // borderRadius:6,
    marginBottom: 30,
    width: '45%',
    height: '40%',
  },
  image2: {
    marginLeft: -30,
    // borderColor:'black',
    // borderRadius:6,
    width: '45%',
    height: '40%',
  },
  upperTextContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperText: {
    fontSize: 16,
    paddingTop: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: COLORS.accentColor,
  },
  lowerTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerText: {
    fontSize: 14,
    color: COLORS.accentColor,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.accentColor,
    marginRight: 10,
  },
});

export default CardItem;
