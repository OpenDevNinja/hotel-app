import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StatusBarSeparator from '../components/StatusBarSeparator';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';

const CustomAlert = ({ visible, message, onClose }) => {
    if (!visible) return null;

    return (
        <View style={styles.alertOverlay}>
            <View style={styles.alertBox}>
                <Text style={styles.alertMessage}>{message}</Text>
                <TouchableOpacity style={styles.alertButton} onPress={onClose}>
                    <Text style={styles.alertButtonText}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const CheckoutScreen = () => {
    const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);
    const [isPromoExpanded, setIsPromoExpanded] = useState(false);
    const [promoCode, setPromoCode] = useState('');
    const [totalPrice, setTotalPrice] = useState(399.00);
    const navigation = useNavigation();
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleGoBack = () => {
        navigation.goBack();
    };
    const handleApplyPromo = () => {
        if (promoCode === 'PROMO10') {
            const discountAmount = totalPrice * 0.1;
            setTotalPrice(prevTotal => prevTotal - discountAmount);
            setIsPromoExpanded(false);
            setAlertMessage('Code promo appliqué avec succès !');
            setAlertVisible(true);
        } else {
            setAlertMessage('Code promo invalide');
            setAlertVisible(true);
        }
    };

    return (
        <>
            <StatusBarSeparator />
            <View style={styles.headerTop}>
                <TouchableOpacity onPress={handleGoBack} style={styles.backButtonTop}>
                    <Ionicons name="arrow-back" size={24} color="#666" />
                </TouchableOpacity>
                <Text style={styles.headerTitleTop}>Paiement</Text>
            </View>
            <ScrollView style={styles.container}>




                <View style={styles.roomCard}>
                    <Image
                        source={{ uri: 'https://media.apimo.pro/picture/4502/4501724/8312443005faa7344136ee1.53387998_cc4ceaed4d_1920.webp-original.jpg?1654885616' }}
                        style={styles.roomImage}
                    />
                    <Text style={styles.roomTitle}>Chambre Classique</Text>
                    <Text style={styles.roomDetails}>
                    <Ionicons name="star" size={16} color="#FFD700" />
                        4.5 Excellent (3500+ avis)</Text>
                </View>

                <TouchableOpacity
                    style={styles.accordion}
                    onPress={() => setIsDetailsExpanded(!isDetailsExpanded)}
                >
                    <Text style={styles.accordionTitle}>Détails de la Propriété</Text>
                    <Icon name={isDetailsExpanded ? "chevron-up" : "chevron-down"} size={24} color="#000" />
                </TouchableOpacity>

                {isDetailsExpanded && (
                    <View style={styles.propertyDetails}>
                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Nom</Text>
                            <Text style={styles.detailValue}>Toyi Bonaventure</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Email</Text>
                            <Text style={styles.detailValue}>toybona@gmail.com</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Téléphone</Text>
                            <Text style={styles.detailValue}>+229 66476760</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Informations de séjour</Text>
                            <Text style={styles.detailValue}>15 Mai, 16 Mai</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Chambre & Invités</Text>
                            <Text style={styles.detailValue}>1 Chambre, 4 Invités</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Nuits</Text>
                            <Text style={styles.detailValue}>2 Nuits</Text>
                        </View>
                    </View>
                )}

                <View style={styles.facilitiesContainer}>
                    <View style={styles.facilityItem}>
                        <Icon name="wifi" size={24} color="#4CAF50" />
                        <Text style={styles.facilityText}>Wifi</Text>
                    </View>
                    <View style={styles.facilityItem}>
                        <Icon name="pool" size={24} color="#2196F3" />
                        <Text style={styles.facilityText}>Piscine</Text>
                    </View>
                    <View style={styles.facilityItem}>
                        <Icon name="food" size={24} color="#FF9800" />
                        <Text style={styles.facilityText}>Petit-déjeuner</Text>
                    </View>
                    <View style={styles.facilityItem}>
                        <Icon name="car" size={24} color="#607D8B" />
                        <Text style={styles.facilityText}>Parking</Text>
                    </View>
                </View>

                <View style={styles.paymentDetails}>
                    <Text style={styles.paymentTitle}>Détails du Paiement</Text>
                    <View style={styles.paymentRow}>
                        <Text style={styles.paymentLabel}>Frais de Location</Text>
                        <Text style={styles.paymentValue}>149,00 $</Text>
                    </View>
                    <View style={styles.paymentRow}>
                        <Text style={styles.paymentLabel}>Caution</Text>
                        <Text style={styles.paymentValue}>100 $</Text>
                    </View>
                    <View style={styles.paymentRow}>
                        <Text style={styles.paymentLabel}>Frais de Service</Text>
                        <Text style={styles.paymentValue}>150 $</Text>
                    </View>
                    <View style={styles.paymentRowTotal}>
                        <Text style={styles.paymentLabelTotal}>Total</Text>
                        <Text style={styles.paymentValueTotal}>399,00 $</Text>
                    </View>
                </View>

                <View style={styles.discountSection}>
                    <TouchableOpacity
                        style={styles.discountButton}
                        onPress={() => setIsPromoExpanded(!isPromoExpanded)}
                    >
                        <Text style={styles.discountTitle}>Remise</Text>
                        <Icon name={isPromoExpanded ? "chevron-up" : "chevron-down"} size={24} color={Colors.color_blue} />
                    </TouchableOpacity>
                    {isPromoExpanded && (
                        <View style={styles.promoInputContainer}>
                            <TextInput
                                style={styles.promoInput}
                                placeholder="Entrez votre code promo"
                                value={promoCode}
                                onChangeText={setPromoCode}
                            />
                            <TouchableOpacity
                                style={styles.applyButton}
                                onPress={handleApplyPromo}
                            >
                                <Text style={styles.applyButtonText}>Appliquer</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>


                <TouchableOpacity style={styles.payButton}
                onPress={() =>  navigation.navigate('Confirme')}
                >
                    <Text style={styles.payButtonText}>Payer ({totalPrice.toFixed(2)} $)</Text>
                </TouchableOpacity>
            </ScrollView>
            <CustomAlert
                visible={alertVisible}
                message={alertMessage}
                onClose={() => setAlertVisible(false)}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white',
    },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',

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
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    roomCard: {
        backgroundColor: 'white',
        borderRadius: 8,
        margin: 16,
        padding: 16,
        elevation: 2,
    },
    roomImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    roomTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
    },
    roomDetails: {
        marginTop: 4,
        color: '#666',
       
    },
    accordion: {
        backgroundColor: 'white',
        padding: 16,
        marginHorizontal: 16,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    accordionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    propertyDetails: {
        backgroundColor: 'white',
        padding: 16,
        marginHorizontal: 16,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    detailLabel: {
        color: '#666',
    },
    detailValue: {
        fontWeight: 'bold',
    },
    facilitiesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 16,
        backgroundColor: 'white',
        padding: 16,
    },
    facilityItem: {
        alignItems: 'center',
    },
    facilityText: {
        marginTop: 4,
        fontSize: 12,
    },
    paymentDetails: {
        backgroundColor: 'white',
        padding: 16,
        margin: 16,
        borderRadius: 8,
    },
    paymentTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    paymentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    paymentRowTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    paymentLabel: {
        color: '#666',
    },
    paymentLabelTotal: {
        fontWeight: 'bold',
    },
    paymentValue: {
        fontWeight: 'bold',
    },
    paymentValueTotal: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    discountSection: {
        backgroundColor: 'white',
        padding: 16,
        marginHorizontal: 16,
        borderRadius: 8,
    },
    discountTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    discountButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
    },
    discountButtonText: {
        color: Colors.color_blue,
    },
    payButton: {
        backgroundColor: Colors.color_blue,
        padding: 16,
        margin: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    payButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    promoInputContainer: {
        flexDirection: 'row',
        marginTop: 8,
    },
    promoInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        padding: 8,
        marginRight: 8,
    },
    applyButton: {
        backgroundColor: Colors.color_blue,
        padding: 8,
        borderRadius: 4,
        justifyContent: 'center',
    },
    applyButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    alertOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    alertBox: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '80%',
        alignItems: 'center',
    },
    alertMessage: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    alertButton: {
        backgroundColor: Colors.color_blue,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    alertButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },

});

export default CheckoutScreen;