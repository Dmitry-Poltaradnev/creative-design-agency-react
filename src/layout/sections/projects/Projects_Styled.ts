import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Projects = styled.section`
    text-align: center;
    padding: 50px;
    @media ${theme.media.tablet}{
        padding: 50px 10px;
    }
`
const ProjectsTitle = styled.h2`
    font-size: calc((100vw - 360px) / (1920 - 360) * (48 - 36) + 36px);
    text-transform: uppercase;
    font-weight: 700;
    max-width: 600px;
    text-align: center;

    span {
        color: ${theme.colors.accent};
    }
`
const ProjectTitle = styled.h2`
    padding: 0 120px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 21px;
    color: ${theme.colors.accent};
    position: relative;
    max-width: 400px;
    margin-bottom: 50px;
    @media ${theme.media.mobile}{
        margin-bottom: 20px;
    }

    &:before {
        position: absolute;
        height: 3px;
        background-color: ${theme.colors.font};
        content: '';
        width: 97px;
        left: 0;
        bottom: 50%;
    }

    &:after {
        right: 0;
        bottom: 50%;
        position: absolute;
        height: 3px;
        background-color: ${theme.colors.font};
        content: '';
        width: 97px;
    }
`
export const S = {
    Projects,
    ProjectsTitle,
    ProjectTitle
}