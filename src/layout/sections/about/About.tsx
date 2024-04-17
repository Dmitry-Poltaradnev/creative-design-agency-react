import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import aboutImg from '../../../assets/img/aboutUsPhoto.webp'
import {BlockTitle} from "../../../components/blockContent/BlockTitle";
import {BlockSubTitle} from "../../../components/blockContent/BlockSubTitle";
import {BlockInfo} from "../../../components/blockContent/BlockInfo";
import {LinkBtn} from "../../../components/blockContent/LinkBtn";
import {BlockLine} from "../../../components/blockContent/BlockLine";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <AboutFlexWrapper >
                    <AboutInfoWrapper>
                        <BlockTitle>ABOUT US</BlockTitle>
                        <BlockSubTitle lineHeight={'1.2'} letterSpacing={'0.1px'}>We Bring <span>Creative</span> ideas to
                            life.</BlockSubTitle>
                        <BlockLine/>
                        <h4>We love Creating</h4>
                        <BlockInfo>Lorem ipsumNeque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque
                            porro
                            elit NeDque porro Lorem ipsum Neque porro Neque porro</BlockInfo>
                        <BlockInfo>
                            Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Lorem ipsum Neque quis
                            ipsum
                        </BlockInfo>
                        <LinkBtn>READ MORE</LinkBtn>
                    </AboutInfoWrapper>
                </AboutFlexWrapper>
            </Container>
        </StyledAbout>
    );
};

 const AboutFlexWrapper = styled.div`
     display: flex;
     justify-content: end;
     @media ${theme.media.maxTablet} {
         justify-content: center;
     }
 `
const AboutInfoWrapper = styled.div`
    flex-direction: column;
    display: flex;
    gap: 35px;
    max-width: 660px;    
    padding: 70px 0;       

    h4 {
        color: ${theme.colors.accent};
        font-size: 17px;
        font-weight: 300;
        letter-spacing: 0.5px;
    }
    @media ${theme.media.maxTablet} {
     align-items: center;
    }
`

const StyledAbout = styled.section`
    background: linear-gradient(142.13deg, rgba(109, 149, 252, 0.26) 5.652%, rgba(109, 149, 252, 0) 62.965%);
    position: relative;

    &:before {
        position: absolute;
        content: '';
        background-image: url("${aboutImg}");
        width: 863px;
        height: 850px;
        z-index: -1;
        @media ${theme.media.maxTablet} {
           display: none;
        }
    }
`
