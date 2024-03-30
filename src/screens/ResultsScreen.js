import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ResultsScreen = ({ route }) => {
  // Accessing the data passed through the navigation route
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.itemText}>ID: {item.id}</Text>
            <Text style={styles.itemText}>Name: {item.command}</Text>
            <Text style={styles.itemText}>Category: {item.category}</Text>
            <Text style={styles.itemText}>Description: {item.description}</Text>
            <Text style={styles.itemText}>Response Code: {item.response_code}</Text>
          </View>
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
    padding: 20,
  },
  itemContainer: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    marginVertical: 10,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ResultsScreen;
