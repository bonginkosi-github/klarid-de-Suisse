import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// imporing the styled components which wa adopted as the library / dependence
import styled from 'styled-components/native';
import { ScreenHeight } from '../shared';
import { colors } from '../colors';
const { primary, secondary, accent } = colors;


const IconBg = styled.View`
    background-color: ${secondary};
    width: ${ScreenHeight * 0.15}px;
    height: ${ScreenHeight * 0.15}px;
    border-radius: ${ScreenHeight * 0.2}px;
    justify-content: center;
    align-items: center;
    align-self: center;
`;


export default window.IconHeader = ({ name, color, ...props}) => {
    return (
        <IconBg style={{ ...props.style}}>
            <MaterialCommunityIcons name={name} size={ ScreenHeight * 0.08 } color={ color ? color : accent} />
        </IconBg>

        //enabling the component so it can be used as props to other files
    )
}