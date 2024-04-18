import React from 'react';
import styled from "styled-components";
import {BlockTitle} from "../../../components/blockContent/BlockTitle";
import {BlockSubTitle} from "../../../components/blockContent/BlockSubTitle";
import {LinkBtn} from "../../../components/blockContent/LinkBtn";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {BlockInfo} from "../../../components/blockContent/BlockInfo";
import {ExperienceReceived} from "./experienceReceived/ExperienceReceived";
import {Container} from "../../../components/Container";
import {BlockLine} from "../../../components/blockContent/BlockLine";
import { theme } from '../../../styles/Theme';

export const Experience = () => {
    return (
        <StyledExperience>
            <Container>
                <ExperienceFlexWrapper>
                    <ExpInfoWrapper>
                        <BlockTitle>why us?</BlockTitle>
                        <BlockLine backColor={theme.colors.accent}/>
                        <BlockSubTitle>25 years of <span>experience</span> as a creative agency</BlockSubTitle>
                        <LinkBtn>read more</LinkBtn>
                    </ExpInfoWrapper>
                    <ExpCostumers>
                        <BlockInfo>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque
                            porro
                            elit NeDque porro Lorem ipsum
                        </BlockInfo>
                        <ExperiencesReceived>
                            <ExperienceReceived/>
                            <ExperienceReceived/>
                            <ExperienceReceived/>
                        </ExperiencesReceived>
                    </ExpCostumers>
                </ExperienceFlexWrapper>
            </Container>
        </StyledExperience>
    );
};

const ExperienceFlexWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    @media ${theme.media.tablet} {
        flex-direction: column;
        gap: 50px;
    }
`

const StyledExperience = styled.section`
    background: linear-gradient(12.46deg, rgba(109, 149, 252, 0.24) 11.025%, rgba(21, 21, 21, 0) 90.87%);
    padding: 40px 0;
`
const ExpCostumers = styled.div`
    width: 50%;
    @media ${theme.media.tablet}{
        width: 85%;
    }
`
const ExperiencesReceived = styled.div`
    margin-top: 30px;
    
`
const ExpInfoWrapper = styled.div`
    flex-direction: column;
    display: flex;
    gap: 35px;
    width: 50%;
    @media ${theme.media.tablet} {
        align-items: center;
        width: 85%;
    }
`