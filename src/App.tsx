import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './pages/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  const store = {
    counter: 0,
    increment: () => {
      store.counter += 1;
    },
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
