import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/colors';

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
            <View style={styles.userInfoSection}>
                <Image
                    source={require("../assets/boan.jpeg")}
                    style={styles.userImage}
                />
                <Text style={styles.userName}>Dev ToyB.</Text>
                <Text style={styles.userEmail}>devtoyb@gmail.com</Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Déconnexion"
                onPress={() => { /* Implementer la logique de déconnexion */ }}
                icon={({ color, size }) => (
                    <Icon name="log-out-outline" color={Colors.color_bclair} size={size} />
                )}
                labelStyle={{ color: Colors.color_bclair, marginLeft: -16 }} 
            />
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.3)',
        marginBottom: 10,
        alignItems: 'center',
    },
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginBottom: 10,
    },
    userName: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    userEmail: {
        color: '#ffffff',
        fontSize: 14,
    },
});

export default CustomDrawerContent;