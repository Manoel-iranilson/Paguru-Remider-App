import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewTask from '../screens/NewTask';
import SucessTask from '../screens/SucessTask';
import Home from '../screens/Home';

export type RootStackParamsList = {
  Home: undefined;
  NewTask: undefined;
  SucessTask: undefined;
};

export default function Routes() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewTask"
        component={NewTask}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SucessTask"
        component={SucessTask}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
