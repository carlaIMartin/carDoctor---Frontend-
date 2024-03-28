import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';


const categories = ['Engine', 'Sensors', 'ECU', 'Cluster', 'Noxe', 'Fashion', 'Tech', 'Travel', 'Food', 'Sports', 'Music', 'Movies', 'ceva'];

const CategoriesScreen = ( {navigation} ) => {

  const handlePress = async (category) => {
    console.log(`You clicked on ${category}`);
    // navigation.navigate('Results');
    // Handle the press
    try {
      const responseCategory = await fetch(`http://192.168.68.1:8080/codeType/${category}`);
      const data = await responseCategory.json();
      console.log(data);
      // navigation.navigate('Results', { data });
    } catch (error) {
      console.error('There was an error fetching the data:', error);
      // Handle the error (e.g., show an error message)
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => handlePress(category)}
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
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CategoriesScreen;