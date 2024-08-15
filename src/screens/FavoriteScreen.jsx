import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

import HotelScreen from './HotelScreen'
import StatusBarSeparator from '../components/StatusBarSeparator'

const FavoriteScreen = () => {
  return (
    <>

      <StatusBarSeparator />
      <SafeAreaView style={styles.container}>
        <HotelScreen />
      </SafeAreaView>

    </>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 10

  },
})