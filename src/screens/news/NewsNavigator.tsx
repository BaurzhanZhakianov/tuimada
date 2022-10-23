import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NewsParamList} from '../../types/paramLists';
import NewsScreen from './NewsScreen';

const Stack = createNativeStackNavigator<NewsParamList>();

const NewsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="NewsScreen"
        options={{
          headerShown: false,
        }}
        component={NewsScreen}
      />
    </Stack.Navigator>
  );
};

export default NewsNavigator;
