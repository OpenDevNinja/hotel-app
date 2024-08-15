import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';

import LocationScreen from '../screens/LocationScreen';
import ReservationScreen from '../screens/ReservationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import TabNavigator from './TabLayout';
import Colors from '../constants/colors';

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#0047AB',
          width: 240,
        },
        drawerActiveBackgroundColor: 'rgba(255,255,255,0.1)',
        drawerActiveTintColor: '#ffffff',
        drawerInactiveTintColor: Colors.color_bclair,
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}
    >
      <Drawer.Screen
        name="HomeTab"
        component={TabNavigator}
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Localisation"
        component={LocationScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="location-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Réservations"
        component={ReservationScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="calendar-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="notifications-outline" color={color} size={size} />
          ),
        }}
      />
     
      
    </Drawer.Navigator>
  );
};

export default MainNavigator;