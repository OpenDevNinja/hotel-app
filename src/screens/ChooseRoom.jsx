// ChooseRoom.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CardRoom from '../components/CardRoom';
import StatusBarSeparator from '../components/StatusBarSeparator';


const roomData = [
    {
        id: '1',
        title: 'King room with two beds',
        beds: '2 double beds',
        size: 'room size 40 m²',
        amenities: 'private bathroom • breakfast available',
        price: 99,
        nbRoom: 2,
        image: 'https://stories.forbestravelguide.com/wp-content/uploads/2019/05/WorldsBestRooms-TheFullertonBayHotelSingapore-CreditTheFullertonBayHotelSingapore.jpg',
    },
    {
        id: '2',
        title: 'Double room with two beds',
        beds: '2 double beds',
        size: 'room size 40 m²',
        amenities: 'private bathroom',
        price: 159,
        nbRoom: 5,
        image: 'https://theasiacollective.com/wp-content/uploads/2020/03/The-Taj-Mahal-Palace-2.jpg',
    },
    {
        id: '3',
        title: 'King room with two beds',
        beds: '2 double beds',
        size: 'room size 40 m²',
        amenities: 'private bathroom • breakfast available',
        price: 99,
        nbRoom: 2,
        image: "https://assets.hgtv.ca/wp-content/uploads/2021/12/Suite-5000-Mandarin1.jpg",
    },
    {
        id: '4',
        title: 'Double room with two beds',
        beds: '2 double beds',
        size: 'room size 40 m²',
        amenities: 'private bathroom',
        price: 159,
        nbRoom: 3,
        image: 'https://besthotelshome.com/wp-content/uploads/2020/11/Top-10-best-luxury-5-star-hotels-in-Chennai-India.jpg',
    },
];

const ChooseRoom = ({ navigation }) => {
    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <>
            <StatusBarSeparator />
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="#666" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Choisir une chambre</Text>
                </View>
                <FlatList
                    data={roomData}
                    renderItem={({ item }) => <CardRoom room={item} />}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.listContainer}
                />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,

    },
    backButton: {
        marginRight: 16,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2C3E50',
        textAlign: "center",
        marginLeft: 35
    },
    listContainer: {
        padding: 16,
    },
});

export default ChooseRoom;