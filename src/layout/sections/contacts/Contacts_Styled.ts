import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const ContactItem = styled.li`
    display: flex;
    align-items: center;
    gap: 30px;
`
const ContactTitle = styled.h4`
    font-size: 21px;
    font-weight: 700;
    line-height: 1.6;
`
const ContactLink = styled.a`
    color: ${theme.colors.accent};
    @media ${theme.media.mobile}{
        font-size: 17px;
    }
`
const ContactList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 0 auto;
    width: 100%;
    max-width: 460px;
    align-items: center;

    textarea {
        font-family: 'Poppins', 'sans-serif';
        height: 160px;
        resize: none;
    }
`
const WrapperContact = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
    @media ${theme.media.tablet} {
        flex-direction: column;
        gap: 50px;
    }
`
const Contacts = styled.section`
    background: linear-gradient(192.46deg, rgba(109, 149, 252, 0.24) 11.025%, rgba(21, 21, 21, 0) 90.87%);
    padding: 40px 0;
`
const ContactInfoWrapper = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media ${theme.media.tablet} {
        align-items: center;
    }
`
const Field = styled.input`
    background-color: ${theme.colors.primaryBg};
    width: 100%;
    border: 1px solid ${theme.colors.font};
    padding: 10px 15px;
    font-weight: 500;
    color: ${theme.colors.font};
    font-size: 21px;

    &::placeholder {
        color: ${theme.colors.font};
        text-transform: capitalize;
    }
`
const FormBtn = styled.button`
    color: ${theme.colors.primaryBg};
    background-color: ${theme.colors.accent};
    font-family: 'Poppins', 'sans-serif';
    border-radius: 2px;
    max-width: 200px;
    padding: 10px 25px 10px 25px;
    font-weight: 500;
    letter-spacing: 1.5px;
`

export const S = {
    ContactItem,
    ContactTitle,
    ContactLink,
    ContactList,
    StyledForm,
    WrapperContact,
    Contacts,
    ContactInfoWrapper,
    Field,
    FormBtn
}