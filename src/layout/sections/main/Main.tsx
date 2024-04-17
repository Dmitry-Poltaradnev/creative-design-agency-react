import React from 'react';
import mainImg from '../../../assets/img/mainPhoto.webp'
import styled from "styled-components";
import {BlockSubTitle} from "../../../components/blockContent/BlockSubTitle";
import {BlockTitle} from "../../../components/blockContent/BlockTitle";
import {BlockInfo} from "../../../components/blockContent/BlockInfo";
import {LinkBtn} from "../../../components/blockContent/LinkBtn";
import {Container} from "../../../components/Container";
import {BlockLine} from "../../../components/blockContent/BlockLine";
import {theme} from "../../../styles/Theme";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <MainInfoWrapper>
                    <BlockTitle>Welcome to creatic</BlockTitle>
                    <BlockSubTitle letterSpacing={'1.2px'} fontSize={'80px'}>WE ARE <span>CREATIVE</span> DESIGN AGENCY</BlockSubTitle>
                    <BlockLine backColor={theme.colors.accent} width={'144px'}/>
                    <BlockInfo>Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci
                        velit
                        Neque porro elit Neque porro quis ipsum</BlockInfo>
                    <LinkBtn>GET IN TOUCH</LinkBtn>
                </MainInfoWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    position: relative;
    min-height: 787px;

    &:after {
        content: '';
        background: linear-gradient(-82.82deg, rgba(109, 149, 252, 0.67) -53.756%, rgba(109, 149, 252, 0) 29.836%);
        position: absolute;
        z-index: 1;
        width: 140%;
        height: 787px;
        right: 0;
        bottom: 0;
    }

    &:before {
        position: absolute;
        content: '';
        background-image: url("${mainImg}");
        background-repeat: no-repeat;
        width: 1100px;
        height: 787px;
        z-index: -1;
        right: 0;
        bottom: 0;
        @media ${theme.media.tablet} {
            background-position: center center;
            background-size: cover;
            width: 100%;
            height: 100%;
        }
`

const MainInfoWrapper = styled.div`
    flex-direction: column;
    display: flex;
    gap: 46px;
    max-width: 730px;
    padding: 45px 0;
    position: relative;
`

