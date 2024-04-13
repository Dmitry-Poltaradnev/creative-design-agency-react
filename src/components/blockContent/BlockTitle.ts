import styled from "styled-components";

type BlockTitlePropsType = {
    color?: string
}

export const BlockTitle = styled.h2<BlockTitlePropsType>`
    color: ${props => props.color || 'rgb(109, 149, 252)'};
   
`