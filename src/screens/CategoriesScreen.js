import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';

const categories = ['Engine', 'Sensors', 'ECU', 'Comfort Module', 'Noxe', 'Fashion', 'Tech', 'Travel', 'Food', 'Sports', 'Music', 'Movies', 'ceva'];

const CategoriesScreen = () => {

  const handlePress = (category) => {
    console.log(`You clicked on ${category}`);
    // Handle the press
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