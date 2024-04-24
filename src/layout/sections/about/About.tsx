import React from 'react';
import {BlockTitle} from "../../../components/blockContent/BlockTitle";
import {BlockSubTitle} from "../../../components/blockContent/BlockSubTitle";
import {BlockInfo} from "../../../components/blockContent/BlockInfo";
import {LinkBtn} from "../../../components/blockContent/LinkBtn";
import {BlockLine} from "../../../components/blockContent/BlockLine";
import {Container} from "../../../components/Container";
import {S} from './About_styles'

export const About = () => {
    return (
        <S.About id={'contact'}>
            <Container>
                <S.AboutFlexWrapper >
                    <S.AboutInfoWrapper>
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
                    </S.AboutInfoWrapper>
                </S.AboutFlexWrapper>
            </Container>
        </S.About>
    );
};


