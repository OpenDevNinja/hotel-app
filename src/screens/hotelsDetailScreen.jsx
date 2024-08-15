import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';
import Back from '../components/Back';
import Icon from 'react-native-vector-icons/MaterialIcons';
const { width: screenWidth } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';

const HotelsDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { name, price, rating, reviews, image, gallery, amenities, location, checkIn, checkOut } = route.params;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);


  const carouselImages = [image, ...gallery];



  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollViewRef.current) {
        const nextIndex = (activeIndex + 1) % carouselImages.length;
        scrollViewRef.current.scrollTo({ x: nextIndex * screenWidth, animated: true });
        setActiveIndex(nextIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const index = Math.round(contentOffset.x / screenWidth);
    setActiveIndex(index);
  };


  return (
    <ScrollView style={styles.container}>

    
      <View style={styles.carouselContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {
            carouselImages.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={styles.carouselImage}
              />
            ))}
        </ScrollView>
        <View style={styles.headerBackground}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={28} color="#FFF" />
            </TouchableOpacity>
            <Icon name="favorite-border" size={28} color="#FFF" />
          </View>
        </View>
     {/*    < View style={styles.pagination} >
          {
            carouselImages.map((_, index) => (
              <View
                key={index}
                style={
                  [
                    styles.paginationDot,
                    index === activeIndex ? styles.paginationDotActive : null,
                  ]}
              />
            ))
          }
        </View> */}
      </View>

      <View style={styles.content}>

        <View style={styles.hotelInfo}>
          <Text style={styles.hotelName}>{name}</Text>
          <Text style={styles.price}>${price}<Text style={styles.perNight}> /Nuit</Text></Text>
        </View>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Ionicons name="star" size={16} color="#FFD700" />
          <Ionicons name="star" size={16} color="#FFD700" />
          <Ionicons name="star" size={16} color="#FFD700" />
          <Ionicons name="star-half" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Aménagements</Text>
          <View style={styles.amenitiesContainer}>
            <View style={styles.amenityItem}>
              <Ionicons name="barbell-outline" size={24} color={Colors.color_blue} />
              <Text style={styles.amenityText}>Gym</Text>
            </View>
            <View style={styles.amenityItem}>
              <Ionicons name="water-outline" size={24} color={Colors.color_blue} />
              <Text style={styles.amenityText}>Piscine</Text>
            </View>
            <View style={styles.amenityItem}>
              <Ionicons name="restaurant-outline" size={24} color={Colors.color_blue} />
              <Text style={styles.amenityText}>Restaurant</Text>
            </View>
            <View style={styles.amenityItem}>
              <Ionicons name="car-outline" size={24} color={Colors.color_blue} />
              <Text style={styles.amenityText}>Parking</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>Voir tous les équipements</Text>
            <Ionicons name="chevron-forward" size={24} color={Colors.color_white}
              style={{ backgroundColor: Colors.color_blue, padding: 5, borderRadius: 5 }} />
          </TouchableOpacity>
        </View>











        {['Alimentation et boissons', 'Services', "Règles de l'hôtel", 'Contactez-nous'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.infoButton}>
            <Text style={styles.infoButtonText}>{item}</Text>
            <Ionicons name="chevron-forward" size={24} color="#000" />
          </TouchableOpacity>
        ))}

        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceText}>$450</Text>
          <Text style={styles.totalPriceNights}>4 Nuits</Text>
        </View>

        <TouchableOpacity style={styles.chooseRoomsButton}>
          <Text style={styles.chooseRoomsButtonText}>Résever</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  carouselContainer: {
    height: 250,
    position: 'relative',
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Noir transparent
    paddingTop: 20, // Ajustez cette valeur selon vos besoins
    paddingBottom: 10,
},
header: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
    paddingHorizontal: 16,
},
  carouselImage: {
    width: screenWidth,
    height: 250,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  hotelInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hotelName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.color_blue
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.color_rouge,
  },
  perNight: {
    fontSize: 14,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  amenitiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amenityItem: {
    alignItems: 'center',
  },
  amenityText: {
    marginTop: 5,
    fontSize: 12,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  seeAllText: {
    color: Colors.color_blue,
    marginRight: 5,
    fontWeight: "800",
    fontSize: 20,
    marginTop: 10,


  },
  dateContainer: {
    marginBottom: 10,
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  changeButton: {
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: Colors.color_blue,
  },
  changeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  locationText: {
    fontSize: 16,
    color: '#333',
  },
  infoButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  infoButtonText: {
    fontSize: 16,
    color: '#333',
  },
  totalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  totalPriceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.color_blue,
  },
  totalPriceNights: {
    fontSize: 16,
    color: '#666',
  },
  chooseRoomsButton: {
    backgroundColor: Colors.color_blue,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  chooseRoomsButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HotelsDetailScreen;