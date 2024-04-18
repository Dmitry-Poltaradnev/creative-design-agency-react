import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";

export const ExperienceReceived = () => {
    return (
        <StyledExperienceReceived>
            <Icon height={'21'} width={'21'} viewBox={'0 0 21 21'} iconId={'tick'}/>
            <ExperienceTitle>Happy Customer</ExperienceTitle>
        </StyledExperienceReceived>
    );
};

const StyledExperienceReceived = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 20px;
    @media ${theme.media.mobile} {
        margin: 10px 0 ;        
    }
`
const ExperienceTitle = styled.p`
    font-size: calc( (100vw - 360px) / (1920 - 360) * (21 - 18) + 18px);
`
