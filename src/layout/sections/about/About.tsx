import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import aboutImg from '../../../assets/img/aboutUsPhoto.webp'
import {BlockTitle} from "../../../components/blockContent/BlockTitle";
import {BlockSubTitle} from "../../../components/blockContent/BlockSubTitle";
import {BlockInfo} from "../../../components/blockContent/BlockInfo";
import {LinkBtn} from "../../../components/blockContent/LinkBtn";

export const About = () => {
    return (
        <StyledAbout>
            <FlexWrapper align={'center'} justify={'space-between'} direction={'row-reverse'}>
                <div>
                    <BlockTitle>ABOUT US</BlockTitle>
                    <BlockSubTitle>We Bring <span>Creative</span> ideas to life.</BlockSubTitle>
                    <span>We love Creating</span>
                    <BlockInfo>Lorem ipsumNeque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit NeDque porro  Lorem ipsum Neque porro Neque porro
                        Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Lorem ipsum Neque quis ipsum </BlockInfo>
                    <LinkBtn>READ MORE</LinkBtn>
                </div>
                <Photo src={aboutImg} alt='aboutImg'/>
            </FlexWrapper>
        </StyledAbout>
    );
};

const StyledAbout = styled.div`
    background: linear-gradient(142.13deg, rgba(109, 149, 252, 0.26) 5.652%, rgba(109, 149, 252, 0) 62.965%);
`
const Photo = styled.img`
    width: 863px;
    height: 806px;
`