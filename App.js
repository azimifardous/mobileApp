import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import { useFonts } from 'expo-font';
import StaffDirectoryScreen from './screens/StaffDirectory';
import HrScreen from './screens/HrScreen'
import Intranet from './screens/IntranetScreen';
import CustomTabBar from './components/CustomTabBar';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

/**
 * Starting entrypoint for mobile application (initialise variables here).
 * @return {NavigationContainer}
 */
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
      <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Directory" component={StaffDirectoryScreen} />
        <Tab.Screen name="HR" component={HrScreen} />
        <Tab.Screen name="Intranet" component={Intranet} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarButton: () => null }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
