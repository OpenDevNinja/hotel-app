import React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HotelCard from '../components/HotelCard';

const HotelScreen = () => {
  const navigation = useNavigation();

  const hotels = [
    {
      id: '1',
      name: "Sheraton Hanoi Hotel",
      price: "85.00",
      rating: "4.5",
      reviews: "2,290",
      image: "https://static9.depositphotos.com/1086013/1149/i/950/depositphotos_11497565-stock-photo-house-interior.jpg",
      gallery: [
        "https://deavita.fr/wp-content/uploads/2015/07/salon-design-canap%C3%A9s-nor-blanc-fauteuils-ronds-statuette-lampes-tripode-terrasse.jpeg",
        "https://i.pinimg.com/originals/29/68/2c/29682cb707c4e76477894b0d5dc9bcd4.jpg",
        "https://img.freepik.com/photos-premium/design-interieur-luxe-dans-salon-villas-piscine_41487-373.jpg",
      ],
      amenities: ['wifi', 'car', 'wine'],
      location: "123 Main Street, Hanoi, Vietnam",
      checkIn: "May 11, 2020",
      checkOut: "May 15, 2020",
    },
    {
      id: '2',
      name: "Aston Hotel Room",
      price: "85.00",
      rating: "4.5",
      reviews: "2,290",
      image: "https://resize.elle.fr/original/var/plain_site/storage/images/deco/reportages/visites-maisons/les-villas-des-stars-vont-vous-laisser-sans-voix/76876466-7-fre-FR/Decouvrez-les-villas-des-stars-entre-luxe-et-demesure.jpg",
      gallery: [
        "https://deavita.fr/wp-content/uploads/2015/07/salon-design-canap%C3%A9s-nor-blanc-fauteuils-ronds-statuette-lampes-tripode-terrasse.jpeg",
        "https://i.pinimg.com/originals/29/68/2c/29682cb707c4e76477894b0d5dc9bcd4.jpg",
        "https://img.freepik.com/photos-premium/design-interieur-luxe-dans-salon-villas-piscine_41487-373.jpg",
      ],
      amenities: ['wifi', 'car', 'wine'],
      location: "456 Elm Street, Hanoi, Vietnam",
      checkIn: "May 12, 2020",
      checkOut: "May 16, 2020",
    },
    {
      id: '3',
      name: "Paya Antoliana Hotel",
      price: "85",
      rating: "4.5",
      reviews: "987",
      image: "https://static.vecteezy.com/ti/photos-gratuite/p1/33879689-luxe-vivant-piece-avec-nager-piscine-vue-de-le-terrasse-interieur-attrayant-retraite-contemporain-residence-luxe-villa-avec-grand-nager-piscine-ai-genere-gratuit-photo.jpg",
      gallery: [
        "https://deavita.fr/wp-content/uploads/2015/07/salon-design-canap%C3%A9s-nor-blanc-fauteuils-ronds-statuette-lampes-tripode-terrasse.jpeg",
        "https://i.pinimg.com/originals/29/68/2c/29682cb707c4e76477894b0d5dc9bcd4.jpg",
        "https://img.freepik.com/photos-premium/design-interieur-luxe-dans-salon-villas-piscine_41487-373.jpg",
      ],
      amenities: ['wifi', 'car', 'wine'],
      location: "789 Oak Street, Hanoi, Vietnam",
      checkIn: "May 13, 2020",
      checkOut: "May 17, 2020",
    }
  ];

  const renderItem = ({ item }) => (
    <HotelCard
      name={item.name}
      price={item.price}
      rating={item.rating}
      reviews={item.reviews}
      image={item.image}
      onPress={() => navigation.navigate('Detail', item)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={hotels}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 2,
  },
});

export default HotelScreen;