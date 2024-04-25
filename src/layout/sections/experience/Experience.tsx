import React from 'react';
import {BlockTitle} from "../../../components/blockContent/BlockTitle";
import {BlockSubTitle} from "../../../components/blockContent/BlockSubTitle";
import {LinkBtn} from "../../../components/blockContent/LinkBtn";
import {BlockInfo} from "../../../components/blockContent/BlockInfo";
import {ExperienceReceived} from "./experienceReceived/ExperienceReceived";
import {Container} from "../../../components/Container";
import {BlockLine} from "../../../components/blockContent/BlockLine";
import {theme} from '../../../styles/Theme';
import {S} from './Experience_Styled'

export const Experience = () => {
    return (
        <S.Experience id={'pages'}>
            <Container>
                <S.ExperienceWrapper>
                    <S.ExpInfoWrapper>
                        <BlockTitle>why us?</BlockTitle>
                        <BlockLine backColor={theme.colors.accent}/>
                        <BlockSubTitle>25 years of <span>experience</span> as a creative agency</BlockSubTitle>
                        <LinkBtn>read more</LinkBtn>
                    </S.ExpInfoWrapper>
                    <S.ExpCostumers>
                        <BlockInfo>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque
                            porro
                            elit NeDque porro Lorem ipsum
                        </BlockInfo>
                        <S.ExperiencesReceived>
                            <ExperienceReceived />
                            <ExperienceReceived />
                            <ExperienceReceived />
                        </S.ExperiencesReceived>
                    </S.ExpCostumers>
                </S.ExperienceWrapper>
            </Container>
        </S.Experience>
    );
};

