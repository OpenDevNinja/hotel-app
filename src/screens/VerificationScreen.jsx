import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import GoBack from '../components/GoBack';
const VerificationScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState(['', '', '', '']);

  const handleNumberPress = (number) => {
    const newCode = [...code];
    const emptyIndex = newCode.findIndex(digit => digit === '');
    if (emptyIndex !== -1) {
      newCode[emptyIndex] = number;
      setCode(newCode);
    }
  };

  const handleDelete = () => {
    const newCode = [...code];
    const lastFilledIndex = newCode.findLastIndex(digit => digit !== '');
    if (lastFilledIndex !== -1) {
      newCode[lastFilledIndex] = '';
      setCode(newCode);
    }
  };

  const renderKeypadButton = (number, letters = '') => (
    <TouchableOpacity
      key={number}
      style={styles.keypadButton}
      onPress={() => handleNumberPress(number)}
    >
      <Text style={styles.keypadButtonNumber}>{number}</Text>
      <Text style={styles.keypadButtonLetters}>{letters}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
    <GoBack/>
      <View style={styles.content}>
        <Text style={styles.title}>Verification</Text>
        <Text style={styles.subtitle}>Un code PIN à 4 chiffres a été envoyé à votre téléphone. Veuillez le saisir ci-dessous pour continuer.</Text>
        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <View key={index} style={[styles.codeInput, digit ? styles.codeInputFilled : null]}>
              {digit ? <Text style={styles.codeDigit}>{digit}</Text> : null}
            </View>
          ))}
        </View>
        <Button
          title="Vérifier"
          onPress={() => navigation.navigate('Home')}
          style={styles.signInButton}
        />



        <TouchableOpacity>
          <Text style={styles.resendText}>Renvoyer le code ?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.keypad}>
        {renderKeypadButton('1', 'ABC')}
        {renderKeypadButton('2', 'DEF')}
        {renderKeypadButton('3', 'GHI')}
        {renderKeypadButton('4', 'JKL')}
        {renderKeypadButton('5', 'MNO')}
        {renderKeypadButton('6', 'PQR')}
        {renderKeypadButton('7', 'STU')}
        {renderKeypadButton('8', 'VWX')}
        {renderKeypadButton('9', 'YZ')}
        <View style={styles.keypadButton} />
        {renderKeypadButton('0')}
        <TouchableOpacity style={styles.keypadButton} onPress={handleDelete}>
          <Ionicons name="backspace-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  backButton: {
    padding: 5,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
    paddingHorizontal: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  signInButton: {
    width: '80%',
    marginBottom: 20,
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeInputFilled: {
    borderColor: '#0066CC',
  },
  codeDigit: {
    fontSize: 24,
    color: '#0066CC',
  },
  confirmButton: {
    backgroundColor: '#0066CC',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendText: {
    color: '#0066CC',
    fontSize: 16,
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  keypadButton: {
    width: '33.33%',
    aspectRatio: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keypadButtonNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  keypadButtonLetters: {
    fontSize: 12,
    color: '#666',
  },
});

export default VerificationScreen;