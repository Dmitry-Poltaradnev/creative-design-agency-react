import React, {useState} from 'react';
import {S} from '../HeaderMenu_Styles'

interface MenuItem {
    title: string;
    href: string;
}

export const MobileMenu = (props: { menuItems: MenuItem[] }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopUp isOpen={menuIsOpen} onClick={() => {
                setMenuIsOpen(false)
            }}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <S.ListItem key={index}>
                            <S.NavLink isOpen={menuIsOpen} onClick={() => (setMenuIsOpen(false))} spy={true}
                                       smooth={true}
                                       to={item.href}>{item.title}</S.NavLink>
                        </S.ListItem>
                    })}
                </ul>
            </S.MobileMenuPopUp>
        </S.MobileMenu>
    );
};

