import React from 'react';
import {BlockTitle} from "../../../components/blockContent/BlockTitle";
import {FeedBack} from "./feedback/FeedBack";
import {Container} from "../../../components/Container";
import {BlockLine} from "../../../components/blockContent/BlockLine";
import {theme} from "../../../styles/Theme";
import {LinkBtn} from "../../../components/blockContent/LinkBtn";
import {S} from "./FeedBacks_Styled"


export const Feedbacks = () => {
    return (
        <S.Feedbacks>
            <Container>
                <S.FeedBacksWrapper>
                    <S.FeedBackTitle>WHAT <span>our</span> CLIENTS SAY?</S.FeedBackTitle>
                    <BlockLine width={'218px'} backColor={theme.colors.accent}/>
                    <BlockTitle color={theme.colors.font}>TESTIMONIALS</BlockTitle>
                    <FeedBack/>
                    <LinkBtn widthLink={'300px'}>VIEW ALL TESTIMONIALS </LinkBtn>
                </S.FeedBacksWrapper>
            </Container>
        </S.Feedbacks>
    );
};
