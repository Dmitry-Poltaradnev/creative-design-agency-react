import React from 'react';
import styled from "styled-components";
import feedBackFirstImg from '../../../assets/img/feedbackSection1.webp'
import feedBackSecondImg from '../../../assets/img/feedbackSection2.webp'
import {BlockTitle} from "../../../components/blockContent/BlockTitle";
import {FeedBack} from "./feedback/FeedBack";
import {Container} from "../../../components/Container";
import {BlockLine} from "../../../components/blockContent/BlockLine";
import {theme} from "../../../styles/Theme";
import {LinkBtn} from "../../../components/blockContent/LinkBtn";

export const Feedbacks = () => {
    return (
        <StyledFeedbacks>
            <Container>
                <FeedBackWrapper>
                    <FeedBackTitle>WHAT <span>our</span> CLIENTS SAY?</FeedBackTitle>
                    <BlockLine width={'218px'} backColor={theme.colors.accent}/>
                    <BlockTitle color={theme.colors.font}>TESTIMONIALS</BlockTitle>
                    <FeedBack/>
                    <LinkBtn widthLink={'300px'} >VIEW ALL TESTIMONIALS </LinkBtn>
                </FeedBackWrapper>
            </Container>
        </StyledFeedbacks>
    );
};

const FeedBackTitle = styled.h2`
    text-transform: uppercase;
    font-size: calc( (100vw - 360px) / (1920 - 360) * (48 - 36) + 36px);
    font-weight: 700;
    max-width: 500px;
    text-align: center;

    span {
        color: ${theme.colors.accent};
    }
`

const FeedBackWrapper = styled.div`
    padding: 50px 0 200px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    overflow: hidden;

    &:before {
        content: '';
        position: absolute;
        background-image: url("${feedBackFirstImg}");
        width: 652px;
        height: 932px;
        left: -320px;
        top: 0;
        z-index: -1;
    }

    &:after {
        content: '';
        position: absolute;
        background-image: url("${feedBackSecondImg}");
        width: 652px;
        height: 932px;
        right: -300px;
        top: 0;
        z-index: -1;
    }

    @media ${theme.media.tablet} {
        padding-bottom: 50px;
        &:before {
            display: none;
        }

        &:after {
            display: none;
        }
    }
`

const StyledFeedbacks = styled.section`
`
