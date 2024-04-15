import styled from "styled-components";

type BlockTitlePropsType = {
    color?: string,
}

export const BlockTitle = styled.h2<BlockTitlePropsType>`
    color: ${props => props.color || 'rgb(109, 149, 252)'};
    font-weight: 500;
    font-size: 21px;
    text-transform: uppercase;
    letter-spacing: 3px;
`