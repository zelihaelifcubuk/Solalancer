import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './pages/Home';
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Provider} from 'react-redux';
// import store from './app/store';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
