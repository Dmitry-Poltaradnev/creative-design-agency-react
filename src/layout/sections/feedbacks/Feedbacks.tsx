import React from 'react';
import styled from "styled-components";
import feedBackFirstImg from '../../../assets/img/feedbackSection1.webp'
import feedBackSecondImg from '../../../assets/img/feedbackSection2.webp'
import {BlockSubTitle} from "../../../components/blockContent/BlockSubTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {BlockTitle} from "../../../components/blockContent/BlockTitle";
import {FeedBack} from "./feedback/FeedBack";

export const Feedbacks = () => {
    return (
        <StyledFeedbacks>
            <FlexWrapper>
                <Photo src={feedBackFirstImg} alt='feedBackImg'/>
                <FlexWrapper align={'center'}
                             direction={'column'} justify={'center'}>
                    <BlockSubTitle>WHAT <span>our</span> CLIENTS SAY?</BlockSubTitle>
                    <BlockTitle>TESTIMONIALS</BlockTitle>
                    <FeedBack/>
                </FlexWrapper>
                <Photo src={feedBackSecondImg} alt='feedBackImg'/>
            </FlexWrapper>

        </StyledFeedbacks>
    );
};

const StyledFeedbacks = styled.div`
`
const Photo = styled.img`
    width: 652px;
    height: 932px;
`