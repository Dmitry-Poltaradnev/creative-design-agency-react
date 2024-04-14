import styled from "styled-components";
import {theme} from "../../styles/Theme";

type BlockSubTitlePropsType = {
    fontSize?: string,
    letterSpacing?:string,
}

export const BlockSubTitle = styled.p<BlockSubTitlePropsType>`
    font-size: ${props => props.fontSize || '48px'};
    letter-spacing: ${props => props.letterSpacing || '0' };
    text-transform: capitalize;
    span {
        color: ${theme.colors.accent};
    }
`