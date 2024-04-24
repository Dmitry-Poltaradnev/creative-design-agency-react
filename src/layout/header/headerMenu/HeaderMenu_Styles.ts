import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

type MenuPropsType = {
    fontSize?: string,
}

const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`
const ListItem = styled.li`
`
const Link = styled.a`
    font-size: 21px;
    font-weight: 400;
    line-height: 32px;
    color: ${theme.colors.font};
    transition: all 0.2s ;
    :hover{
        color: ${theme.colors.accent};
    }
`
const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: ${theme.colors.primaryBg};
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1000;
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        gap: 40px;
        flex-direction: column;
        align-items: center;
    }
`
const MobileMenu = styled.nav<MenuPropsType>`
    a {
        font-size: ${props => props.fontSize || '40px'};
    }
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    width: 200px;
    height: 200px;
    right: -100px;
    top: -100px;
    z-index: 10000;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &:before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(1px) translateX(-1px);
            `}
        }

        &:after {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`
export const S = {
    DesktopMenu,
    ListItem,
    Link,
    MobileMenuPopUp,
    MobileMenu,
    BurgerButton,
}