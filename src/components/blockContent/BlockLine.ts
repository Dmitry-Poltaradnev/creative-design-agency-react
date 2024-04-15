import styled from "styled-components";
import {theme} from "../../styles/Theme";

type BlockLinePropsType = {
    width?: string,
    backColor?: string
}

export const BlockLine = styled.span<BlockLinePropsType>`
    width: ${props => props.width || '97px'};
    height: 3px;
    background-color: ${props => props.backColor || theme.colors.font};
`


