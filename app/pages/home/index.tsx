import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {DetailPage} from '@pages/detail';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome6';
import {RouteProp} from '@react-navigation/core';

const Tab = createBottomTabNavigator();
const iconMap: {[name: string]: {focused: string; normal: string}} = {
  home1: {
    focused: 'house',
    normal: 'house',
  },
  home2: {
    focused: 'user',
    normal: 'user',
  },
};
const screenOptions = ({route}: {route: RouteProp<any>}) =>
  ({
    tabBarIcon: ({focused, color, size}) => {
      let iconName = iconMap[route.name][focused ? 'focused' : 'normal'];
      return <Icon name={iconName} size={20} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  } as BottomTabNavigationOptions);
function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name={'home2'} component={DetailPage} />
      <Tab.Screen name={'home1'} component={DetailPage} />
    </Tab.Navigator>
  );
}
export {HomeTabs};
