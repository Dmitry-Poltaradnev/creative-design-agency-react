import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const ExperienceReceived = styled.li`
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 20px;
    @media ${theme.media.mobile} {
        margin: 10px 0 ;
    }
`
const ExperienceTitle = styled.p`
    font-size: calc((100vw - 360px) / (1920 - 360) * (21 - 18) + 18px);
`
const Experience = styled.section`
    background: linear-gradient(12.46deg, rgba(109, 149, 252, 0.24) 11.025%, rgba(21, 21, 21, 0) 90.87%);
    padding: 40px 0;
`
const ExperienceWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    @media ${theme.media.tablet} {
        flex-direction: column;
        gap: 50px;
    }
`
const ExpCostumers = styled.div`
    width: 50%;
    @media ${theme.media.tablet} {
        width: 85%;
    }
`
const ExperiencesReceived = styled.ul`
    margin-top: 30px;
`
const ExpInfoWrapper = styled.div`
    flex-direction: column;
    display: flex;
    gap: 35px;
    width: 50%;
    @media ${theme.media.tablet} {
        align-items: center;
        width: 85%;
    }
`

export const S = {
    ExperienceReceived,
    ExperienceTitle,
    Experience,
    ExperienceWrapper,
    ExpCostumers,
    ExperiencesReceived,
    ExpInfoWrapper
}