import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileParamList} from '../../types/paramLists';
import ProfileScreen from './ProfileScreen';

const Stack = createNativeStackNavigator<ProfileParamList>();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="ProfileScreen"
        options={{
          headerShown: false,
        }}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
