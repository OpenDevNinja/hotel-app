import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import StatusBarSeparator from './StatusBarSeparator';

const GoBack = () => {
  const navigation = useNavigation();

  return (

    <>
      <StatusBarSeparator />
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>
    </>

  );
};

const styles = StyleSheet.create({
  goBackButton: {
    padding: 10,
    borderRadius: 20,
  
    
  },
});

export default GoBack;