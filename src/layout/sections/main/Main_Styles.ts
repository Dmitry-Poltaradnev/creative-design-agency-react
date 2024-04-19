import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import mainImg from '../../../assets/img/mainPhoto.webp'


const MainSubTitle = styled.p`
    letter-spacing: 1.2px;
    font-size: calc((100vw - 360px) / (1920 - 360) * (80 - 50) + 50px);
    text-transform: uppercase;
    font-weight: 700;

    span {
        color: ${theme.colors.accent};
    }
`
const Main = styled.section`
    position: relative;
    min-height: 787px;

    &:after {
        content: '';
        background: linear-gradient(-82.82deg, rgba(109, 149, 252, 0.67) -53.756%, rgba(109, 149, 252, 0) 29.836%);
        position: absolute;
        z-index: -10;
        width: 140%;
        height: 787px;
        right: 0;
        bottom: 0;
    }

    &:before {
        position: absolute;
        content: '';
        background-image: url("${mainImg}");
        background-repeat: no-repeat;
        width: 1100px;
        height: 787px;
        z-index: -100;
        right: 0;
        bottom: 0;
        @media ${theme.media.tablet} {
            background-position: center center;
            background-size: cover;
            width: 100%;
            height: 100%;
        }
`

const MainInfoWrapper = styled.div`
    flex-direction: column;
    display: flex;
    gap: 46px;
    max-width: 730px;
    padding: 45px 0;
    position: relative;
`
export const S = {
    Main,
    MainInfoWrapper,
    MainSubTitle,
}