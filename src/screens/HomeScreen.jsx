import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import StatusBarSeparator from '../components/StatusBarSeparator';
import Colors from '../constants/colors';

import MenuHeader from '../components/Menu';
import HotelScreen from './HotelScreen';
import RoomScreen from './RoomScreen';

const HomeScreen = () => {


    return (
        <>
            <StatusBar style="dark" />

            <StatusBarSeparator />
            <SafeAreaView style={styles.container}>

                <MenuHeader />


                <ScrollView contentContainerStyle={styles.scrollView}>

                    {/*    <Text style={styles.welcomeText}>Hi Bona  👋 *</Text> */}

                    <View style={styles.searchBar}>
                        <Ionicons name="search" size={20} color="#666" />
                        <Text style={styles.searchText}>Rechercher...</Text>
                        <TouchableOpacity style={styles.filterButton}>
                            <Ionicons name="options-outline" size={20} color="#000" />
                        </TouchableOpacity>
                    </View>

                   
                    
                    <RoomScreen/>

                    <View style={{ marginTop: 15 }}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Nouveaux Hôtels</Text>
                            <TouchableOpacity>
                                <Text style={styles.seeAllText}>Voir tout</Text>
                            </TouchableOpacity>
                        </View>
                        <HotelScreen />

                      

                    </View>

                </ScrollView>
             
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
    },
    scrollView: {
        paddingHorizontal: 20,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 1,
    },
    logo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.color_blue,
        backgroundColor: '#fff',
        width: 40,
        height: 40,
        borderRadius: 30,
        textAlign: 'center',
        lineHeight: 40,
        marginRight: 5,

    },
    logoText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.color_blue,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },

    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: -20
    },

    subText: {
        fontSize: 16,
        color: '#666',
    },
    sublogo: {
        color: Colors.color_blue,
        fontWeight: "bold",
        fontSize: 18
    },
    iconContainer: {
        flexDirection: 'row',
    },
    iconButton: {
        marginLeft: 15,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    searchText: {
        flex: 1,
        marginLeft: 10,
        color: '#666',
    },
    filterButton: {
        padding: 5,
    },
    categoryScroll: {
        marginBottom: 20,
    },
    categoryButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginRight: 10,
        borderRadius: 20,
        backgroundColor: '#FFF',
    },
    activeCategoryButton: {
        backgroundColor: Colors.color_blue,
    },
    categoryText: {
        color: '#666',
    },
    activeCategoryText: {
        color: '#FFF',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    seeAllText: {
        color: Colors.color_blue,
        fontWeight :"bold"
    },
    propertiesList: {
        paddingRight: 20,
    },
    propertyCard: {
        backgroundColor: '#FFF',
        borderRadius: 15,
        overflow: 'hidden',
        marginRight: 15,
        width: 280,
    },
    propertyImage: {
        width: '100%',
        height: 150,
    },
    propertyTag: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
    },
    propertyTagText: {
        color: Colors.color_blue,
        fontWeight: 'bold',
    },
    propertyInfo: {
        padding: 15,
    },
    propertyTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    propertyLocation: {
        color: '#666',
        fontSize: 14,
        marginBottom: 10,
    },
    propertyDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    propertyDetailItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    propertyDetailText: {
        marginLeft: 5,
        color: '#666',
        fontSize: 12,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        paddingVertical: 10,
        backgroundColor: '#FFF',
    },
    tabBarItem: {
        alignItems: 'center',
    },
});

export default HomeScreen;