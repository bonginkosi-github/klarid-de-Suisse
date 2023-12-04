import React from 'react';
import {
    KeyboardAvoidingView,
    Keyboard,
    ScrollView,
    Pressable,
    Platform
} from 'react-native';

export default window.KeyboardAvoidingContainer = (props) => {
    return(
        <KeyboardAvoidingView
            style={{
                flex: 1,
                backgroundColor: 'transparent'
            }}
            behavior={
                Platform.OS === 'iso' ? 'padding' : 'height' // working for both systems
            }
            keyboardVerticalOffset={40} // sizing the appearance of the keyboard
        >
            <ScrollView showsHorizontalScrollIndicator={false}>
                <Pressable onPress={Keyboard.dismiss}>{props.children}</Pressable>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}