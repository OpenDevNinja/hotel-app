import React,{useState} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/colors';
import Iconcon from 'react-native-vector-icons/FontAwesome'; 
const SignUpScreen = () => {
    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => setIsChecked(!isChecked);

    const handleSignup = () => {
        navigation.navigate('Login');
      };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>M</Text>
        <Text style={styles.logoText}>Hotel</Text>
      </View>
      
      <Text style={styles.title}>Créer Un Compte</Text>
      
      <Input 
        placeholder="Nom"
        icon="person-outline"
      />
      <Input 
        placeholder="Email"
        icon="mail-outline"
        keyboardType="email-address"
      />
      <Input 
        placeholder="Mot de passe"
        icon="lock-closed-outline"
        secureTextEntry
      />
      <Input 
        placeholder="Confirmer Mot de passe"
        icon="lock-closed-outline"
        secureTextEntry
      />
        <View style={styles.termsContainer}>
        <TouchableOpacity onPress={toggleCheckbox} style={styles.checkbox}>
          {isChecked && <Icon name="checkmark" size={20} color={Colors.color_blue } />}
        </TouchableOpacity>
        <Text style={styles.termsText}>
        En vous inscrivant, vous acceptez nos Conditions d'utilisation et notre Politique de confidentialité.
        </Text>
      </View>
      
      <Button 
        title="Créer Un Compte"
        onPress={() => {}}
        style={styles.signUpButton}
      />
      
    
      <Text style={styles.orText}>-OU-</Text>
      
      <View style={styles.socialButtonsContainer}>
        <Iconcon name="facebook" size={30} color="#3b5998" />
        <Iconcon name="google" size={30} color="#db4437" />
        <Iconcon name="twitter" size={30} color="#1da1f2" />
      </View>
      
      
      <Text style={styles.loginText}>
      Vous avez déjà un compte ?<Text style={styles.loginLink} onPress={handleSignup}>Se connecter</Text>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  signUpButton: {
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsText: {
    flex: 1,
    color: '#666',
    fontSize: 12,
  },
  loginText: {
    fontSize: 16,
    color: '#333',
  },
  loginLink: {
    color: Colors.color_blue,
    fontWeight: 'bold',
  },
  orText: {
    color: '#999',
    marginVertical: 10,
    fontSize: 16,
    marginTop :0
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 30,
  },
});

export default SignUpScreen;