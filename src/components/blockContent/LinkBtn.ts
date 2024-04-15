import styled from "styled-components";

type LinkBtnPropsType ={
    widthLink?:string
}

export const LinkBtn = styled.a<LinkBtnPropsType>`
    width: ${props => props.widthLink || '175px'};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border: 3px solid rgb(109, 149, 252);
    border-radius: 2px;
    font-size: 17px;
    letter-spacing: 2.5px;
`