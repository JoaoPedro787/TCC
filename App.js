import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/Login';
import SignScreen from './screens/SignUp';
import ProfilePictureSelection from './screens/ProfilePictureSelection';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignScreen} />
        <Stack.Screen name="Profile Picture Selection" component={ProfilePictureSelection} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
