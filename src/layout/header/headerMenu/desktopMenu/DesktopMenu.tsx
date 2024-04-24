import React from 'react';
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles"

interface MenuItem {
    title: string;
    href: string;
}
export const DesktopMenu: React.FC<{ menuItems:  MenuItem[] }> = (props: { menuItems: MenuItem[] }) => {
    return (
        <S.DesktopMenu>
            <Menu menuItems={props.menuItems} />
        </S.DesktopMenu>
    );
};

