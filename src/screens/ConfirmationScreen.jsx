import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

const ConfirmationScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.conteneur}>
      <View style={styles.contenu}>
        <View style={styles.conteneurImage}>
          <Image
            source={require('../assets/confirm.png')} // Assurez-vous d'avoir cette image dans votre dossier assets
            style={styles.image}
          />
        </View>
        <Text style={styles.titre}>Réservation réussie</Text>
        <Text style={styles.sousTitre}>Vous pouvez maintenant consulter les détails de votre réservation dans vos voyages à venir</Text>
        <TouchableOpacity
         onPress={() =>  navigation.navigate('Sejour')}
        style={styles.bouton}>
          <Text style={styles.texteBouton}>Terminé</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conteneur: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contenu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  conteneurImage: {
    marginBottom: 30,
  },
  image: {
    width: 120,
    height: 120,
  },
  titre: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color:Colors.color_blue,
  },
  sousTitre: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  bouton: {
    backgroundColor: Colors.color_blue,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  texteBouton: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ConfirmationScreen;