import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {DetailPage} from '@pages/detail';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome6';
import {RouteProp} from '@react-navigation/core';
import {pathName} from '@routes/paths';
import {ChatPage} from '@pages/chat';

interface HomeTabConfig {
  name: string;
  focusedIcon: string;
  normalIcon: string;
  label: string;
  component: any;
}
const Tab = createBottomTabNavigator();
const pages: HomeTabConfig[] = [
  {
    name: pathName.homeTabMain,
    focusedIcon: 'house',
    normalIcon: 'house',
    label: '首页',
    component: ChatPage,
  },
  {
    name: pathName.homeTabUser,
    focusedIcon: 'user',
    normalIcon: 'user',
    label: '我的',
    component: DetailPage,
  },
];

const screenOptions = ({route}: {route: RouteProp<any>}) => {
  const page = pages.find(ele => ele.name === route.name);
  return {
    tabBarIcon: ({focused, color, size}) => {
      let iconName = page?.[focused ? 'focusedIcon' : 'normalIcon'];
      return <Icon name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'purple',
    tabBarInactiveTintColor: 'gray',
    tabBarLabel: page?.label,
    headerTitle: page?.label,
  } as BottomTabNavigationOptions;
};

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {pages.map(page => {
        return (
          <Tab.Screen
            name={page.name}
            component={page.component}
            key={page.name}
          />
        );
      })}
    </Tab.Navigator>
  );
}
export {HomeTabs};
