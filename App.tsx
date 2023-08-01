import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {LightTheme} from '@themes/light';
import {pages} from '@routes/pages';
import {init, navRef} from '@utils/initApp';
import {linking} from '@routes/linking';

init();

const Stack = createNativeStackNavigator();
const options: NativeStackNavigationOptions = {
  statusBarAnimation: 'fade',
  statusBarTranslucent: true,
  statusBarStyle: 'dark',
  statusBarColor: 'transparent',
  // headerShown: false,
};
function readyInit() {
  SplashScreen.hide();
}

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        onReady={readyInit}
        theme={LightTheme}
        ref={navRef}
        linking={linking}>
        <Stack.Navigator initialRouteName={'home'} screenOptions={options}>
          {pages.map(page => {
            return (
              <Stack.Screen
                name={page.name}
                options={page.options}
                component={page.component}
                key={page.name}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
