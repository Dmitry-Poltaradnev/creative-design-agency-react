import {theme} from "../../../styles/Theme";
import feedBackFirstImg from '../../../assets/img/feedbackSection1.webp'
import feedBackSecondImg from '../../../assets/img/feedbackSection2.webp'
import styled from "styled-components";

const FeedBackWrapper = styled.div`
    max-width: 500px;
    background: linear-gradient(178.44deg, rgba(17, 24, 42, 0.7) 19.668%, rgba(17, 24, 42, 0) 121.51%);
    border-radius: 40px;
    padding: 15px;
    margin: 80px 0;
    width: 90%;
    @media ${theme.media.mobile} {
        margin: 30px 0;
    }
`
const FeedBackFlexWrapper = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    @media ${theme.media.mobile} {
        flex-direction: column;
        gap: 30px;
    }
`
const FeedBackInfo = styled.p`
    margin-bottom: 50px;
`
const LinkMail = styled.a`
    color: ${theme.colors.accent};
`

const Photo = styled.img`
    max-width: 100px;
    max-height: 100px;
`
const FeedBackTitle = styled.h2`
    text-transform: uppercase;
    font-size: calc((100vw - 360px) / (1920 - 360) * (48 - 36) + 36px);
    font-weight: 700;
    max-width: 500px;
    text-align: center;

    span {
        color: ${theme.colors.accent};
    }
`
const FeedBacksWrapper = styled.div`
    padding: 50px 0 200px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    overflow: hidden;

    &:before {
        content: '';
        position: absolute;
        background-image: url("${feedBackFirstImg}");
        width: 652px;
        height: 932px;
        left: -320px;
        top: 0;
        z-index: -1;
    }

    &:after {
        content: '';
        position: absolute;
        background-image: url("${feedBackSecondImg}");
        width: 652px;
        height: 932px;
        right: -300px;
        top: 0;
        z-index: -1;
    }

    @media ${theme.media.tablet} {
        padding-bottom: 50px;
        &:before {
            display: none;
        }

        &:after {
            display: none;
        }
    }
`
const Feedbacks = styled.section`
`

export const S = {
    Feedbacks,
    FeedBackWrapper,
    FeedBackFlexWrapper,
    FeedBackInfo,
    LinkMail,
    Photo,
    FeedBackTitle,
    FeedBacksWrapper,
}