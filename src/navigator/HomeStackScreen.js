import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import Entry from '../components/Entry';
import DetailsScreen from '../screens/DetailsScreen';
import COLORS from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android'
              ? COLORS.primaryColor
              : COLORS.accentColor,
        },
        headerTintColor:
          Platform.OS === 'android' ? COLORS.accentColor : COLORS.primaryColor,
        headerTitle: 'Currency Signals',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={navData => {
          return {
            headerLeft: () => (
              <Icon.Button
                name={Platform.OS === 'ios' ? 'ios-menu' : 'ios-menu'}
                color={COLORS.accentColor}
                size={25}
                backgroundColor={COLORS.primaryColor}
                onPress={() => navData.navigation.openDrawer()}></Icon.Button>
            ),
            headerRight: () => (
              <Icon.Button
                name={Platform.OS === 'ios' ? 'cart-sharp' : 'cart-sharp'}
                color={COLORS.accentColor}
                size={25}
                backgroundColor={COLORS.primaryColor}
                onPress={() => {}}></Icon.Button>
            ),
          };
        }}
      />
      <HomeStack.Screen name="Entry" component={Entry} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
