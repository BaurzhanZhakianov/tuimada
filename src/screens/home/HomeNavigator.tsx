import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeParamList} from '../../types/paramLists';
import HomeScreen from './HomeScreen';
import SettingsIcon from '../../components/icons/SettingsIcon';
import colors from '../../constants/colors';
import GasStationMapScreen from './GasStationMapScreen';
import ArrowLeftIcon from '../../components/icons/ArrowLeftIcon';
import {TouchableOpacity} from 'react-native';
import RefuelScreen from './RefuelScreen';

const Stack = createNativeStackNavigator<HomeParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="HomeScreen"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: 'Главная',
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 30,
          },
          headerRight: () => <SettingsIcon color={colors.raisinBlack} />,
          contentStyle: {
            backgroundColor: colors.white,
          },
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="GasStationMapScreen"
        options={({navigation}) => ({
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: 'Карта заправок',
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 18,
          },
          headerTitleAlign: 'center',
          animation: 'slide_from_right',
          headerLeft: ({canGoBack}) => (
            <TouchableOpacity
              onPress={() => {
                if (canGoBack) {
                  navigation.goBack();
                }
              }}>
              <ArrowLeftIcon />
            </TouchableOpacity>
          ),
          contentStyle: {
            backgroundColor: colors.white,
          },
        })}
        component={GasStationMapScreen}
      />
      <Stack.Screen
        name={'RefuelScreen'}
        component={RefuelScreen}
        options={{headerShown: false, animation: 'fade'}}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
