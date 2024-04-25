import React from 'react';
import {LogoLink} from "../../components/LogoLink";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from './Header_Styles'

const items = [
    {
        title: 'Home',
        href: 'home'
    }, {
        title: 'About Us',
        href: 'about'
    }, {
        title: 'Services',
        href: 'services'
    }, {
        title: 'Portfolio',
        href: 'portfolio'
    }, {
        title: 'Pages',
        href: 'pages'
    },
    {
        title: 'Contact Us',
        href: 'contacts'
    },
]

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 970;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <S.HeaderLogoWrapper>
                        <LogoLink/>
                    </S.HeaderLogoWrapper>
                    {width <= breakpoint ? <MobileMenu menuItems={items}/> : <DesktopMenu menuItems={items}/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};



