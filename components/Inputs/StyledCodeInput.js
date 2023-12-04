import React, { useRef, useState } from 'react';

//styled component
import styled from 'styled-components/native';
import { StatusBarHeight } from '../shared';
import { colors } from '../../../src/components/colors';
const { primary, secondary, tertiary, accent } = colors;


const CodeInputSection = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-vertical: 35px;
`;

const HiddenTextInput = styled.TextInput`
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
`;

const CodeInputsContainer = styled.Pressable`
    width: 70%;
    flex-direction: row;
    justify-content: space-between;
`;

const CodeInput = styled.View`
    min-width: 15%;
    padding: 12px;
    border-bottom-width: 5px;
    border-radius: 18px;
    border-color: ${secondary};
`;

const CodeInputText = styled.Text`
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    color: ${tertiary};
`;

const CodeInputFocused = styled(CodeInput)`
    border-color: ${accent};
`;

export default window.StyledCodeInput = ({code, setCode, maxLength, setPinReady}) => {

    const codeDigitsArray = new Array(maxLength).fill(0);

    const [ inputContainerIsFocused, setInputContainerIsFocused ] = useState(false);

    //ref for text input
    const textInputRef = useRef(null);

    const handleOnSubmitEditing = () => {
        setInputContainerIsFocused(false);
    }

    React.useEffect(() => {
        // toggle pinReady
        setPinReady(code.length === maxLength);

        // since the state is on a different file set function to false
        return () => setPinReady(false);
    }, [code])

    const handleOnPress = () => {
        //enabling the state which initial was set to false state
        setInputContainerIsFocused(true);
        // current property refers to the text input
        textInputRef?.current?.focus();
    }

    // targeting the value of the code/ digitis, if it is null then retuen nothing
    const toCodeDigitInput = (value, index) => {
        const emptyInputChar = ' ';

        const digit = code[index] || emptyInputChar;

        //formtting: checking if it references to an accurate index or child in codes/digits
        const isCurrentDigit = index === code.length;
        const isLastDigit = index === maxLength - 1;

        // preventing to accept more code/digits than needed.
        const isCodeFull = code.length === maxLength;
        const isDigiFocused = isCurrentDigit || (isLastDigit && isCodeFull);

        const StyledCodeInput = inputContainerIsFocused && isDigiFocused ? CodeInputFocused : CodeInput

        //return the code inputs by using the key for accuracy or to identify the children
        return (
            <StyledCodeInput key={index}>
                <CodeInputText>{digit}</CodeInputText>
            </StyledCodeInput>
        )
    }

    return(
        <CodeInputSection>
            <CodeInputsContainer onPress={handleOnPress}>{ codeDigitsArray.map(toCodeDigitInput) }</CodeInputsContainer>
            <HiddenTextInput 
                keyboardType="number-pad"
                returnKeyType="done"
                textContentType="oneTimeCode"
                ref={textInputRef}
                value={code}
                onChangeText={setCode}
                maxLength={maxLength}
                onSubmitEditing={handleOnSubmitEditing}
            />
        </CodeInputSection>
    )
}