import React, { useState } from 'react';
import { Text } from 'react-native'
import { Formik } from 'formik';
import { Alert } from 'react-native';
import { colors } from '../../components/colors';
const { primary } = colors;

// custom components
import MainContainer from '../../components/Containers/MainContainer';
import KeyboardAvoidingContainer from '../../components/Containers/KeyboardAvoidingContainer';
import RegularText from '../../components/Texts/RegularText';
import StyledTextInput from '../../components/Inputs/StyledTextInput';
import RegularButton from '../../components/Buttons/RegularButton';
import PressableText from '../../components/Texts/PressableText';

import 'firebase/firestore'
import * as firebase from 'firebase'
import apiKeys from '../../../firestoreConfig/keys'

import { 
    isValidObject,
    updateError
} from '../../components/Validation/ValidationMethod';

export default window.ForgetPassword = ({navigation}) => {

    if (!firebase.apps.length) {
        console.log("Connection of database activated");
        firebase.initializeApp(apiKeys.firebaseConfig);
    }

    const [ userInfo, setUserInfo ] = useState({
        Email
    })

    const [ error, setError ] = useState('');

    const { Email } = userInfo;

    const handleChange = ( value, fieldName ) => {
        setUserInfo({
            ...userInfo, [fieldName] : value
        })
    }

    const isValidForm = () => {
        if(!isValidObject(userInfo)) {
            return updateError('All fields are required*', setError);
        }
        return true;
    }

    const goBackSignIn = () => {
        navigation.navigate('SignIn')
    }

    const NewPasswordPress = async () => {
        if(isValidForm()) {
            try 
            {
                await firebase.auth().sendPasswordResetEmail(Email).then(function(){
                  Alert.alert("Please check your email to follow the instructions to reset your password")
                })   
            } catch (err) {
                Alert.alert("Oop :) ", "There is something wrong!!!!" + " " + err.message);
            }
        }
    }

    return (
        <MainContainer>
            <KeyboardAvoidingContainer>
                <RegularText style={{ marginBottom: 25}}>Reset your password</RegularText>

                <Formik>
                    <>
                        <StyledTextInput 
                            label="Email Address" 
                            icon="email-variant"
                            placeholder="Enter your email ..."
                            keyboardType="email-address"
                            onChangeText={(value) => (handleChange(value, 'Email'))}
                            value={Email}
                            style={{marginBottom: 20}}
                            autoCapitalize="none"
                        />

                        {error ? <Text style={{ color: 'red',
                        fontSize: 18, textAlign: 'center'}}>{error}</Text> : null}

                        <RegularButton 
                            onPress={NewPasswordPress}
                        >
                            Reset
                        </RegularButton>

                        <PressableText style={{ paddingVertical: 15 }} onPress={goBackSignIn}>Go Back</PressableText>
                    </>
                </Formik>
            </KeyboardAvoidingContainer>
        </MainContainer>
    )
}
