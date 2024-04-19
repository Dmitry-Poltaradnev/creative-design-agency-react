import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const ServiceList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
const WrapperServices = styled.div`
    display: flex;
    justify-content: space-between;
    @media ${theme.media.maxTablet} {
        flex-wrap: wrap;
        justify-content: center;
    }
`
const Services = styled.section`
    padding: 100px 0;
`
const AboutInfoWrapper = styled.div`
    flex-direction: column;
    display: flex;
    gap: 35px;
    max-width: 660px;
    @media ${theme.media.maxTablet} {
        align-items: center;
        margin-bottom: 50px;
    }
`
const Service = styled.li`
    width: 230px;
    height: 220px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ServiceTitle = styled.h4`
    font-size: 21px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 1.9px;
    text-align: center;
    text-transform: uppercase;
    color: ${theme.colors.accent};
    margin-top: 10px;
`
const ServiceInfo = styled.p`
    font-size: 17px;
    font-weight: 300;
    line-height: 122.5%;
    letter-spacing: 0.9px;
    text-align: center;
`
export const S = {
    WrapperServices,
    ServiceList,
    Services,
    AboutInfoWrapper,
    Service,
    ServiceTitle,
    ServiceInfo,
}