import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../../../src/screens/SignInScreen';
import SignUpScreen from '../../../src/screens/SignUpScreen';
import LindoMenuScreen from '../../../src/screens/LindoMenuScreen';
import PaymentViewScreen from '../../../src/screens/PaymentViewScreen';
import ScanningScreen from '../../../src/screens/ScanningScreen'
import LindoApp from '../../../LindoApp';
import DetailsScreen from '../../../src/screens/DetailsScreen';
import MyCart from '../../../src/screens/LindoMyCartsScreen';

import ForgetPasswordScreen from '../../../src/screens/ForgetPasswordScreen';
import ProfileScreen from '../../../src/screens/ProfileScreen/ProfileScreen';
import OilyRecommendation from '../../screens/RecommendationScreens/OilyRecommendation';
import DryRecommendation from '../../screens/RecommendationScreens/DryRecommendation';
import SpotsRecommendation from '../../screens/RecommendationScreens/SpotsRecommendation';
import Search from '../../screens/SearchScreen'
import EditProfileScreen from '../../screens/EditProfileScreen'

//Enable the stack navigator for pages
const Stack = createNativeStackNavigator();

export default window.Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false,
                    }}
                    initialRouteName={'SignUp'}
                >

                <Stack.Screen 
                    name="SignIn" 
                    component={SignInScreen} 
                />

                <Stack.Screen 
                    name="SignUp" 
                    component={SignUpScreen} 
                />

                <Stack.Screen 
                    name='LindoMenuScreen'
                    component={LindoApp}
                />

                <Stack.Screen 
                    name='Home'
                    component={LindoMenuScreen}
                />

                <Stack.Screen 
                    name='Details'
                    component={DetailsScreen}
                />
                 
                <Stack.Screen 
                    name='Cart'
                    component={MyCart}
                />

                <Stack.Screen 
                    name="ProductScreen"
                    component={LindoApp}
                />

                <Stack.Screen 
                    name="PaymentViewScreen"
                    component={PaymentViewScreen}
                />

                <Stack.Screen 
                    name="Scan"
                    component={ScanningScreen}
                />

                <Stack.Screen 
                    name="Forget"
                    component={ForgetPasswordScreen}
                />

                <Stack.Screen
                    name="Oily"
                    component={OilyRecommendation}
                />
                <Stack.Screen
                    name="ProfileScreen"
                    component={ProfileScreen}
                />
                <Stack.Screen
                    name="Dry"
                    component={DryRecommendation}
                />
                <Stack.Screen
                    name="Spots"
                    component={SpotsRecommendation}
                />
                <Stack.Screen
                    name="Search"
                    component={Search}
                />

                <Stack.Screen
                    name="EditProfile"
                    component={EditProfileScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
