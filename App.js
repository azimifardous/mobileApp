import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Trebuc MS': require('./assets/fonts/trebuc.ttf'),
    'Trebuc MS Italic': require('./assets/fonts/Trebuchet-MS-Italic.ttf'),
    'Trebuc Bold': require('./assets/fonts/trebuc-bold.ttf'),
  });

  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Trebuc MS',
          fontSize: 20,
        }
      }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Directory" component={StaffDirectory} />
        <Stack.Screen name="Profile" component={StaffProfile} />
        <Stack.Screen name="HR Requests" component={HRRequests} />
        <Stack.Screen name="Intranet" component={Intranet} /> */}
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
