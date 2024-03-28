import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Scan from './src/screens/ScanScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CategoriesScreen from './src/screens/CategoriesScreen';
import useScanCodes
 from './src/hooks/useScanCodes';
// import ResultsScreen from './src/screens/ResultsScreen';
const Tab = createBottomTabNavigator()

const App= () => {
  const {
    container,
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
        {/* <Tab.Screen name="Results" component={ ResultsScreen} /> */}
        {/* Add more Tab.Screen components for additional tabs */}
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
  if (loading) {
    return (
      <View style={styles.container} >
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    )
  }
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