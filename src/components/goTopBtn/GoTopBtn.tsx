import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";
import {animateScroll as scroll} from "react-scroll/modules";

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => scroll.scrollToTop()}>
                    <Icon height={'16'} width={'15'} viewBox={'0 0 16 15'} iconId={'arrow'}/>
                </StyledGoTopBtn>
            )}
        </>

    );
};
const StyledGoTopBtn = styled.button`
    background-color: ${theme.colors.font};
    padding: 6px 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    border-radius: 3px;
    z-index: 1000;
`
