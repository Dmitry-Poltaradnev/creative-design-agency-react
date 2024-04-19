import React from 'react';
import {BlockSubTitle} from "../../../components/blockContent/BlockSubTitle";
import {BlockInfo} from "../../../components/blockContent/BlockInfo";
import {Contact} from "./contact/Contact";
import {Container} from "../../../components/Container";
import {BlockLine} from "../../../components/blockContent/BlockLine";
import {S} from "./Contacts_Styled"

export const Contacts = () => {
    return (
        <S.Contacts>
            <Container>
                <S.WrapperContact>
                    <S.ContactInfoWrapper>
                        <BlockSubTitle>Get in <span>TOUCH</span></BlockSubTitle>
                        <BlockLine/>
                        <BlockInfo>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque
                            porro elit
                            NeDque porro </BlockInfo>
                        <S.ContactList>
                            <Contact/>
                            <Contact/>
                            <Contact/>
                        </S.ContactList>
                    </S.ContactInfoWrapper>
                    <S.StyledForm>
                        <S.Field placeholder={'name'}/>
                        <S.Field placeholder={'email'}/>
                        <S.Field placeholder={'message'} as={'textarea'}/>
                        <S.FormBtn type={'submit'}>SEND MESSAGE</S.FormBtn>
                    </S.StyledForm>
                </S.WrapperContact>
            </Container>
        </S.Contacts>
    );
};


