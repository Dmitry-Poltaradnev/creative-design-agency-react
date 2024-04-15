import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Achievement} from "./achievement/Achievement";
import {Container} from "../../../components/Container";

export const Achievements = () => {
    return (
        <StyledAchievements>
            <Container>
                <FlexWrapper justify={'space-around'} align={'center'}
                             wrap={'wrap'}>
                    <Achievement/>
                    <Achievement/>
                    <Achievement/>
                    <Achievement/>
                </FlexWrapper>
            </Container>
        </StyledAchievements>
    );
};
const StyledAchievements = styled.div`
    background: linear-gradient(270.00deg, rgb(109, 149, 252) -127.552%, rgba(21, 21, 21, 0.35) 77.969%);
    padding: 80px 0;
`