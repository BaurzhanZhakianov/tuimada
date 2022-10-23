import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StoreParamList} from '../../types/paramLists';
import StoreScreen from './StoreScreen';

const Stack = createNativeStackNavigator<StoreParamList>();

const StoreNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="StoreScreen"
        options={{
          headerShown: false,
        }}
        component={StoreScreen}
      />
    </Stack.Navigator>
  );
};

export default StoreNavigator;
