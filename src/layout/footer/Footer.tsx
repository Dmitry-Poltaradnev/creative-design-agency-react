import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {LogoLink} from "../../components/LogoLink";
import {Menu} from "../../components/menu/Menu";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper>
                <LogoLink/>
                <Menu/>
                <FooterInfo>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro
                    elit NeDque</FooterInfo>
                <FlexWrapper>
                    <Icon iconId={'facebook'}/>
                    <Icon iconId={'instagram'}/>
                    <Icon iconId={'linkedin'}/>
                    <Icon iconId={'pinterest'}/>
                    <Icon iconId={'twitter'}/>
                    <Icon iconId={'watsApp'}/>
                </FlexWrapper>
                <small>Copyright © 2003-2023 Creatic Agency All rights reserved.</small>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
   
`
const FooterInfo = styled.p``