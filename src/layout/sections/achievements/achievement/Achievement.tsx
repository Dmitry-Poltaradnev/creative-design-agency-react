import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";

export const Achievement = () => {
    return (
        <StyledAchievement>
            <Icon iconId={'achievements2'}/>
            <StyledAchievementCounter>50+</StyledAchievementCounter>
            <StyledAchievementTitle>Happy customers</StyledAchievementTitle>
        </StyledAchievement>
    );
};
const StyledAchievement = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    

`
const StyledAchievementCounter = styled.p`
    font-size: 64px;
    font-weight: 700;
    letter-spacing: 0;
    text-align: center;
    line-height: 1.3;
`
const StyledAchievementTitle = styled.h3`
    font-weight: 300;
    color: ${theme.colors.accent};
    font-size: 21px;
`
