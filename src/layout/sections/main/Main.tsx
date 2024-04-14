import React from 'react';
import mainImg from '../../../assets/img/mainPhoto.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {BlockSubTitle} from "../../../components/blockContent/BlockSubTitle";
import {BlockTitle} from "../../../components/blockContent/BlockTitle";
import {BlockInfo} from "../../../components/blockContent/BlockInfo";
import {LinkBtn} from "../../../components/blockContent/LinkBtn";
import {Contact} from "../contacts/contact/Contact";
import {Container} from "../../../components/Container";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper  justify={'space-between'}>
                    <div>
                        <BlockTitle>Welcome to creatic</BlockTitle>
                        <BlockSubTitle>WE ARE <span>CREATIVE</span> DESIGN AGENCY</BlockSubTitle>
                        <BlockInfo>Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                            consectetur, adipisci
                            velit
                            Neque porro elit Neque porro quis ipsum</BlockInfo>
                        <LinkBtn>GET IN TOUCH</LinkBtn>
                    </div>
                    <ImageWrapper>
                        <Photo src={mainImg} alt="mainImg"/>
                       <Wra></Wra>
                    </ImageWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const Photo = styled.img`
    width: 1250px;
    height: 787px;
   
   
`
const StyledMain = styled.div`
   /* background: linear-gradient(-82.82deg, rgba(109, 149, 252, 0.67) -53.756%, rgba(109, 149, 252, 0) 29.836%);*/
    position: relative;
    
`
const ImageWrapper = styled.div`
    position: relative;
`
const Wra = styled.div`
     background: linear-gradient(-82.82deg, rgba(109, 149, 252, 0.67) -53.756%, rgba(109, 149, 252, 0) 29.836%);
    position: absolute;
    z-index: 100;
    width: 1000px;
    height: 1000px;
    right: 0;
    bottom: 0;

`