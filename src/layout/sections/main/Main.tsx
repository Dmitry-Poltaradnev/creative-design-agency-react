import React from 'react';
import {BlockTitle} from "../../../components/blockContent/BlockTitle";
import {BlockInfo} from "../../../components/blockContent/BlockInfo";
import {LinkBtn} from "../../../components/blockContent/LinkBtn";
import {Container} from "../../../components/Container";
import {BlockLine} from "../../../components/blockContent/BlockLine";
import {theme} from "../../../styles/Theme";
import {S} from './Main_Styles'


export const Main = () => {
    return (
        <S.Main>
            <Container>
                <S.MainInfoWrapper>
                    <BlockTitle>Welcome to creatic</BlockTitle>
                    <S.MainSubTitle>WE ARE <span>CREATIVE</span> DESIGN AGENCY</S.MainSubTitle>
                    <BlockLine backColor={theme.colors.accent} width={'144px'}/>
                    <BlockInfo>Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci
                        velit
                        Neque porro elit Neque porro quis ipsum</BlockInfo>
                    <LinkBtn>GET IN TOUCH</LinkBtn>
                </S.MainInfoWrapper>
            </Container>
        </S.Main>
    );
};



