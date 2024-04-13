import React from 'react';
import styled from "styled-components";
import {BlockSubTitle} from "../../../components/blockContent/BlockSubTitle";
import {BlockTitle} from "../../../components/blockContent/BlockTitle";
import sliderImg from '../../../assets/img/projectPhoto1.webp'

export const Projects = () => {
    return (
        <StyledProjects>
            <BlockSubTitle>ENJOY OUR <span>LATEST</span> PROJECTS </BlockSubTitle>
            <BlockTitle>OUR WORK</BlockTitle>
            <Photo src={sliderImg} alt={'sliderImg'}/>
        </StyledProjects>
    );
};

const StyledProjects = styled.div`

`
const Photo = styled.img`

`