import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarSeparator from '../components/StatusBarSeparator';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
const CreditCardForm = () => {
    const [saveCard, setSaveCard] = useState(false);
    const navigation = useNavigation()
    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <>
            <StatusBarSeparator />
            <View style={styles.headerTop}>
                <TouchableOpacity onPress={handleGoBack} style={styles.backButtonTop}>
                    <Ionicons name="arrow-back" size={24} color="#666" />
                </TouchableOpacity>
                <Text style={styles.headerTitleTop}>Ajout de la carte</Text>
            </View>
            <ScrollView style={styles.container}>

                <LinearGradient
                    colors={['#1e3c72', '#2a5298']}
                    style={styles.cardPreview}
                >
                    <View style={styles.chip} />
                    <View style={styles.cardDetails}>
                        <View style={styles.cardNumber} />
                        <View style={styles.cardInfo}>
                            <View style={styles.cardInfoItem} />
                            <View style={styles.cardInfoItem} />
                        </View>
                    </View>
                    <Image source={require("../assets/md2.png")} style={styles.cardLogo} />
                </LinearGradient>

                <Text style={styles.title}>Entrez les détails de votre carte de crédit</Text>


                <TextInput
                    style={styles.input}
                    placeholder="Nom du titulaire"
                    placeholderTextColor="#999"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Numéro de carte"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                />

                <View style={styles.row}>
                    <TextInput
                        style={[styles.input, styles.halfInput]}
                        placeholder="Date d'expiration"
                        placeholderTextColor="#999"
                    />
                    <TextInput
                        style={[styles.input, styles.halfInput]}
                        placeholder="CVV"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.checkboxContainer}>
                    <TouchableOpacity
                        style={styles.checkbox}
                        onPress={() => setSaveCard(!saveCard)}
                    >
                        {saveCard && <View style={styles.checkboxInner} />}
                    </TouchableOpacity>
                    <Text style={styles.checkboxLabel}>Sauvegarder cette carte pour les paiements futurs</Text>
                </View>


                <Button
                    title="Ajouter la carte "
                    onPress={() => navigation.navigate('Checkout')}
                    style={styles.signInButton}
                />
               
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,

    },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',

    },
    backButtonTop: {
        marginRight: 16,
    },
    headerTitleTop: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2C3E50',
        textAlign: "center",
        marginLeft: 65
    },
    signInButton: {
        width: '100%',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 5,
    },
    orderSummary: {
        backgroundColor: '#f7f7f7',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    orderItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    orderTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingTop: 10,
        marginTop: 10,
    },
    totalText: {
        fontWeight: 'bold',
    },
    totalAmount: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    cardPreview: {
        height: 200,
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    chip: {
        width: 40,
        height: 30,
        backgroundColor: '#ffd700',
        borderRadius: 5,
    },
    cardDetails: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    cardNumber: {
        height: 10,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginBottom: 20,
    },
    cardInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardInfoItem: {
        width: '45%',
        height: 10,
        backgroundColor: 'rgba(255,255,255,0.7)',
    },
    cardLogo: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        width: 60,
        height: 40,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 12,
        marginBottom: 15,
        fontSize: 16,
    },
    title: {
        fontSize: 16,
        marginBottom: 20,
      },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInput: {
        width: '48%',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        marginBottom :50
    },
    checkbox: {
        width: 22,
        height: 22,
        borderWidth: 1,
        borderColor: '#2a5298',
        borderRadius: 4,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxInner: {
        width: 14,
        height: 14,
        backgroundColor: '#2a5298',
        borderRadius: 2,
    },
    checkboxLabel: {
        color: '#333',
        fontSize: 14,
    },
    payButton: {
        backgroundColor: '#2a5298',
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 35
    },
    payButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default CreditCardForm;