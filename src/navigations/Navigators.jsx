import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import VerificationScreen from '../screens/VerificationScreen';

import HotelsDetailScreen from '../screens/hotelsDetailScreen';
import RoomScreenDetails from '../screens/RoomScreenDetails';
import MainNavigator from './MyDrawer';
import SearchScreen from '../screens/SearchScreen';
import ChooseRoom from '../screens/ChooseRoom';
import DateSelector from '../screens/CalendarScreen';
import ReserverNow from '../screens/ReserverNow';
import PaymentMethod from '../screens/PaymentMethod';


const Stack = createStackNavigator();

const Navigators = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
                 <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignUpScreen} />
                <Stack.Screen name="Verification" component={VerificationScreen} />
                 <Stack.Screen name="Home" component={MainNavigator} />
                
                <Stack.Screen name="Detail" component={HotelsDetailScreen} />
                <Stack.Screen name="RoomDetails" component={RoomScreenDetails} />
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="Choose" component={ChooseRoom} />
                <Stack.Screen name="Periode" component={DateSelector} />
                <Stack.Screen name="ReserverNow" component={ReserverNow} />
                <Stack.Screen name="PayMethod" component={PaymentMethod} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigators

