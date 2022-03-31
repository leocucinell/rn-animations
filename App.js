import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import SquareToCircle from './screens/SquareToCircle';
import SpinOnTap from './screens/SpinOnTap';
import ShakeOnTap from './screens/ShakeOnTap';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Square" component={SquareToCircle} />
        <Stack.Screen name="Spin" component={SpinOnTap} />
        <Stack.Screen name="Shake" component={ShakeOnTap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
