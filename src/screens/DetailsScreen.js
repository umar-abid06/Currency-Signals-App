import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import COLORS from '../constants/colors';
import {useSelector} from 'react-redux';
const DetailsScreen = props => {
  const cardId = props.route.params?.cardId;
  const selectedCard = useSelector(state =>
    state.cards.availableCards.find(card => card.id === cardId),
  );
  return (
    <ScrollView style={{backgroundColor: COLORS.primaryColor}}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{uri: selectedCard.iMap}} style={styles.image1} />
          <Image source={{uri: selectedCard.fMap}} style={styles.image2} />
        </View>
        <View style={styles.textContainer}>
          {/* <Text style={styles.upperText}>ID no: {selectedCard.id}</Text> */}
          <Text style={styles.upperText}>
            {selectedCard.iName}/{selectedCard.fName}
          </Text>

          <View>
            <Text style={styles.lowerText}>ENTRY:{selectedCard.entry}</Text>
            <Text style={styles.lowerText}>
              TP:{selectedCard.tp} SL:{selectedCard.sl}
            </Text>
            {/* <Text style={styles.lowerText}>SL:{selectedCard.sl}</Text> */}
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.buttonText}>SELL</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  card: {
    // flexDirection: 'row',
    flex: 1,

    height: 250,
    margin: 20,
    backgroundColor: COLORS.accentColor,
    borderRadius: 10,
    elevation: 5,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.26,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  image1: {
    width: '28%',
    height: 55,
    marginRight: 30,
  },
  image2: {
    width: '28%',
    height: 55,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperText: {
    fontSize: 22,
    color: COLORS.primaryColor,
  },
  lowerText: {
    fontSize: 16,
    color: COLORS.primaryColor,
  },
  touchable: {
    // width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.accentColor,
    backgroundColor: COLORS.primaryColor,
  },
});
export default DetailsScreen;
