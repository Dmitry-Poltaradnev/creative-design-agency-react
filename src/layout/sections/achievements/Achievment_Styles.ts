import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Achievements = styled.section`
    background: linear-gradient(270.00deg, rgb(109, 149, 252) -127.552%, rgba(21, 21, 21, 0.35) 77.969%);
    padding: 80px 0;
`
const Achievement = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    @media ${theme.media.mobile}{
        width: 90%;
    }
`
const AchievementCounter = styled.p`
    font-size: 64px;
    font-weight: 700;
    letter-spacing: 0;
    text-align: center;
    line-height: 1.3;
`
const AchievementTitle = styled.h3`
    font-weight: 300;
    color: ${theme.colors.accent};
    font-size: 21px;
`

export const S = {
    Achievements,
    Achievement,
    AchievementCounter,
    AchievementTitle,
}