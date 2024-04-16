import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

export const ExperienceReceived = () => {
    return (
        <StyledExperienceReceived>
            <Icon height={'21'} width={'21'} viewBox={'0 0 21 21'} iconId={'tick'}/>
            <p>Happy Customer</p>
        </StyledExperienceReceived>
    );
};

const StyledExperienceReceived = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 20px;
`
