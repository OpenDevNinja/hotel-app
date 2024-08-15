import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import Button from '../components/Button';
import Colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input';
const LoginScreen = () => {
    const navigation = useNavigation();
    const handleSignup = () => {
        navigation.navigate('Signup');
      };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>M</Text>
        <Text style={styles.logoText}>Hotel</Text>
      </View>
      
      <Text style={styles.welcomeText}>Welcome back!</Text>
      
      <Input 
        placeholder="Email"
        icon="mail-outline"
        keyboardType="email-address"
         autoCapitalize="none"
        
      />
      <Input 
        placeholder="Mot de passe"
        icon="lock-closed-outline"
         autoCapitalize="none"
        secureTextEntry
      />
      
      <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      
      <Button 
        title="Se Connecter"
        onPress={() =>  navigation.navigate('Verification')}
        style={styles.signInButton}
      />
      
      <Text style={styles.orText}>-OU-</Text>
      
      <View style={styles.socialButtonsContainer}>
        <Icon name="facebook" size={30} color="#3b5998" />
        <Icon name="google" size={30} color="#db4437" />
        <Icon name="twitter" size={30} color="#1da1f2" />
      </View>
      
      <Text style={styles.signUpText}>
      Vous n'avez pas de compte ? <Text style={styles.signUpLink}  onPress={handleSignup}>Créer un compte</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f0f0f0',
    },
    logoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,
    },
    logo: {
      fontSize: 40,
      fontWeight: 'bold',
      color: Colors.color_blue,
      backgroundColor: '#fff',
      width: 60,
      height: 60,
      borderRadius: 30,
      textAlign: 'center',
      lineHeight: 60,
      marginRight: 10,
    },
    logoText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: Colors.color_blue,
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 30,
      color: '#333',
    },
    input: {
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      paddingHorizontal: 15,
      marginBottom: 15,
      fontSize: 16,
      backgroundColor: '#fff',
    },
    forgotPassword: {
      alignSelf: 'flex-end',
      color: Colors.color_blue,
      marginBottom: 20,
    },
    signInButton: {
      width: '100%',
      marginBottom: 20,
    },
    orText: {
      color: '#999',
      marginVertical: 20,
      fontSize: 16,
    },
    socialButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '60%',
      marginBottom: 30,
    },
    signUpText: {
      fontSize: 16,
      color: '#333',
    },
    signUpLink: {
      color: Colors.color_blue,
      fontWeight: 'bold',
    },
  });

export default LoginScreen;