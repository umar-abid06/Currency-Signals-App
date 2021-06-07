import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeStackScreen from './HomeStackScreen';
import DetailsStackScreen from './DetailsStackScreen';
import AdminStackScreen from './AdminStackScreen';
import DrawerContent from '../components/DrawerContent';
import RootStackScreen from './RootStackScreen';

const Drawer = createDrawerNavigator();

function MainNavigator() {
  const goAuth = false;
  return (
    <NavigationContainer>
      {goAuth ? (
        <RootStackScreen />
      ) : (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home Page" component={HomeStackScreen} />
          <Drawer.Screen name="Admin Page" component={AdminStackScreen} />
          <Drawer.Screen name="Details Page" component={DetailsStackScreen} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

export default MainNavigator;
