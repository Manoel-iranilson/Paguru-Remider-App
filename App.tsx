/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {

  StatusBar,
  View,

} from 'react-native';
import Toast from 'react-native-toast-message';
import ContextProvider from './src/contexts/reminder';
import Routes from './src/routes/routes';


const App = () => {

  return (
    <NavigationContainer>
      <StatusBar />
      <ContextProvider>
        <Routes />
      </ContextProvider>
      <Toast />
    </NavigationContainer>
  );
};


export default App;
