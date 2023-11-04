import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from 'expo-font';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ContextProvider} from './src/context/context';
import TabView from './src/screens/TabView';
import HouseDetails from './src/screens/HouseDetails/HouseDetails';
import FlashMessage from "react-native-flash-message";

const Stack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="TabView">
        <Stack.Screen name="TabView" component={TabView} />
        <Stack.Screen name="HouseDetails" component={HouseDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  const [fontsLoaded] = useFonts({
  'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
  'Poppins-Light': require('./src/assets/fonts/Poppins-Light.ttf'),
  'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
  'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
 
});
  return (
    <ContextProvider>
      <AppContainer />
      <FlashMessage position="top" />
    </ContextProvider>
  );
};

export default App;






