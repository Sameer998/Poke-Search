import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './src/Landing'
import Search from './src/Search'

import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Landing} options={{headerShown:false}} />
      <Stack.Screen name="Search" component={Search} />
     
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}