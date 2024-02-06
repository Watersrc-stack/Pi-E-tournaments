// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screen/LoginScreen';
import GameSelectorScreen from './Screen/GameSelectionScreen';
import RewardsScreen from './Screen/RewardsScreen';
import SettingsScreen from './Screen/SettingsScreen';
import SpinWheel from './Screen/SpinScreen';
import TournamentScreen from './Screen/TournamentScreen';
import InfoScreen from './Screen/InfoScreen';
import SignUpScreen from './Screen/Signup';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name=" " component={LoginScreen} />
        <Stack.Screen name="GameSelection" component={GameSelectorScreen} />
        <Stack.Screen name="Spin" component={SpinWheel} />
        <Stack.Screen name="Rewards" component={RewardsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Tournament" component={TournamentScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
