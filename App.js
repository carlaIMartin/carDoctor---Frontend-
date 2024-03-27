import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Scan from './src/screens/ScanScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CategoriesScreen from './src/screens/CategoriesScreen';

const Tab = createBottomTabNavigator()

const App= () => {
  const {
    scanTitle
} = styles;
  return (
    <NavigationContainer>
      
      <Tab.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      // Other screen options...
    }}
  >
        <Tab.Screen style={[scanTitle]} name="Scan" component={Scan} />
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        {/* Add more Tab.Screen components for additional tabs */}
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up all screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  scanTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});

export default App;