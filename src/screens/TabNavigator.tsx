import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../constants/colors';
import HomeNavigator from './home/HomeNavigator';
import NewsNavigator from './news/NewsNavigator';
import HistoryNavigator from './history/HistoryNavigator';
import StoreNavigator from './store/StoreNavigator';
import ProfileNavigator from './profile/ProfileNavigator';
import HomeIcon from '../components/icons/HomeIcon';
import NewsIcon from '../components/icons/NewsIcon';
import WalletIcon from '../components/icons/WalletIcon';
import StoreIcon from '../components/icons/StoreIcon';
import ProfileIcon from '../components/icons/ProfileIcon';
import WalletFilledIcon from '../components/icons/WalletFilledIcon';
import NewsFilledIcon from '../components/icons/NewsFilledIcon';
import HomeFilledIcon from '../components/icons/HomeFilledIcon';
import ProfileFilledIcon from '../components/icons/ProfileFilledIcon';
import StoreFilledIcon from '../components/icons/StoreFilledIcon';
import {Text} from 'react-native';

export const Tab = createBottomTabNavigator();

const TabBarLabel = ({focused, text}: any) => (
  <Text style={focused ? {color: colors.raisinBlack} : undefined}>{text}</Text>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: 'Montserrat-Medium',
          fontWeight: '500',
          lineHeight: 12,
          letterSpacing: -0.03,
          marginBottom: 10,
          color: colors.darkGray,
        },
        tabBarStyle: {
          height: 64,
          borderTopColor: colors.brightGray,
          borderTopWidth: 1,
          backgroundColor: colors.white,
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
          tabBarLabel: props => <TabBarLabel text="Главная" {...props} />,
          tabBarIcon: ({color, focused}) =>
            focused ? <HomeFilledIcon /> : <HomeIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="NewsNavigator"
        component={NewsNavigator}
        options={{
          headerShown: false,
          tabBarLabel: props => <TabBarLabel text="Новости" {...props} />,
          tabBarIcon: ({focused, color}) =>
            focused ? <NewsFilledIcon /> : <NewsIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="HistoryNavigator"
        component={HistoryNavigator}
        options={{
          headerShown: false,
          tabBarLabel: props => <TabBarLabel text="История" {...props} />,
          tabBarIcon: ({focused, color}) =>
            focused ? <WalletFilledIcon /> : <WalletIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="StoreNavigator"
        component={StoreNavigator}
        options={{
          headerShown: false,
          tabBarLabel: props => <TabBarLabel text="Магазин" {...props} />,
          tabBarIcon: ({color, focused}) =>
            focused ? <StoreFilledIcon /> : <StoreIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          headerShown: false,
          tabBarLabel: props => <TabBarLabel text="Профиль" {...props} />,
          tabBarIcon: ({color, focused}) =>
            focused ? <ProfileFilledIcon /> : <ProfileIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
