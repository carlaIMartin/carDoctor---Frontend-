import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';

const categories = ['Engine', 'Sensors', 'ECU', 'Cluster', 'Noxe', 'Fashion', 'Tech', 'Travel', 'Food', 'Sports', 'Music', 'Movies', 'ceva'];
const dataWithProblems = [];
const categoriesWithProblems = [];
// const buttonColor = (data, category) => {
//   if (data.problem === true && data.type === category) {
//     return styles.errorButton;
//   }
//   else
//     return styles.button;
// }


const CategoriesScreen = ({ navigation }) => {
  const handleCategoryPress = async (category) => {
    console.log(`You clicked on ${category}`);
    try {
      const responseCategory = await fetch(`http://192.168.68.1:8080/codeType/${category}`);
      const data = await responseCategory.json();
      
      // Reset dataWithProblems for the current category press
      dataWithProblems.length = 0;

      // Iterate over each item in the response data
      data.forEach(item => {
        // Check if the command is one of the specified commands
        if (["EGR_ERROR", "FUEL_INJECT_TIMING", "RPM"].includes(item.command)) {
          // If it is, and the problem flag is true, add it to the dataWithProblems array
          if (item.problem) {
            dataWithProblems.push(item);
          }
        }
      });

      // Log dataWithProblems if it has any entries
      if (dataWithProblems.length > 0) {
        console.log("DATA THAT HAS PROBLEMS:", dataWithProblems);
      }

      navigation.navigate('ResultsScreen', { data });
    } catch (error) {
      console.error('There was an error fetching the data:', error);
    }
  };

  

  return (
    
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => handleCategoryPress(category)}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    margin: 10,
    width: '80%',
    alignItems: 'center',
  },
  errorButton: {
    backgroundColor: '#6b290f',
    padding: 15,
    borderRadius: 5,
    margin: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CategoriesScreen;