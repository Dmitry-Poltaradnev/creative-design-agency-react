import React from 'react';
import styled from "styled-components";
import {BlockSubTitle} from "../../../components/blockContent/BlockSubTitle";
import sliderImg from '../../../assets/img/projectPhoto2.webp'
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <FlexWrapper direction={'column'} align={'center'} gap={'50px'} >
                    <BlockSubTitle >ENJOY OUR <span>LATEST</span> PROJECTS </BlockSubTitle>
                    <ProjectTitle>OUR WORK</ProjectTitle>
                </FlexWrapper>
                <Photo src={sliderImg} alt={'sliderImg'}/>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.div`
    text-align: center;
    padding: 100px 0 80px;
`
const Photo = styled.img`

`
const ProjectTitle = styled.h2`
    padding: 0 120px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 21px;
    color: ${theme.colors.accent};
    position: relative;
    max-width: 400px;
    margin-bottom: 50px;

    &:before {
        position: absolute;
        height: 3px;
        background-color: ${theme.colors.font};
        content: '';
        width: 97px;
        left: 0;
        bottom: 50%;
    }

    &:after {
        right: 0;
        bottom: 50%;
        position: absolute;
        height: 3px;
        background-color: ${theme.colors.font};
        content: '';
        width: 97px;
    }
`