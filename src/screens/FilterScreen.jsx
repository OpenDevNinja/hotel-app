import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/colors';
import StatusBarSeparator from '../components/StatusBarSeparator';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
const FilterScreen = () => {
    const [priceRange, setPriceRange] = useState([5, 1500]);
    const [selectedStars, setSelectedStars] = useState(null);
    const [expandedAccordion, setExpandedAccordion] = useState(null);
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };
    const renderStarRating = () => {
        return (
            <View style={styles.starContainer}>
                {[2, 3, 4, 5].map((star) => (
                    <TouchableOpacity
                        key={star}
                        style={[
                            styles.starButton,
                            selectedStars === star && styles.selectedStarButton
                        ]}
                        onPress={() => setSelectedStars(star)}
                    >
                        <Icon name="star" size={24} color="#FFD700" />
                        <Text style={styles.starText}>{star}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    const renderFilterOption = (title, content, icon) => (
        <View>
            <TouchableOpacity
                style={styles.filterOption}
                onPress={() => setExpandedAccordion(expandedAccordion === title ? null : title)}
            >
                <View style={styles.filterOptionTitleContainer}>
                    <Icon name={icon} size={24} color={Colors.color_blue} style={styles.filterOptionIcon} />
                    <Text style={styles.filterOptionText}>{title}</Text>
                </View>
                <Icon
                    name={expandedAccordion === title ? "expand-less" : "expand-more"}
                    size={24}
                    color="#000"
                />
            </TouchableOpacity>
            {expandedAccordion === title && (
                <View style={styles.accordionContent}>
                    {content.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.accordionItem}>
                            <Icon name={item.icon} size={20} color={Colors.color_blue} style={styles.accordionItemIcon} />
                            <Text style={styles.accordionItemText}>{item.text}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );

    return (
        <>
            <StatusBarSeparator />
            <ScrollView style={styles.container}>
                <View style={styles.headerTop}>
                    <TouchableOpacity onPress={handleGoBack} style={styles.backButtonTop}>
                        <Ionicons name="arrow-back" size={24} color="#666" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitleTop}>Filtres</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>Fourchette de prix</Text>
                    <View style={styles.sliderContainer}>
                        <Slider
                            style={styles.slider}
                            minimumValue={0}
                            maximumValue={3000}
                            step={100}
                            value={priceRange[1]}
                            onValueChange={(value) => setPriceRange([priceRange[0], value])}
                            minimumTrackTintColor="#1E88E5"
                            maximumTrackTintColor="#E0E0E0"
                            thumbTintColor="#1E88E5"
                        />
                        <View style={styles.priceLabels}>
                            <Text style={styles.priceText}>{priceRange[0]}€</Text>
                            <Text style={styles.priceText}>{priceRange[1]}€</Text>
                        </View>
                    </View>

                    <Text style={styles.sectionTitle}>Notation par étoiles</Text>
                    {renderStarRating()}

                    {renderFilterOption('Équipements et services', [
                        { icon: 'wifi', text: 'Wi-Fi' },
                        { icon: 'pool', text: 'Piscine' },
                        { icon: 'fitness-center', text: 'Salle de sport' },
                        { icon: 'local-parking', text: 'Parking' },
                        { icon: 'restaurant', text: 'Restaurant' }
                    ], 'room-service')}
                    {renderFilterOption('Type de propriété', [
                        { icon: 'hotel', text: 'Hôtel' },
                        { icon: 'apartment', text: 'Appartement' },
                        { icon: 'house', text: 'Villa' },
                        { icon: 'beach-access', text: 'Resort' },
                        { icon: 'group', text: 'Auberge de jeunesse' }
                    ], 'home')}
                    {renderFilterOption('Chambre et lit', [
                        { icon: 'single-bed', text: 'Simple' },
                        { icon: 'king-bed', text: 'Double' },
                        { icon: 'hotel', text: 'Twin' },
                        { icon: 'meeting-room', text: 'Suite' },
                        { icon: 'family-restroom', text: 'Familiale' }
                    ], 'bed')}


                    <TouchableOpacity
                        onPress={() => navigation.navigate('Search')}
                        style={styles.applyButton}>
                        <Text style={styles.applyButtonText}>Appliquer</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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

    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    clearText: {
        color: '#1E88E5',
        fontSize: 16,
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

        marginLeft: 100
    },
    selectedStarButton: {
        backgroundColor: Colors.color_blue,

    },
    accordionContent: {
        backgroundColor: '#F5F5F5',
        padding: 16,
    },
    accordionItem: {
        paddingVertical: 8,
    },
    content: {
        padding: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 16,
        marginBottom: 8,
        color: Colors.color_blue
    },
    sliderContainer: {
        marginBottom: 16,
    },
    slider: {
        width: '100%',
        height: 40,
    },
    priceLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    priceText: {
        fontSize: 14,
        color: '#757575',
    },
    starContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    starButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        paddingVertical: 2,
        paddingHorizontal: 12,
        borderRadius: 5,
    },
    starText: {
        marginLeft: 4,
        fontSize: 16,
    },
    filterOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,

    },
    filterOptionText: {
        fontSize: 16,
        color: Colors.color_blue
    },
    applyButton: {
        backgroundColor: Colors.color_blue,
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        marginTop: 24,
    },
    applyButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '400',
    },
    filterOptionTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterOptionIcon: {
        marginRight: 10,
    },
    accordionContent: {
        backgroundColor: '#F5F5F5',
        padding: 16,
        borderRadius: 8,
    },
    accordionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    accordionItemIcon: {
        marginRight: 10,
    },
    accordionItemText: {
        fontSize: 16,
        color: '#333',
    },
});

export default FilterScreen;