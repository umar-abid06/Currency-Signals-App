import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

function DetailsStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default DetailsStackScreen;
