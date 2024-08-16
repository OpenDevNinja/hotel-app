import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Modal, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../components/Button';
import { format } from 'date-fns';
import Colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

const { height: screenHeight } = Dimensions.get('window');

const HotelSearchScreen = () => {
    const navigation = useNavigation();
    const [city, setCity] = useState('');
    const [checkIn, setCheckIn] = useState(new Date());
    const [checkOut, setCheckOut] = useState(new Date(Date.now() + 86400000));
    const [guests, setGuests] = useState(2);
    const [rooms, setRooms] = useState(1);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [dateType, setDateType] = useState('');
    const [showRoomPicker, setShowRoomPicker] = useState(false);

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || (dateType === 'checkIn' ? checkIn : checkOut);
        setShowDatePicker(false);
        if (dateType === 'checkIn') {
            setCheckIn(currentDate);
            if (currentDate > checkOut) {
                setCheckOut(new Date(currentDate.getTime() + 86400000));
            }
        } else {
            setCheckOut(currentDate);
        }
    };

    const showDatepicker = (type) => {
        setShowDatePicker(true);
        setDateType(type);
    };

    const renderRoomPicker = () => (
        <Modal
            transparent={true}
            visible={showRoomPicker}
            onRequestClose={() => setShowRoomPicker(false)}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <TouchableOpacity
                            key={num}
                            style={styles.roomOption}
                            onPress={() => {
                                setRooms(num);
                                setShowRoomPicker(false);
                            }}
                        >
                            <Text style={styles.roomOptionText}>{num} {num === 1 ? 'Chambre' : 'Chambres'}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </Modal>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://renaissance-new-york-hotel-57.hotels-innewyork.com/data/Pictures/OriginalPhoto/7647/764756/764756557/new-york-renaissance-hotel-57-picture-95.JPEG' }}
                        style={styles.image}
                    />
                    <View style={styles.overlay}>
                        <View style={styles.logoContainer}>
                            <Text style={styles.logo}>M</Text>
                            <Text style={styles.logoText}>Hotel</Text>
                        </View>

                        <Text style={styles.title}>Réservation d'hôtel</Text>

                    </View>
                </View>

                <View style={styles.bookingForm}>
                    <Text style={styles.formLabel}>Sélectionner la ville</Text>
                    <View style={styles.inputContainer}>
                        <Ionicons name="search" size={20} color="#999" style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Rechercher une ville"
                            value={city}
                            onChangeText={setCity}
                        />
                    </View>
                    <View style={styles.dateContainer}>
                        <View style={styles.dateInput}>
                            <Text style={styles.formLabel}>Arrivée</Text>
                            <TouchableOpacity style={styles.dateButton} onPress={() => showDatepicker('checkIn')}>
                                <Ionicons name="calendar-outline" size={20} color="#999" style={styles.inputIcon} />
                                <Text>{format(checkIn, 'dd MMM yyyy')}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.dateInput}>
                            <Text style={styles.formLabel}>Départ</Text>
                            <TouchableOpacity style={styles.dateButton} onPress={() => showDatepicker('checkOut')}>
                                <Ionicons name="calendar-outline" size={20} color="#999" style={styles.inputIcon} />
                                <Text>{format(checkOut, 'dd MMM yyyy')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.guestsRoomsContainer}>
                        <View style={styles.guestsInput}>
                            <Text style={styles.formLabel}>Nombre de Personne</Text>
                            <View style={styles.counterContainer}>
                                <TouchableOpacity onPress={() => setGuests(Math.max(1, guests - 1))}>
                                    <Ionicons name="remove-circle-outline" size={24} color="#0077be" />
                                </TouchableOpacity>
                                <Text style={styles.counterText}>{guests}</Text>
                                <TouchableOpacity onPress={() => setGuests(guests + 1)}>
                                    <Ionicons name="add-circle-outline" size={24} color="#0077be" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.roomsInput}>
                            <Text style={styles.formLabel}>Chambres</Text>
                            <TouchableOpacity style={styles.roomsButton} onPress={() => setShowRoomPicker(true)}>
                                <Text>{rooms} {rooms === 1 ? 'Chambre' : 'Chambres'}</Text>
                                <Ionicons name="chevron-down" size={24} color="#999" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Button
                        title="Rechercher"
                        onPress={() => navigation.navigate("Search")}
                        style={styles.searchButton}
                    />
                </View>
            </ScrollView>

            {showDatePicker && (
                <DateTimePicker
                    value={dateType === 'checkIn' ? checkIn : checkOut}
                    mode="date"
                    display="default"
                    onChange={onDateChange}
                    minimumDate={dateType === 'checkOut' ? checkIn : new Date()}
                />
            )}

            {renderRoomPicker()}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollContent: {
        flexGrow: 1,
    },
    imageContainer: {
        height: screenHeight * 0.35,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: Colors.color_jaune,
        fontSize: 22,
        fontWeight: 'bold',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: 300,
        textAlign: "center",
        borderRadius: 10,
        height: 48,
        padding:8
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: Colors.color_blue,
        backgroundColor: '#fff',
        width: 60,
        height: 60,
        borderRadius: 30,
        textAlign: 'center',
        lineHeight: 60,
        marginRight: 10,
    },
    logoText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.color_bclair,
    },
    bookingForm: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -20,
        padding: 20,
        flex: 1,
        minHeight: screenHeight * 0.65,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    formLabel: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        color: '#333',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 12,
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    dateInput: {
        flex: 1,
        marginRight: 10,
    },
    dateButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 12,
        padding: 15,
    },
    guestsRoomsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    guestsInput: {
        flex: 1,
        marginRight: 10,
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 12,
        padding: 10,
    },
    counterText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    roomsInput: {
        flex: 1,
    },
    roomsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 12,
        padding: 15,
    },
    searchButton: {
        width: '100%',
        marginTop: 10,
        marginBottom: 20,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        width: '80%',
    },
    roomOption: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    roomOptionText: {
        fontSize: 16,
        color: '#333',
    },
});

export default HotelSearchScreen;