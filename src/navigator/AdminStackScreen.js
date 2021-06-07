import 'react-native-gesture-handler';
import * as React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import EditCardScreen from '../screens/EditCardScreen';
import UserCardsScreen from '../screens/UserCardsScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../constants/colors';

const AdminStack = createStackNavigator();

function AdminStackScreen() {
  return (
    <AdminStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android'
              ? COLORS.primaryColor
              : COLORS.accentColor,
        },
        headerTintColor:
          Platform.OS === 'android' ? COLORS.accentColor : COLORS.primaryColor,
        // headerTitle: 'Currency Signals',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <AdminStack.Screen
        name="Admin Panel"
        component={UserCardsScreen}
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
                name={Platform.OS === 'ios' ? 'ios-create' : 'ios-create'}
                color={COLORS.accentColor}
                size={25}
                backgroundColor={COLORS.primaryColor}
                onPress={() =>
                  navData.navigation.navigate('Edit')
                }></Icon.Button>
            ),
          };
        }}
      />
      <AdminStack.Screen
        name="Edit"
        component={EditCardScreen}
        options={navData => {
          const submitFn = navData.route.params?.submit;
          return {
            headerTitle: () =>
              navData.route.params?.cardId ? (
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  Edit Signal Card
                </Text>
              ) : (
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  Add Signal Card
                </Text>
              ),
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
                name={Platform.OS === 'ios' ? 'ios-checkmark' : 'ios-checkmark'}
                color={COLORS.accentColor}
                size={25}
                backgroundColor={COLORS.primaryColor}
                onPress={submitFn}></Icon.Button>
            ),
          };
        }}
      />
    </AdminStack.Navigator>
  );
}

export default AdminStackScreen;
