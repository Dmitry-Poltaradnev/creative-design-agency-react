import styled from "styled-components";

const FooterSocialsWrap = styled.ul`
    display: flex;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
`
const FooterInfoWrapper = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    max-width: 700px;
    margin: 50px 0 140px;
`

const Сopyright = styled.small`
    margin-top: 120px;
`

const Footer = styled.footer`
    position: relative;
    overflow: hidden;

    &:before {
        content: '';
        position: absolute;
        z-index: 100;
        width: 1304px;
        height: 200px;
        bottom: -100px;
        left: 50%;
        transform: translateX(-50%);
        filter: blur(80px);
        background: rgb(109, 149, 252);
    }
`

export const S = {
    FooterSocialsWrap,
    FooterInfoWrapper,
    Сopyright,
    Footer,
}