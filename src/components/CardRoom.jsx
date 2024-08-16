// CardRoom.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

const CardRoom = ({ room }) => {
    const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Image source={{ uri: room.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{room.title}</Text>
        <Text style={styles.description}>{room.beds} • {room.size}</Text>
        <Text style={styles.amenities}>{room.amenities}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.price}>${room.price}<Text style={styles.nightText}>/{room.nbRoom} Nuits</Text></Text>
          <TouchableOpacity 
          onPress={() => navigation.navigate("Periode")}
          style={styles.button}>
            <Text style={styles.buttonText}>Choisir la chambre</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 20,
   
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  details: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.color_blue,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  amenities: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.color_jaune,
  },
  nightText: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  button: {
    backgroundColor: Colors.color_blue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default CardRoom;
