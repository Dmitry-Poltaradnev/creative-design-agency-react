import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

export const Achievement = () => {
    return (
        <StyledAchievement>
            <Icon iconId={'achievements2'}/>
            <p>50+</p>
            <h3>Happy customers</h3>
        </StyledAchievement>
    );
};
const StyledAchievement = styled.div`

`
