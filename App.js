import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message'; 
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import ReportIssueScreen from './screens/ReportIssueScreen';
import IssueDetailsScreen from './screens/IssueDetailsScreen';
import SelectLocationScreen from './screens/SelectLocationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ title: 'Sign Up' }} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }} />
          <Stack.Screen
            name="ReportIssueScreen"
            component={ReportIssueScreen}
            options={{
              title: 'Report Issue',
              cardStyleInterpolator: ({ current, layouts }) => ({
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [layouts.screen.width, 0],
                      }),
                    },
                  ],
                },
              }),
            }}
          />
          <Stack.Screen
            name="IssueDetailsScreen"
            component={IssueDetailsScreen}
            options={{
              title: 'Issue Details',
              cardStyleInterpolator: ({ current }) => ({
                cardStyle: {
                  opacity: current.progress,
                },
              }),
            }}
          />
          <Stack.Screen
            name="SelectLocationScreen"
            component={SelectLocationScreen}
            options={{ title: 'Select Location' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast /> 
    </>
  );
}
