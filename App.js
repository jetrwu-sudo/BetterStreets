import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import ReportIssueScreen from './screens/ReportIssueScreen';
import IssueDetailsScreen from './screens/IssueDetailsScreen'; // Add this once converted

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="ReportIssueScreen"
          component={ReportIssueScreen}
          options={{ title: 'Report Issue' }}
        />
        <Stack.Screen
          name="IssueDetailsScreen"
          component={IssueDetailsScreen}
          options={{ title: 'Issue Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
