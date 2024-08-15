import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StatusBarSeparator from '../components/StatusBarSeparator';

const statusColors = {
  'À venir': { background: '#E6F3FF', text: '#007AFF' },
  'Confirmer': { background: '#E6FFE6', text: '#28A745' },
  'Terminé': { background: '#F2F2F2', text: '#6C757D' },
};

const stays = [
  {
    id: '1',
    name: 'Cozy Living Room',
    image: "https://resize.elle.fr/original/var/plain_site/storage/images/deco/reportages/visites-maisons/les-villas-des-stars-vont-vous-laisser-sans-voix/76876466-7-fre-FR/Decouvrez-les-villas-des-stars-entre-luxe-et-demesure.jpg",
    price: 180,
    status: 'À venir',
    isLiked: true,
    nbrNight: 5,
    period: 'Semaine'
  },
 
  {
    id: '2',
    name: 'Standard Single Room',
    image: "https://static9.depositphotos.com/1086013/1149/i/950/depositphotos_11497565-stock-photo-house-interior.jpg",
    price: 165,
    status: 'Confirmer',
    isLiked: false,
    nbrNight: 3,
    period: '3 Mois'
  },
  {
    id: '3',
    name: 'Garden Marina Room',
    image: "https://i.pinimg.com/originals/29/68/2c/29682cb707c4e76477894b0d5dc9bcd4.jpg",
    price: 199,
    status: 'Terminé',
   
    isLiked: true,
    nbrNight: 8,
    period: 'Mois'
  },
  {
    id: '4',
    name: 'Cozy Living Room',
    image: "https://resize.elle.fr/original/var/plain_site/storage/images/deco/reportages/visites-maisons/les-villas-des-stars-vont-vous-laisser-sans-voix/76876466-7-fre-FR/Decouvrez-les-villas-des-stars-entre-luxe-et-demesure.jpg",
    price: 180,
    status: 'À venir',
    isLiked: true,
    nbrNight: 10,
    period: 'Année'
  },
];

const PeriodSelector = ({ selectedPeriod, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const periods = ['Tout', 'Semaine', 'Mois', '3 Mois', 'Année'];

  return (
    <View style={styles.periodSelectorContainer}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.periodSelector}>
        <Text style={styles.periodSelectorText}>{selectedPeriod}</Text>
        <Ionicons name={isOpen ? "chevron-up" : "chevron-down"} size={20} color="black" />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.periodDropdown}>
          {periods.map((period) => (
            <TouchableOpacity
              key={period}
              onPress={() => {
                onSelect(period);
                setIsOpen(false);
              }}
              style={styles.periodOption}
            >
              <Text>{period}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const StayItem = ({ item }) => {
  const statusColor = statusColors[item.status] || { background: '#FFF', text: '#000' };

  return (
    <View style={styles.stayItem}>
      <Image source={{ uri: item.image }} style={styles.stayImage} />
      <View style={styles.stayInfo}>
        <Text style={styles.stayName}>{item.name}</Text>
        <Text style={styles.stayPrice}>${item.price}<Text style={styles.stayNight}>/{item.nbrNight} Nuits</Text></Text>
      </View>
      <TouchableOpacity
        style={[styles.stayButton, { backgroundColor: statusColor.background }]}
      >
        <Text style={[styles.stayButtonText, { color: statusColor.text }]}>
          {item.status}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const SejourScreen = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Tout');
  const [filteredStays, setFilteredStays] = useState(stays);

  useEffect(() => {
    if (selectedPeriod === 'Tout') {
      setFilteredStays(stays);
    } else {
      const filtered = stays.filter(stay => stay.period === selectedPeriod);
      setFilteredStays(filtered);
    }
  }, [selectedPeriod]);

  return (
    <>
      <StatusBarSeparator />
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={28} color="black" />
          </TouchableOpacity>
          <PeriodSelector
            selectedPeriod={selectedPeriod}
            onSelect={setSelectedPeriod}
          />
        </View>
        <FlatList
          data={filteredStays}
          renderItem={({ item }) => <StayItem item={item} />}
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
    backgroundColor: '#F8F8F8',
  },
  periodSelectorContainer: {
    position: 'relative',
    zIndex: 1,
  },
  periodSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#FFF',
   
    borderColor: '#E0E0E0',
  },
  periodSelectorText: {
    fontWeight: 'bold',
    marginRight: 5,
    fontSize :18
  },
  periodDropdown: {
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    width: 100,
  },
  periodOption: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  listContainer: {
    padding: 16,
  },
  stayItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
  },
  stayImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  stayInfo: {
    padding: 16,
  },
  stayName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  stayPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFA500',
  },
  stayNight: {
    fontSize: 14,
    color: 'gray',
  },
  stayButton: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  stayButtonText: {
    fontWeight: '600',
  },
});

export default SejourScreen;