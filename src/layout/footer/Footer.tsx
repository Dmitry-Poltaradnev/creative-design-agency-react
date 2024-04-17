import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {LogoLink} from "../../components/LogoLink";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {BlockLine} from "../../components/blockContent/BlockLine";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={'center'}>
                    <FooterInfoWrapper >
                            <LogoLink/>
                        <BlockLine/>
                        <FooterInfo>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro
                            elit NeDque</FooterInfo>
                        <FlexWrapper gap={'30px'}>
                            <Icon height={'25'} width={'20'} viewBox={'0 0 20 20'} iconId={'facebook'}/>
                            <Icon height={'25'} width={'20'} viewBox={'0 0 20 20'} iconId={'instagram'}/>
                            <Icon height={'25'} width={'20'} viewBox={'0 0 20 20'} iconId={'linkedin'}/>
                            <Icon height={'25'} width={'20'} viewBox={'0 0 20 20'} iconId={'pinterest'}/>
                            <Icon height={'25'} width={'20'} viewBox={'0 0 20 20'} iconId={'twitter'}/>
                            <Icon height={'25'} width={'20'} viewBox={'0 0 20 20'} iconId={'watsApp'}/>
                        </FlexWrapper>
                        <StyledCopiright>Copyright © 2003-2023 Creatic Agency All rights reserved.</StyledCopiright>
                    </FooterInfoWrapper>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const  FooterInfoWrapper = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    max-width: 700px;
    margin: 50px 0 140px;
`

const StyledCopiright= styled.small`
    margin-top: 120px;
`

const StyledFooter = styled.footer`
    position: relative;
    overflow: hidden;
    &:before{
        content: '';
        position: absolute;
        z-index: 100;
        width: 1304px;
        height: 200px;
        bottom: -100px;
        left: 50%;
        transform: translateX(-50%);
        filter: blur(80px);
        background: rgb(109, 149, 252);
    }
`
const FooterInfo = styled.p``