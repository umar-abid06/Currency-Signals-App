import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';
import COLORS from '../constants/colors';

const RootStack = createStackNavigator();
export default function RootStackScreen() {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android'
              ? COLORS.accentColor
              : COLORS.primaryColor,
        },
        headerTintColor:
          Platform.OS === 'android' ? COLORS.primaryColor : COLORS.accentColor,
        headerTitle: 'Authenticate',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <RootStack.Screen name="Auth" component={AuthScreen} />
    </RootStack.Navigator>
  );
}
