import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StatusBarSeparator from '../components/StatusBarSeparator';
import Colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';

const PaymentMethod = () => {
    const navigation = useNavigation()
    const [selectedMethod, setSelectedMethod] = useState('creditCard');

    const paymentMethods = [
        { id: 'creditCard', label: 'Credit Card', icon: 'credit-card', iconType: 'material' },
        { id: 'internetBanking', label: 'Virement Bancaire ', icon: 'bank', iconType: 'material' },
        { id: 'paypal', label: 'PayPal', icon: 'paypal', iconType: 'fontawesome' },
        { id: 'mtn', label: 'MTN', image: require('../assets/mtn.png') },
        { id: 'moov', label: 'Moov', image: require('../assets/moov.png') },
        { id: 'celtis', label: 'Celtis', image: require('../assets/celtis.jpg') },
    ];

    const renderIcon = (method) => {
        if (method.image) {
            return <Image source={method.image} style={styles.iconImage} />;
        } else if (method.iconType === 'fontawesome') {
            return <FontAwesome name={method.icon} size={24} color={Colors.color_blue} style={styles.icon} />;
        }
        return <Icon name={method.icon} size={24} color={Colors.color_blue} style={styles.icon} />;
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <>
            <StatusBarSeparator />
            <SafeAreaView style={styles.container}>
                <View style={styles.headerTop}>
                    <TouchableOpacity onPress={handleGoBack} style={styles.backButtonTop}>
                        <Ionicons name="arrow-back" size={24} color="#666" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitleTop}>Mode de paiement</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.subtitle}>Sélectionnez l'un des modes de paiement</Text>
                    {paymentMethods.map((method) => (
                        <TouchableOpacity
                            key={method.id}
                            style={styles.methodItem}
                            onPress={() => setSelectedMethod(method.id)}
                        >
                            <RadioButton
                                value={method.id}
                                status={selectedMethod === method.id ? 'checked' : 'unchecked'}
                                onPress={() => setSelectedMethod(method.id)}
                                color="#007AFF"
                            />
                            <View style={styles.iconContainer}>
                                {renderIcon(method)}
                            </View>
                            <Text style={styles.methodLabel}>{method.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={{ padding: 15 }}>
                    <Button
                        title="Suivant"
                        onPress={() => navigation.navigate('Credit')}
                        style={styles.signInButton}
                    />
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    iconContainer: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    icon: {
        width: 24,
        height: 24,
    },
    iconImage: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
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
        marginLeft: 55
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    methodItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
    },
    methodLabel: {
        fontSize: 16,
    },
    signInButton: {
        width: '100%',
        marginBottom: 20,
    },
});

export default PaymentMethod;