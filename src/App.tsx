import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './pages/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Provider} from 'react-redux';
// import store from './app/store';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
