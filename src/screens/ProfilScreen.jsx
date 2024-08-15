import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const AccountScreen = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const toggleAccordion = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const renderAccordionItem = (title, icon, content) => (
    <View style={styles.accordionItem}>
      <TouchableOpacity style={styles.accordionHeader} onPress={() => toggleAccordion(title)}>
        <Ionicons name={icon} size={24} color="#4A4A4A" />
        <Text style={styles.accordionTitle}>{title}</Text>
        <Ionicons 
          name={expandedSection === title ? 'chevron-up' : 'chevron-down'} 
          size={24} 
          color="#4A4A4A" 
        />
      </TouchableOpacity>
      {expandedSection === title && (
        <View style={styles.accordionContent}>
          <Text>{content}</Text>
        </View>
      )}
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}></Text>
        </View>
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image
              source={profileImage ? { uri: profileImage } : require('../assets/boan.jpeg')}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editImageButton} onPress={pickImage}>
              <Ionicons name="camera" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Dev ToyB.</Text>
            <Text style={styles.userEmail}>devtoyb@gmail.com</Text>
          </View>
        </View>

        {renderAccordionItem('Informations personnelles', 'person-outline', 'Edit your personal details here.')}
        {renderAccordionItem('Notifications', 'notifications-outline', 'Manage your notification settings.')}
        {renderAccordionItem('Paiements', 'card-outline', 'View and update your payment methods.')}
        {renderAccordionItem('Paramètres', 'settings-outline', 'Adjust app settings and preferences.')}


        <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={24} color="#FF3B30" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    backgroundColor: '#1E3D59',
    padding: 20,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileSection: {
    backgroundColor: '#1E3D59',
    padding: 20,
    alignItems: 'center',
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  editImageButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#FFA500',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfo: {
    alignItems: 'center',
    marginTop: 10,
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  userEmail: {
    color: '#E0E0E0',
    fontSize: 14,
  },
  accordionItem: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
  accordionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  accordionTitle: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
  },
  accordionContent: {
    padding: 15,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
  },
  logoutText: {
    color: '#FF3B30',
    marginLeft: 15,
    fontSize: 16,
  },
});

export default AccountScreen;