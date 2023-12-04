import React, { useState } from 'react';
import { View } from 'react-native';
import  { MaterialCommunityIcons } from '@expo/vector-icons';

// styled components
import styled from 'styled-components/native';
import { colors } from '../colors';
const {  lighGray, pink, lightGrey } = colors;
import SmallText from '../Texts/SmallText';

const InputField = styled.TextInput`
    background-color: ${lighGray};
    padding: 15px;
    padding-left: 65px;
    padding-right: 55px;
    border-radius: 10px;
    font-size: 16px;
    height: 60px;
    margin-top: 3px;
    margin-bottom: 10px;
    color: ${lighGray};
    border-color: ${pink};
    border-width: 2px;
`;

const LeftIcon = styled.View`
    position: absolute;
    top: 35px;
    left: 15px;
    z-index: 1;
    border-right-width: 2px;
    border-color: ${pink};
    padding-right: 10px;
`;


const RightIcon = styled.TouchableOpacity`
    position: absolute;
    top: 35px;
    right: 15px;
    z-index: 1;
`;

export default window.StyledTextInput = ({icon, label, isPassword, ...props}) => {

    const [inputBackgroundColor, setInputBackgroundColor] = useState(lightGrey);
    const [hidePassword, setHidePassword] = useState(true);

    const customOnBlur = () => {
        props?.onBlur;
        setInputBackgroundColor(lightGrey);
    }

    const customOnFocus = () => {
        props?.onFocus;
        setInputBackgroundColor(lightGrey);
    }

    return (
        <View>
            <LeftIcon>
                <MaterialCommunityIcons name={icon} size={30} color={pink} />
            </LeftIcon>
                <SmallText>{label}</SmallText>
            <InputField 
                {...props}
                placeholderTextColor={lighGray}
                style={{ backgroundColor: inputBackgroundColor, ...props?.style}}
                onBlur={customOnBlur}
                onFocus={customOnFocus}
                secureTextEntry={isPassword && hidePassword} //checking if is it available if so then hide the password
            />

            {isPassword && 
                <RightIcon onPress={() => {
                    setHidePassword(!hidePassword);
                }}> 
                    <MaterialCommunityIcons name={hidePassword ? 'eye-off' : 'eye'} size={25} color={lighGray} />
                </RightIcon>
            }
        </View>
    )
}