import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import aboutImg from '../../../assets/img/aboutUsPhoto.webp'

const AboutFlexWrapper = styled.div`
    display: flex;
    justify-content: end;
    @media ${theme.media.maxTablet} {
        justify-content: center;
    }
`
const AboutInfoWrapper = styled.div`
    flex-direction: column;
    display: flex;
    gap: 35px;
    max-width: 660px;
    padding: 70px 0;

    h4 {
        color: ${theme.colors.accent};
        font-size: 17px;
        font-weight: 300;
        letter-spacing: 0.5px;
    }

    @media ${theme.media.maxTablet} {
        align-items: center;
    }
`
const About = styled.section`
    background: linear-gradient(142.13deg, rgba(109, 149, 252, 0.26) 5.652%, rgba(109, 149, 252, 0) 62.965%);
    position: relative;

    &:before {
        position: absolute;
        content: '';
        background-image: url("${aboutImg}");
        width: 863px;
        height: 850px;
        z-index: -1;
        @media ${theme.media.maxTablet} {
            display: none;
        }
    }
`
export const S = {
    About,
    AboutFlexWrapper,
    AboutInfoWrapper,
}