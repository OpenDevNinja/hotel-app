import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';

const { width: screenWidth } = Dimensions.get('window');

const HotelsDetailScreen = ({ route }) => {
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
        <ScrollView style={styles.container} >
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
                < View style={styles.pagination} >
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
                </View>
            </View>
            < View style={styles.content} >
                <Text style={styles.hotelName}> {name} </Text>
                < View style={styles.ratingContainer} >
                    <Ionicons name="star" size={18} color="#FFD700" />
                    <Text style={styles.ratingText}> {rating} </Text>
                    < Text style={styles.reviewsText} > ({reviews} reviews)</Text>
                </View>
                < Text style={styles.price} > ${price} <Text style={styles.perNight}> per night < /Text></Text >

                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}> Amenities </Text>
                        < View style={styles.amenitiesContainer} >
                            {
                                amenities.map((icon, index) => (
                                    <View key={index} style={styles.amenityItem} >
                                        <Ionicons name={icon} size={24} color={Colors.color_blue} />
                                    </View>
                                ))
                            }
                        </View>
                    </View>

                    < View style={styles.sectionContainer} >
                        <Text style={styles.sectionTitle}> Booking Dates and Details </Text>
                        < View style={styles.dateContainer} >
                            <Text style={styles.dateText}> Check -in: {checkIn} </Text>
                            < Text style={styles.dateText} > Check - out: {checkOut} </Text>
                        </View>
                        < TouchableOpacity style={styles.changeButton} >
                            <Text style={styles.changeButtonText}> Change </Text>
                        </TouchableOpacity>
                    </View>

                    < View style={styles.sectionContainer} >
                        <Text style={styles.sectionTitle}> Location </Text>
                        < Text style={styles.locationText} > {location} </Text>
                    </View>

                    {
                        ['Food & Drinks', 'Service', 'Hotel Rules', 'Contact us'].map((item, index) => (
                            <TouchableOpacity key={index} style={styles.infoButton} >
                                <Text style={styles.infoButtonText} > {item} </Text>
                                < Ionicons name="chevron-forward" size={24} color={Colors.color_blue} />
                            </TouchableOpacity>
                        ))
                    }

                    <TouchableOpacity style={styles.bookButton}>
                        <Text style={styles.bookButtonText}> Choose Rooms </Text>
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
    hotelImage: {
        width: '100%',
        height: 250,
    },
    content: {
        padding: 20,
    },
    hotelName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    ratingText: {
        marginLeft: 5,
        fontWeight: 'bold',
        fontSize: 18,
    },
    reviewsText: {
        color: '#666',
        marginLeft: 5,
        fontSize: 16,
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.color_blue,
        marginBottom: 20,
    },
    perNight: {
        fontSize: 16,
        color: '#666',
    },
    sectionContainer: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    amenitiesContainer: {
        flexDirection: 'row',
    },
    amenityItem: {
        marginRight: 20,
    },
    descriptionText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
    },
    bookButton: {
        backgroundColor: Colors.color_blue,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    bookButtonText: {
        color: Colors.color_white,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HotelsDetailScreen;