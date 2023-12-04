import React from 'react';

import styled from 'styled-components/native';
import { StatusBarHeight } from '../shared';
import { colors } from '../../../src/components/colors';
const { white } = colors;


const StyledView = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 60}px;
    background-color: ${white};
`

export default window.MainContainer = (props) => {
    return (
        <StyledView {...props}>
            {props.children}
        </StyledView>
    )
}