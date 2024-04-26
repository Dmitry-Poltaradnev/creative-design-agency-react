import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";

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
const NavLink = styled(Link)<{ isOpen: boolean }>`
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
    background-color: ${theme.colors.primaryBg};
    position: fixed;
    height: 100vh;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: 1s ease;

    ul {
        display: flex;
        gap: 40px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    ${props => props.isOpen && css<{ isOpen: boolean }>`       
        transform: translateY(0);
    `}
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
        transition: .3s all;
        

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
            transition: .3s all;
            
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
            transition: .3s all;

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`
export const S = {
    DesktopMenu,
    ListItem,
    NavLink,
    MobileMenuPopUp,
    MobileMenu,
    BurgerButton,
}