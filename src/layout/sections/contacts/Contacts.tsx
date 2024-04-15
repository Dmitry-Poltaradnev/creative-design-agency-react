import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {BlockSubTitle} from "../../../components/blockContent/BlockSubTitle";
import {BlockInfo} from "../../../components/blockContent/BlockInfo";
import {Contact} from "./contact/Contact";
import {Container} from "../../../components/Container";
import styled from "styled-components";
import {BlockLine} from "../../../components/blockContent/BlockLine";
import {theme} from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <ContactSection>
            <Container>
                <FlexWrapper justify={'space-between'} gap={'30px'} align={'center'}>
                    <ContactInfoWrapper>
                        <BlockSubTitle>Get in <span>TOUCH</span></BlockSubTitle>
                        <BlockLine/>
                        <BlockInfo>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque
                            porro elit
                            NeDque porro </BlockInfo>
                        <FlexWrapper gap={'30px'} direction={'column'}>
                            <Contact/>
                            <Contact/>
                            <Contact/>
                        </FlexWrapper>
                    </ContactInfoWrapper>
                    <StyledForm>
                        <Field placeholder={'name'}/>
                        <Field placeholder={'email'}/>
                        <Field placeholder={'message'} as={'textarea'}/>
                        <FormBtn type={'submit'}>SEND MESSAGE</FormBtn>
                    </StyledForm>
                </FlexWrapper>
            </Container>
        </ContactSection>
    );
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 0 auto;
    width: 100%;
    max-width: 460px;
    align-items: center;
    
    textarea{
        font-family: 'Poppins','sans-serif';
        height: 160px;
        resize: none;
    }
`

const ContactSection = styled.section`
    margin: 200px 0;
`
const ContactInfoWrapper = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`
const Field = styled.input`
    background-color: ${theme.colors.primaryBg};
    width: 100%;
    border: 1px solid ${theme.colors.font};
    padding: 10px 15px;
    font-weight: 500;
    color: ${theme.colors.font};
    font-size: 21px;
    &::placeholder{
       color: ${theme.colors.font}; 
        text-transform: capitalize;
        
    }
`
const FormBtn = styled.button`
    color: ${theme.colors.primaryBg};
    background-color: ${theme.colors.accent};   
    font-family: 'Poppins','sans-serif';
    border-radius: 2px;
    max-width: 200px;
    padding: 10px 25px 10px 25px;
    font-weight: 500;
    letter-spacing: 1.5px;
`
