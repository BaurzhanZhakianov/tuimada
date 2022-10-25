import React from 'react';
import 'react-native-reanimated';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/screens/RootNavigator';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'LinearGradient colors and locations props should be arrays of the same length',
]);

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
