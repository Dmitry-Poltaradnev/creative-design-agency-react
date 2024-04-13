import React from 'react';
import styled from "styled-components";
import icons from '../../../../assets/img/icons-sprite.svg';

export const ExperienceReceived = () => {
    return (
        <StyledExperienceReceived>
            <svg width="25" height="25">
                <use xlinkHref={`${icons}#tick`}/>
            </svg>
            Happy Customer
        </StyledExperienceReceived>
    );
};

const StyledExperienceReceived = styled.div`
`;
