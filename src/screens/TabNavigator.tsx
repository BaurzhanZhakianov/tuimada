import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../constants/colors';
import HomeNavigator from './home/HomeNavigator';
import NewsNavigator from './news/NewsNavigator';
import HistoryNavigator from './history/HistoryNavigator';
import StoreNavigator from './store/StoreNavigator';
import ProfileNavigator from './profile/ProfileNavigator';

export const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 10,
          // fontFamily: 'Montserrat',
          fontWeight: '500',
          lineHeight: 12,
          letterSpacing: -0.03,
          textAlign: 'center',
        },
        headerShown: false,
        tabBarActiveTintColor: colors.castletonGreen,
        tabBarInactiveTintColor: colors.raisinBlack,
      }}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Главная',
        }}
      />
      <Tab.Screen
        name="NewsNavigator"
        component={NewsNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Новости',
        }}
      />
      <Tab.Screen
        name="HistoryNavigator"
        component={HistoryNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'История',
        }}
      />
      <Tab.Screen
        name="StoreNavigator"
        component={StoreNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Магазин',
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Профиль',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
