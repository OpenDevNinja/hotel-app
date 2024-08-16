import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Animated, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import HomeScreen from '../screens/HomeScreen';

import SejourScreen from '../screens/SejourScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ProfilScreen from '../screens/ProfilScreen';
import Colors from '../constants/colors';
import HotelSearchScreen from '../screens/HotelSearchScreen';

const Tab = createBottomTabNavigator();

const ICON_SIZE = 24;
const LABEL_SIZE = 12;
const ACTIVE_COLOR = Colors.color_blue; // Tomato
const INACTIVE_COLOR = Colors.color_gay; // Gray

const TabNavigator = () => {
  const getIconName = (routeName, focused) => {
    const icons = {
      Home: focused ? 'home' : 'home-outline',
      Recherche: focused ? 'search' : 'search-outline',
      Sejour: focused ? 'calendar' : 'calendar-outline',
      Favorite: focused ? 'heart' : 'heart-outline',
      Profil: focused ? 'person' : 'person-outline',
    };
    return icons[routeName] || 'circle';
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => (
          <Ionicons
            name={getIconName(route.name, focused)}
            size={ICON_SIZE}
            color={color}
          />
        ),
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          height: Platform.OS === 'ios' ? 90 : 70,
        },
        tabBarLabel: ({ focused, color }) => (
          <Animated.Text
            style={{
              color,
              fontSize: LABEL_SIZE,
              fontWeight: focused ? 'bold' : 'normal',
              marginBottom: 5,
            }}
          >
            {route.name}
          </Animated.Text>
        ),
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Recherche" component={HotelSearchScreen} />
      <Tab.Screen name="Sejour" component={SejourScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Profil" component={ProfilScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;