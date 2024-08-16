import React from 'react';
import { View, ScrollView, TextInput, TouchableOpacity, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import HotelScreen from './HotelScreen'
import StatusBarSeparator from '../components/StatusBarSeparator';
import Colors from '../constants/colors';

const SearchScreen = () => {
  return (
    <>
      <StatusBarSeparator />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>

          <TextInput style={styles.searchBar} placeholder="Bénin, Cotonou" />
          <TouchableOpacity style={styles.searchButton}>
            <Icon name="search" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.filterBar}>
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="options-outline" size={18} color="#000" />
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="swap-vertical-outline" size={18} color="#000" />
            <Text style={styles.filterText}>Sort</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="map-outline" size={18} color="#000" />
            <Text style={styles.filterText}>Map</Text>
          </TouchableOpacity>
        </View>
        <HotelScreen />
      </SafeAreaView>
    </>

  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 10

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  searchBar: {
    flex: 1,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#333',
  },
  searchButton: {
    marginLeft: 12,
    padding: 8,
    backgroundColor: Colors.color_blue,
    borderRadius: 10,
  },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,


  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: '#F5F5F5',
    marginBottom: 10
  },
  filterText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },

});