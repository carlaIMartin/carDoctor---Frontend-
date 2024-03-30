import React, {useState} from 'react';
import { StyleSheet, View, Button, ActivityIndicator } from 'react-native';
import useScanCodes from '../hooks/useScanCodes';

const Scan = ({ navigation }) => {
  const {result, handleScanCodeSubmit, isSubmitting, hasBeenSubmitted } = useScanCodes();

  const[scanClicked, setScanClicked] = useState(false);
   

  const handlePress = async () => {
    console.log('Button pressed');
    const responseCategory = await handleScanCodeSubmit(/* code data here */);
    navigation.navigate('CategoriesScreen');
    

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
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  buttonContainer: {
    width: '60%', 
    height: 200,
  },
});

export default Scan;