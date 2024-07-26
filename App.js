import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './screens/StartScreen';
import LoginScreen from './screens/Login';
import SignScreen from './screens/SignUp';
import ProfilePictureSelection from './screens/ProfilePictureSelection';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" 
        component={StartScreen} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignScreen} />
        <Stack.Screen name="Profile Picture Selection" 
        component={ProfilePictureSelection} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
