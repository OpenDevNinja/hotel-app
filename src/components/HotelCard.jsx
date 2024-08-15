import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';

const HotelCard = ({ name, price, rating, reviews, image, onPress }) => (
  <TouchableOpacity style={styles.hotelCard} onPress={onPress}>
    <Image source={{ uri: image }} style={styles.hotelImage} />
    <View style={styles.hotelInfo}>
      <Text style={styles.hotelName}>{name}</Text>
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={16} color="#FFD700" />
        <Text style={styles.ratingText}>{rating}</Text>
        <Text style={styles.reviewsText}>({reviews} reviews)</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>${price}</Text>
        <Text style={styles.nightText}>/Mois</Text>
      </View>
    </View>
    <View style={styles.bookButton}>
      <Text style={styles.bookButtonText}>Réserver </Text>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  hotelCard: {
      backgroundColor: '#FFF',
      borderRadius: 8,
      marginBottom: 20,
      overflow: 'hidden',
    },
    hotelImage: {
      width: '100%',
      height: 200,
    },
    hotelInfo: {
      padding: 15,
    },
    hotelName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    ratingText: {
      marginLeft: 5,
      fontWeight: 'bold',
    },
    reviewsText: {
      color: '#666',
      marginLeft: 5,
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'baseline',
    },
    priceText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: Colors.color_blue,
    },
    nightText: {
      color: '#666',
      marginLeft: 2,
    },
    bookButton: {
      position: 'absolute',
      right: 15,
      bottom: 15,
      backgroundColor: Colors.color_blue,
      paddingHorizontal: 15,
      paddingVertical: 8,
      borderRadius: 5,
    },
    bookButtonText :{
      color :Colors.color_white
    }
})

export default HotelCard;