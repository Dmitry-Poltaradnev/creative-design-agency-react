import React from 'react';
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from './Projects_Styled'
import {Slider} from "../../../components/slider/Slider";

export const Projects = () => {
    return (
        <S.Projects>
            <Container>
                <FlexWrapper direction={'column'} align={'center'} gap={'50px'} >
                    <S.ProjectsTitle>ENJOY OUR <span>LATEST</span> PROJECTS </S.ProjectsTitle>
                    <S.ProjectTitle>OUR WORK</S.ProjectTitle>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};

