import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import Me from '../screens/Me';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='FeedNavigator' component={FeedNavigator} options={{ headerShown: false, tabBarLabel: 'Overzicht', tabBarIcon: ({ color, size }) => (<Ionicons name='list' color={color} size={size} />)}} />
      <Tab.Screen name='Me' component={Me} options={{ tabBarLabel: 'Mijn profiel', tabBarIcon: ({ color, size }) => (<Ionicons name='person' color={color} size={size} />)}} />
    </Tab.Navigator>
  );
}

const FeedStack = createNativeStackNavigator();

export function FeedNavigator() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name='Feed' component={Feed} />
      <FeedStack.Screen name='UserDetail' component={UserDetail} options={({ route }) => ({ title: `${route.params.user.name.first.toUpperCase()} ${route.params.user.name.last.toUpperCase()}` })} />
    </FeedStack.Navigator>
  );
}

const RootStack = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name='Tabs' component={TabNavigator} options={{ headerShown: false }} />
        <RootStack.Screen 
          name='Settings' 
          component={Settings} 
          options={{ presentation: 'modal' }}
        />      
      </RootStack.Navigator>
    </NavigationContainer>
  )
}