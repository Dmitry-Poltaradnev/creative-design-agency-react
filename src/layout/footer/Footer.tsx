import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import {LogoLink} from "../../components/LogoLink";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {BlockLine} from "../../components/blockContent/BlockLine";
import {BlockInfo} from "../../components/blockContent/BlockInfo";
import {S} from './Footer_Styled'

const socialsIcons = [
    {
        iconId: 'facebook',
        height: '22',
        width: '20',
        viewBox: '0 0 20 20'
    },
    {
        iconId: 'instagram',
        height: '22',
        width: '20',
        viewBox: '0 0 20 20'
    },
    {
        iconId: 'linkedin',
        height: '22',
        width: '20',
        viewBox: '0 0 20 20'
    },
    {
        iconId: 'pinterest',
        height: '22',
        width: '20',
        viewBox: '0 0 20 20'
    },
    {
        iconId: 'twitter',
        height: '22',
        width: '20',
        viewBox: '0 0 20 20'
    },
    {
        iconId: 'watsApp',
        height: '22',
        width: '20',
        viewBox: '0 0 20 20'
    },
]

export const Footer = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper justify={'center'}>
                    <S.FooterInfoWrapper>
                        <LogoLink/>
                        <BlockLine/>
                        <BlockInfo>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque
                            porro elit NeDque</BlockInfo>
                        <S.FooterSocialsWrap>
                            {
                                socialsIcons.map((item, index) => {
                                    return <li>
                                        <a href="#"> <Icon height={item.height} width={item.width}
                                                           viewBox={item.viewBox} iconId={item.iconId}/>
                                        </a>
                                    </li>
                                })
                            }
                        </S.FooterSocialsWrap>
                        <S.Сopyright>Copyright © 2003-2023 Creatic Agency All rights reserved.</S.Сopyright>
                    </S.FooterInfoWrapper>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};


