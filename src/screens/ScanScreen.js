import React from 'react';
import { StyleSheet, View, Button, ActivityIndicator } from 'react-native';
import useScanCodes from '../hooks/useScanCodes';

const Scan = ({ navigation }) => {
  const { handleScanCodeSubmit, isSubmitting } = useScanCodes();

  const handlePress = async () => {
    console.log('Button pressed');
    await handleScanCodeSubmit(/* You need to pass the actual code data here */);
    navigation.navigate('Categories');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
      {isSubmitting ? (
          <ActivityIndicator size="large" color="#841584" />
        ) : (
          <Button
            onPress={handlePress}
            title="SCAN NOW"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up all screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  buttonContainer: {
    width: '60%', // Width of the button
    height: 200, // Height of the button for a big button
  },
});

export default Scan;