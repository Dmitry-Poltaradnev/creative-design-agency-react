import styled from "styled-components";
import {theme} from "../../styles/Theme";

type BlockSubTitlePropsType = {
    fontSize?: string,
    letterSpacing?:string,
    lineHeight?:string,
    maxWidth?: string
}

export const BlockSubTitle = styled.p<BlockSubTitlePropsType>`
    font-size: ${props => props.fontSize || '48px'};
    letter-spacing: ${props => props.letterSpacing || '0px'};
    line-height: ${props => props.lineHeight || '1.1'};
    text-transform: uppercase;
    font-weight: 700;
    position: relative;

    span {
        color: ${theme.colors.accent};
    }
`