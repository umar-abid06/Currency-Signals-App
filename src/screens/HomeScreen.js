import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Separator,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../constants/colors';
import CardsOverviewScreen from './CardsOverviewScreen';

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.accentColor} />
      <ScrollView>
        <CardsOverviewScreen {...props} />

        {/* <TouchableOpacity style={styles.touchable}>
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.text}>SIGN UP</Text>
        </TouchableOpacity> */}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor: COLORS.accentColor,
  },
  text: {
    color: COLORS.primaryColor,
    fontSize: 19,
    fontWeight: 'bold',
  },
  touchable: {
    margin: 10,
    // flexDirection:'row',
    // justifyContent:'center',
    alignItems: 'center',
  },
});
export default HomeScreen;
