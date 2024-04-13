import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Achievement} from "./achievement/Achievement";

export const Achievements = () => {
    return (
        <StyledAchievements>
            <FlexWrapper>
                <Achievement/>
                <Achievement/>
                <Achievement/>
                <Achievement/>
            </FlexWrapper>
        </StyledAchievements>
    );
};
const StyledAchievements = styled.div`
    background: linear-gradient(270.00deg, rgb(109, 149, 252) -127.552%, rgba(21, 21, 21, 0.35) 77.969%);
`