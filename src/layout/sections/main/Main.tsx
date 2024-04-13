import React from 'react';
import mainImg from '../../../assets/img/mainPhoto.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {BlockSubTitle} from "../../../components/blockContent/BlockSubTitle";
import {BlockTitle} from "../../../components/blockContent/BlockTitle";
import {BlockInfo} from "../../../components/blockContent/BlockInfo";
import {LinkBtn} from "../../../components/blockContent/LinkBtn";


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-between'}>
                <div>
                    <BlockTitle>Welcome to creatic</BlockTitle>
                    <BlockSubTitle>WE ARE <span>CREATIVE</span> DESIGN AGENCY</BlockSubTitle>
                    <BlockInfo>Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                        velit
                        Neque porro elit Neque porro quis ipsum</BlockInfo>
                    <LinkBtn>GET IN TOUCH</LinkBtn>
                </div>
                <Photo src={mainImg} alt="mainImg"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const Photo = styled.img`
    width: 1250px;
    height: 787px;
    object-fit: cover;
    z-index: -1;
`
const StyledMain = styled.div`
    background: linear-gradient(-82.82deg, rgba(109, 149, 252, 0.67) -53.756%,rgba(109, 149, 252, 0) 29.836%);
    z-index: 100;
`