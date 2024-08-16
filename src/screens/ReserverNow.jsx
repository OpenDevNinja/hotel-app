import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/colors';
import StatusBarSeparator from '../components/StatusBarSeparator';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
const ReserverNow = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [checkIn, setCheckIn] = useState('20 Feb-25 Feb');
    const [checkOut, setCheckOut] = useState('20 Feb-25 Feb');
    const navigation =useNavigation()

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <>
            <StatusBarSeparator />
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.headerTop}>
                    <TouchableOpacity onPress={handleGoBack} style={styles.backButtonTop}>
                        <Ionicons name="arrow-back" size={24} color="#666" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitleTop}>Réservation</Text>
                </View>
                <ScrollView style={styles.container}>
                 
                    <View style={styles.inputGroup}>
                        <View style={styles.inputWrapper}>
                            <Icon name="person-outline" size={20} color={Colors.color_gray} style={styles.inputIcon} />
                            <TextInput style={styles.input} placeholder="Prénom" placeholderTextColor={Colors.color_gray} value={firstName} onChangeText={setFirstName} />
                        </View>
                        <View style={styles.inputWrapper}>
                            <Icon name="person-outline" size={20} color={Colors.color_gray} style={styles.inputIcon} />
                            <TextInput style={styles.input} placeholder="Nom" placeholderTextColor={Colors.color_gray} value={lastName} onChangeText={setLastName} />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <View style={styles.inputWrapper}>
                            <Icon name="mail-outline" size={20} color={Colors.color_gray} style={styles.inputIcon} />
                            <TextInput style={styles.input} placeholder="Email" placeholderTextColor={Colors.color_gray} value={email} onChangeText={setEmail} keyboardType="email-address" />
                        </View>
                        <View style={styles.inputWrapper}>
                            <Icon name="call-outline" size={20} color={Colors.color_gray} style={styles.inputIcon} />
                            <TextInput style={styles.input} placeholder="Téléphone" placeholderTextColor={Colors.color_gray} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
                        </View>
                    </View>

                    <View style={styles.dateGroup}>
                        <Text style={styles.dateLabel}>Arrivée </Text>
                        <TouchableOpacity style={styles.dateInput}>
                            <Icon name="calendar-outline" size={20} color={Colors.color_blue} style={styles.dateIcon} />
                            <Text style={styles.dateText}>{checkIn}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.dateGroup}>
                        <Text style={styles.dateLabel}>Départ</Text>
                        <TouchableOpacity style={styles.dateInput}>
                            <Icon name="calendar-outline" size={20} color={Colors.color_blue} style={styles.dateIcon} />
                            <Text style={styles.dateText}>{checkOut}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.roomInfo}>
                        <Image source={{ uri: 'https://media.apimo.pro/picture/4502/4501724/8312443005faa7344136ee1.53387998_cc4ceaed4d_1920.webp-original.jpg?1654885616' }} style={styles.roomImage} />
                        <View style={styles.roomDetails}>
                            <Text style={styles.roomType}>Classic Flat Room</Text>
                            <Text style={styles.roomPrice}>$159 <Text style={styles.perNight}>/ Nuit</Text></Text>
                            <TouchableOpacity style={styles.viewDetailsButton}>
                                <Text style={styles.viewDetailsText}>Voir les détails</Text>
                                <Icon name="chevron-forward" size={16} color={Colors.color_blue} />
                            </TouchableOpacity>
                        </View>
                    </View>

                  

                    <View style={styles.paymentDetails}>
                        <Text style={styles.sectionTitle}>Détails du paiement</Text>
                        <View style={styles.paymentRow}>
                            <Text style={styles.paymentLabel}>Chambre Classique </Text>
                            <Text style={styles.paymentAmount}>$159.00</Text>
                        </View>
                        <View style={styles.paymentRow}>
                            <Text style={styles.paymentLabel}>Caution</Text>
                            <Text style={styles.paymentAmount}>$100.00</Text>
                        </View>
                        <View style={styles.paymentRow}>
                            <Text style={styles.paymentLabel}>Taxe</Text>
                            <Text style={styles.paymentAmount}>$25.00</Text>
                        </View>
                        <View style={[styles.paymentRow, styles.totalRow]}>
                            <Text style={styles.totalText}>Total</Text>
                            <Text style={styles.totalAmount}>$284.00</Text>
                        </View>
                    </View>

                    <TouchableOpacity 
                     onPress={() => navigation.navigate('PayMethod')}
                    style={styles.paymentButton}>
                        <Text style={styles.paymentButtonText}>Payer maintenant</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.color_white,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,

    },
    backButtonTop: {
        marginRight: 16,
    },
    headerTitleTop: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2C3E50',
        textAlign: "center",
        marginLeft: 85
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.color_blue,
        marginBottom: 25,
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    inputWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Colors.color_bclair,
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 10,
        marginHorizontal: 5,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: Colors.color_gray,
    },
    dateGroup: {
        marginBottom: 20,
    },
    dateLabel: {
        fontSize: 16,
        color: Colors.color_gray,
        marginBottom: 5,
    },
    dateInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Colors.color_bclair,
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 10,
    },
    dateIcon: {
        marginRight: 10,
    },
    dateText: {
        color: Colors.color_gray,
        fontSize: 16,
    },
    roomInfo: {
        flexDirection: 'row',
        backgroundColor: Colors.color_white,
        borderRadius: 15,
        padding: 15,
        marginBottom: 25,
        shadowColor: Colors.color_gray,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    roomImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 15,
    },
    roomDetails: {
        flex: 1,
        justifyContent: 'center',
    },
    roomType: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.color_gray,
        marginBottom: 5,
    },
    roomPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.color_jaune,
        marginBottom: 10,
    },
    perNight: {
        fontSize: 14,
        fontWeight: 'normal',
        color: Colors.color_gay,
    },
    viewDetailsButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewDetailsText: {
        color: Colors.color_blue,
        fontWeight: 'bold',
        marginRight: 5,
    },
    additionalServices: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.color_gray,
        marginBottom: 15,
    },
    paymentDetails: {
        marginBottom: 25,
    },
    paymentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    paymentLabel: {
        color: Colors.color_gay,
        fontSize: 16,
    },
    paymentAmount: {
        color: Colors.color_gray,
        fontSize: 16,
        fontWeight: '500',
    },
    totalRow: {
        borderTopWidth: 1,
        borderTopColor: Colors.color_bclair,
        paddingTop: 15,
        marginTop: 10,
    },
    totalText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.color_gray,
    },
    totalAmount: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.color_blue,
    },
    paymentButton: {
        backgroundColor: Colors.color_blue,
        padding: 18,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 30,
    },
    paymentButtonText: {
        color: Colors.color_white,
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default ReserverNow;

