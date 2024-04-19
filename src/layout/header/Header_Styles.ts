import {theme} from "../../styles/Theme";
import styled from "styled-components";

const Header = styled.header`
    background: linear-gradient(270.00deg, rgb(16, 16, 16) 8.854%, rgba(16, 16, 16, 0) 50%);
    padding: 20px 0;
`
const HeaderLogoWrapper = styled.div`
    @media ${theme.media.tablet} {
        display: none;
    }
`
export const S = {
    Header,
    HeaderLogoWrapper,
}