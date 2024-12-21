import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message'; 
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/Homescreen';
import ReportIssueScreen from './screens/ReportIssueScreen';
import IssueDetailsScreen from './screens/IssueDetailsScreen';
import SelectLocationScreen from './screens/SelectLocationScreen';
import MapScreen from './screens/MapScreen'; // Suggested screen
import ProfileScreen from './screens/ProfileScreen'; // Suggested screen
import UpdatesScreen from './screens/UpdatesScreen'; // Suggested screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerStyle: { backgroundColor: '#1A237E' }, headerTintColor: '#FFFFFF' }}>
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
          <Stack.Screen name="MapScreen" component={MapScreen} options={{ title: 'Map' }} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Profile' }} />
          <Stack.Screen name="UpdatesScreen" component={UpdatesScreen} options={{ title: 'Updates' }} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}