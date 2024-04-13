import React from 'react';
import styled from "styled-components";
import {BlockTitle} from "../../../components/blockContent/BlockTitle";
import {BlockSubTitle} from "../../../components/blockContent/BlockSubTitle";
import {LinkBtn} from "../../../components/blockContent/LinkBtn";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {BlockInfo} from "../../../components/blockContent/BlockInfo";
import {ExperienceReceived} from "./experienceReceived/ExperienceReceived";

export const Experience = () => {
    return (
        <StyledExperience>
            <FlexWrapper align={'center'} justify={'space-between'}>
                <div>
                    <BlockTitle>why us?</BlockTitle>
                    <BlockSubTitle>25 years of <span>experience</span> as a creative agency</BlockSubTitle>
                    <LinkBtn>read more</LinkBtn>
                </div>
                <div>
                    <BlockInfo>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro
                        elit NeDque porro Lorem ipsum
                    </BlockInfo>
                    <ExperiencesReceived>
                        <ExperienceReceived/>
                        <ExperienceReceived/>
                        <ExperienceReceived/>
                    </ExperiencesReceived>
                </div>
            </FlexWrapper>
        </StyledExperience>
    );
};

const StyledExperience = styled.div`
`
const ExperiencesReceived = styled.div`
    background: linear-gradient(192.46deg, rgba(109, 149, 252, 0.24) 11.025%,rgba(21, 21, 21, 0) 90.87%);
`
