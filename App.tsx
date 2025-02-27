import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import FlightTrackingScreen from './src/screens/FlightTrackingScreen';
import AirportMapScreen from './src/screens/AirportMapScreen';
import GateInfoScreen from './src/screens/GateInfoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{ title: 'Airport Navigator' }}
            />
            <Stack.Screen 
              name="FlightTracking" 
              component={FlightTrackingScreen} 
              options={{ title: 'Flight Tracking' }}
            />
            <Stack.Screen 
              name="AirportMap" 
              component={AirportMapScreen} 
              options={{ title: 'Airport Map' }}
            />
            <Stack.Screen 
              name="GateInfo" 
              component={GateInfoScreen} 
              options={{ title: 'Gate Information' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
