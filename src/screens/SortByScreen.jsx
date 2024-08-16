import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import StatusBarSeparator from '../components/StatusBarSeparator';
import Colors from '../constants/colors';
const SortScreen = () => {
    const [selectedOption, setSelectedOption] = useState('Popular nearby first');

    const sortOptions = [
        'Nouveautés',
        'Offres spéciales',
        'Popularité',
        'Note (la plus élevée)',
        'Note (la plus basse)',
        'Prix (le plus élevé)',
        'Prix (le plus bas)',
        'Nombre d\'avis',
        'Étoiles (décroissant)',
        'Étoiles (croissant)',
        'Disponibilité',
    ];

    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };
    const renderSortOption = (option) => (
        <TouchableOpacity
            key={option}
            style={styles.optionContainer}
            onPress={() => setSelectedOption(option)}
        >
            <View style={styles.radioButton}>
                {selectedOption === option && <View style={styles.radioButtonInner} />}
            </View>
            <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
    );

    return (
        <>
            <StatusBarSeparator />
            <SafeAreaView style={styles.container}>
                <View style={styles.headerTop}>
                    <TouchableOpacity onPress={handleGoBack} style={styles.backButtonTop}>
                        <Ionicons name="arrow-back" size={24} color="#666" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitleTop}>Filtres</Text>
                </View>
                <ScrollView style={styles.content}>
                    {sortOptions.map(renderSortOption)}
                </ScrollView>
                <TouchableOpacity
                        onPress={() => navigation.navigate('Search')}
                        style={styles.applyButton}>
                        <Text style={styles.applyButtonText}>Appliquer</Text>
                    </TouchableOpacity>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
        marginLeft: 100
    },

    placeholder: {
        width: 24,
    },
    content: {
        flex: 1,
        padding: 16,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
    },
    radioButton: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#007AFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    radioButtonInner: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#007AFF',
    },
    optionText: {
        fontSize: 16,
    },
    applyButton: {
        backgroundColor: Colors.color_blue,
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        justifyContent:"center",
        marginTop: 24,
       marginHorizontal :10
    },
    applyButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '400',
    },
});

export default SortScreen;