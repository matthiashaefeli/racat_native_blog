import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen'
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{ headerTitle: 'Blogs' }}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={{ headerTitle: 'Show' }}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{ headerTitle: 'Create' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider>
      <MyStack />
    </Provider>
  )
}
