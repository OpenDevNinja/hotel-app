
import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Back = () => {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}>
                <Ionicons name="chevron-back" size={24} color="#fff" />
            </TouchableOpacity>
            <View style={styles.headerRight}>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="heart-outline" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="share-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}

export default Back

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 40,
        left: 20,
        right: 20,
        
      },
      backButton: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
    headerRight: {
        flexDirection: 'row',
      },
      iconButton: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginLeft: 10,
      },
})