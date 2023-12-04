import React from 'react';

//styled component
import styled from 'styled-components/native';


const StyledView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
`;

export default window.RowContainer = (props) => {
    return (
        <StyledView {...props}>
            {props.children}
        </StyledView>
    )
}