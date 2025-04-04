// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from './screens/home'; 
import GamesList from './screens/gamesList'; 
import Settings from './screens/setting';
import styles from './screens/tabBarStyle';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Games') iconName = 'game-controller';
          else if (route.name === 'Settings') iconName = 'settings';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#283314',
        tabBarInactiveTintColor: 'white',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{tabBarStyle: { display: 'none' },}}/>
      <Tab.Screen name="Games" component={GamesList} />
      <Tab.Screen name="Settings" component={Settings} />

    </Tab.Navigator>
  </NavigationContainer>
  );
}
