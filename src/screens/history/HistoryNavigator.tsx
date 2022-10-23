import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HistoryParamList} from '../../types/paramLists';
import HistoryScreen from './HistoryScreen';

const Stack = createNativeStackNavigator<HistoryParamList>();

const HistoryNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="HistoryScreen"
        options={{
          headerShown: false,
        }}
        component={HistoryScreen}
      />
    </Stack.Navigator>
  );
};

export default HistoryNavigator;
