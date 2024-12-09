import React from 'react';
import { Frame } from '@nativescript/core';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RoomsScreen from './screens/RoomsScreen';
import AboutScreen from './screens/AboutScreen';
import GuideScreen from './screens/GuideScreen';
import ContactScreen from './screens/ContactScreen';

const Stack = createStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1e3a8a', // blue-900
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Çeşmeli Hotel' }} 
        />
        <Stack.Screen 
          name="Rooms" 
          component={RoomsScreen} 
          options={{ title: 'Odalarımız' }} 
        />
        <Stack.Screen 
          name="About" 
          component={AboutScreen} 
          options={{ title: 'Hakkımızda' }} 
        />
        <Stack.Screen 
          name="Guide" 
          component={GuideScreen} 
          options={{ title: 'Bursa Rehberi' }} 
        />
        <Stack.Screen 
          name="Contact" 
          component={ContactScreen} 
          options={{ title: 'İletişim' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}