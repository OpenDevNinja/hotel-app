import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MenuHeader = () => {
  const navigation = useNavigation(); // Initialisation de la navigation
  const goToDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={goToDrawer}>
        <Image 
          source={require('../assets/menu.png')} 
          style={styles.menuImage}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="chatbubble-outline" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={28} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:20,
    paddingVertical:10,
    backgroundColor: '#fff',
    marginBottom :10
  },
  menuImage: {
    width:  40,
    height: 40,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
});

export default MenuHeader;