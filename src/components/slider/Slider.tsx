import React from 'react';
import styled from "styled-components";
import sliderImgFirst from "../../assets/img/projectPhoto1.webp";
import sliderImgSecond from "../../assets/img/projectPhoto2.webp";
import sliderImgThird from "../../assets/img/projectPhoto3.webp";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";

export const Slider = () => {
    return (
        <StyledSlider>
                <FlexWrapper>
                    <Slide>
                        {/*<Photo src={sliderImgFirst} alt={'sliderImg'}/>*/}
                        <Photo src={sliderImgSecond} alt={'sliderImg'}/>
                        {/*<Photo src={sliderImgThird} alt={'sliderImg'}/>*/}
                    </Slide>
                </FlexWrapper>
                <Pagination>
                    <span></span>
                    <span className={'active'}></span>
                    <span></span>
                </Pagination>
        </StyledSlider>
    );
};



const Pagination = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: ${theme.colors.font};
        margin: 30px 5px;
        border-radius: 5px;

        &.active {
            background-color: ${theme.colors.accent};
            width: 25px;
            border-radius: 10px;
        }
    }
`
const StyledSlider = styled.div`
    border: 1px solid red;
`
const Photo = styled.img`
    max-width: 550px;
    width: 100%;    
`
const Slide = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`
