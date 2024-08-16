import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, { Marker } from 'react-native-maps';
import StatusBarSeparator from '../components/StatusBarSeparator';
import Colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

const SortByMapScreen = () => {
    const [hotelName, setHotelName] = useState('');
    const [dates, setDates] = useState('');
    const [guests, setGuests] = useState('');
    const [hotels, setHotels] = useState([
        { id: 1, name: "Hotel A", coordinate: { latitude: 40.7128, longitude: -74.0060 } },
        { id: 2, name: "Hotel B", coordinate: { latitude: 40.7580, longitude: -73.9855 } },
        { id: 3, name: "Hotel C", coordinate: { latitude: 40.7589, longitude: -73.9851 } },
    ]);
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };
    const handleSearch = () => {
        navigation.navigate('Search')
        // Ici, vous implémenteriez la logique de recherche réelle
        console.log(`Recherche d'hôtel: ${hotelName}, Dates: ${dates}, Invités: ${guests}`);
    };

    return (
        <>
        <StatusBarSeparator/>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                    onPress={handleGoBack} 
                    >
                        <Icon name="arrow-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Recherche d'hôtel</Text>
                    <View style={styles.placeholder} />
                </View>

                <View style={styles.searchContainer}>
                    <View style={styles.inputContainer}>
                        <Icon name="search" size={20} color="#888" style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Nom de l'hôtel"
                            placeholderTextColor="#888"
                            value={hotelName}
                            onChangeText={setHotelName}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="calendar" size={20} color="#888" style={styles.inputIcon} />
                        <TextInput
                            type="date"
                            style={styles.input}
                            placeholder="Dates"
                            placeholderTextColor="#888"
                            value={dates}
                            onChangeText={setDates}

                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="people" size={20} color="#888" style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Nombre d'invités"
                            placeholderTextColor="#888"
                            value={guests}
                            onChangeText={setGuests}
                        />
                    </View>
                    <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                        <Text style={styles.searchButtonText}>Rechercher</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 40.7128,
                            longitude: -74.0060,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        {hotels.map((hotel) => (
                            <Marker
                                key={hotel.id}
                                coordinate={hotel.coordinate}
                                title={hotel.name}
                            />
                        ))}
                    </MapView>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    placeholder: {
        width: 24,
    },
    searchContainer: {
        padding: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        marginBottom: 12,
        paddingHorizontal: 12,
    },
    inputIcon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
    },
    searchButton: {
        backgroundColor: Colors.color_blue,
        borderRadius: 8,
        padding: 12,
        alignItems: 'center',
    },
    searchButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    mapContainer: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default SortByMapScreen;
