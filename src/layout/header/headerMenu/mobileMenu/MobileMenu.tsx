import React, {useState} from 'react';
import {Menu} from "../menu/Menu";
import {S} from '../HeaderMenu_Styles'

interface MenuItem {
    title: string;
    href: string;
}

export const MobileMenu: React.FC<{ menuItems: MenuItem[] }> = (props: { menuItems: MenuItem[] }) => {
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
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopUp>
        </S.MobileMenu>
    );
};

