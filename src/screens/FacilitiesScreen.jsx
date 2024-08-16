import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StatusBarSeparator from '../components/StatusBarSeparator';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/colors';

const equipements = [
  { nom: 'Terrasse privée', icone: 'checkbox-blank-circle-outline' },
  { nom: 'Wifi inclus', icone: 'wifi' },
  { nom: 'Meublé', icone: 'sofa' },
  { nom: 'Ascenseur', icone: 'elevator' },
  { nom: 'Gardien', icone: 'account' },
  { nom: 'Climatisation', icone: 'air-conditioner' },
  { nom: 'Chauffage', icone: 'radiator' },
  { nom: 'Lave-linge', icone: 'washing-machine' },
  { nom: 'Salle de sport', icone: 'dumbbell' },
  { nom: 'TV', icone: 'television' },
  { nom: 'Lave-vaisselle', icone: 'dishwasher' },
  { nom: 'Balcon', icone: 'balcony' },
  { nom: 'Parquet', icone: 'floor-plan' },
  { nom: 'Animaux acceptés', icone: 'paw' },
  { nom: 'Local à vélos', icone: 'bike' },
];

const FacilitiesScreen = () => {
    const navigation = useNavigation();
  return (
    <>
    <StatusBarSeparator/>
    <View style={styles.conteneur}>
      <Text style={styles.entete}>Équipements & Services</Text>
      <ScrollView contentContainerStyle={styles.grilleEquipements}>
        {equipements.map((equipement, index) => (
          <View key={index} style={styles.itemEquipement}>
            <Icon name={equipement.icone} size={24} color={Colors.color_blue} />
            <Text style={styles.texteEquipement}>{equipement.nom}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
         onPress={() => navigation.goBack()}

      style={styles.boutonTermine}>
        <Text style={styles.texteBoutonTermine}>TERMINÉ</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  conteneur: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  entete: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color:Colors.color_blue
  },
  grilleEquipements: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemEquipement: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  texteEquipement: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 12,
  },
  boutonTermine: {
    backgroundColor: Colors.color_blue,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  texteBoutonTermine: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FacilitiesScreen;