import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {HomePage} from './app/pages/home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {DetailPage} from './app/pages/detail';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const options: NativeStackNavigationOptions = {
    statusBarAnimation: 'fade',
    statusBarTranslucent: true,
    statusBarStyle: 'dark',
    statusBarColor: 'transparent',
    animation: 'slide_from_right',
    // headerShown: false,
  };
  function readyInit() {
    SplashScreen.hide();
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer onReady={readyInit}>
        <Stack.Navigator initialRouteName={'home'} screenOptions={options}>
          <Stack.Screen name={'home'} component={HomePage} />
          <Stack.Screen name={'detail'} component={DetailPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
