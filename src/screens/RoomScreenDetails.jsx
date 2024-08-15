import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import StatusBarSeparator from '../components/StatusBarSeparator';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';
const screenWidth = Dimensions.get('window').width;

const RoomScreenDetails = ({ route, navigation }) => {
    const {
        title = 'Room',
        price = '0',
        rating = '0',
        beds = 0,
        baths = 0,
        dimention = 0,
        image = '',
        gallery = [],
        location = '',
        description = "",
    } = route.params?.property || {};

    const [activeIndex, setActiveIndex] = useState(0);
    const scrollViewRef = useRef(null);

    const allImages = [image, ...gallery];

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollViewRef.current) {
                const nextIndex = (activeIndex + 1) % allImages.length;
                scrollViewRef.current.scrollTo({ x: nextIndex * screenWidth, animated: true });
                setActiveIndex(nextIndex);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [activeIndex, allImages.length]);

    const handleScroll = (event) => {
        const contentOffset = event.nativeEvent.contentOffset;
        const index = Math.round(contentOffset.x / screenWidth);
        setActiveIndex(index);
    };

    return (
        <SafeAreaView style={styles.container}>
            
            <ScrollView>
                <View style={styles.carouselContainer}>
                    <ScrollView
                        ref={scrollViewRef}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={handleScroll}
                        scrollEventThrottle={16}
                    >
                        {allImages.map((img, index) => (
                            <Image
                                key={index}
                                source={{ uri: img }}
                                style={styles.image}
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
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>

                    <View style={styles.infoContainer}>
                        <View style={styles.infoLeft}>
                            <View style={styles.ratingContainer}>
                                <Ionicons name="star" size={16} color={Colors.color_jaune} />
                                <Text style={styles.rating}>{rating} • avis</Text>
                            </View>
                            <View style={{ flexDirection: "row", }}>
                                <Text style={[styles.price, { color: Colors.color_rouge }]}>${price}   </Text>
                                <Text style={[styles.price, { paddingLeft: 0 }]}>/nuit </Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.bookButton}>
                            <Text style={styles.bookButtonText}>Réserver </Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.amenities}>
                        <View style={styles.amenityItem}>
                            <Icons name="bed-outline" size={20} color="#000" />
                            <Text style={styles.amenityText}>{beds} beds</Text>
                        </View>
                        <View style={styles.amenityItem}>
                            <FontAwesome name="bathtub" size={20} color="#000" />
                            <Text style={styles.amenityText}>{baths} bath</Text>
                        </View>
                        <View style={styles.amenityItem}>
                            <FontAwesome6 name="users" size={20} color="#000" />
                            <Text style={styles.amenityText}>{beds + 1} guests</Text>
                        </View>
                        <View style={styles.amenityItem}>
                            <Icon name="aspect-ratio" size={20} color="#000" />
                            <Text style={styles.amenityText}>{dimention} m²</Text>
                        </View>
                    </View>

                    <Text style={styles.detailsTitle}>Details</Text>
                    <Text style={styles.detailsText}>
                        {description}
                    </Text>

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
                            <Text style={styles.seeAllText}>Voir Plus</Text>
                            <Ionicons name="chevron-forward" size={24} color={Colors.color_white}
                                style={{ backgroundColor: Colors.color_blue, padding: 5, borderRadius: 5 }} />
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>

            <View style={styles.chatContainer}>
                <Text style={styles.chatText}>Avez-vous besoin d'aide ?</Text>
                <TouchableOpacity style={styles.chatButton}>
                    <Text style={styles.chatButtonText}>Chat </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    carouselContainer: {
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
    image: {
        width: screenWidth,
        height: 250,
        resizeMode: 'cover',
    },


    content: {
        padding: 16,
    },
    image: {
        width: screenWidth,
        height: 250,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
        color: Colors.color_blue
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    infoLeft: {
        flex: 1,
    },
    ratingContainer: {
        marginBottom: 4,
        flexDirection: "row"
    },
    rating: {
        fontSize: 14,
        color: '#666',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    bookButton: {
        backgroundColor: Colors.color_jaune,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    bookButtonText: {
        color: Colors.color_white,
        fontWeight: 'bold',
        fontSize: 14,
    },
    amenities: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    amenityItem: {
        alignItems: 'center',
    },
    amenityText: {
        fontSize: 12,
        marginTop: 4,
    },
    detailsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    detailsText: {
        color: '#666',
        marginBottom: 16,
        fontSize: 14,
    },
    amenitiesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    amenitiesText: {
        marginLeft: 8,
        fontSize: 14,
    },
    seeAllButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    seeAllButtonText: {
        color: '#007AFF',
        marginRight: 8,
    },
    chatContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
    },
    chatText: {
        fontSize: 14,
    },
    chatButton: {
        backgroundColor: Colors.color_blue,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 20,
    },
    chatButtonText: {
        color: Colors.color_white,
        fontWeight: 'bold',
        fontSize: 15,

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
        fontWeight:"400",
        fontSize :18,
        marginTop:10,
      }
    
});

export default RoomScreenDetails;