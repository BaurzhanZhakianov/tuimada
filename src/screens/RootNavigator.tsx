import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import colors from '../constants/colors';
import {RootParamList} from '../types/paramLists';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator<RootParamList>();

const RootNavigator = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </>
  );
};

export default RootNavigator;
