import React from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import Colors from '../constants/colors';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const StatusBarSeparator = () => {
  return <View style={styles.statusBarSeparator} />;
};

const styles = StyleSheet.create({
  statusBarSeparator: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: Colors.color_white, 
  },
});

export default StatusBarSeparator;