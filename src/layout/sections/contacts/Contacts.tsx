import React, {ElementRef, useRef} from 'react';
import {BlockSubTitle} from "../../../components/blockContent/BlockSubTitle";
import {BlockInfo} from "../../../components/blockContent/BlockInfo";
import {Contact} from "./contact/Contact";
import {Container} from "../../../components/Container";
import {BlockLine} from "../../../components/blockContent/BlockLine";
import {S} from "./Contacts_Styled"
import emailjs from "@emailjs/browser";

const ContactItems = [
    {
        iconId: 'map',
        title: 'Office Address',
        subTitle: '98, Arca St, PR City, 33414 , Indonesia',
        width: '32',
        height: '45',
        viewBox: '0 0 32 45',
    }, {
        iconId: "phone",
        title: 'Call Us',
        subTitle: '(+BK) 123 456 7891',
        width: '35',
        height: '34',
        viewBox: '0 0 35 34',
    }, {
        iconId: 'mail',
        title: 'Mail Us',
        subTitle: 'info@creaticagency.com',
        width: '40',
        height: '30',
        viewBox: '0 0 40 30',
    }
]

export const Contacts = () => {

    const form = useRef<ElementRef<"form">>(null);
    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        emailjs
            .sendForm('service_d2oc30i', 'template_fx0ox2o', form.current, {
                publicKey: 'qAPHYgAOPEgU5-fDK',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };


    return (
        <S.Contacts id={'contacts'}>
            <Container>
                <S.WrapperContact>
                    <S.ContactInfoWrapper>
                        <BlockSubTitle>Get in <span>TOUCH</span></BlockSubTitle>
                        <BlockLine/>
                        <BlockInfo>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque
                            porro elit
                            NeDque porro </BlockInfo>
                        <S.ContactList>
                            {ContactItems.map((item, index) => {
                                return <Contact key={index} width={item.width} height={item.height}
                                                viewBox={item.viewBox}
                                                iconId={item.iconId} title={item.title} subTitle={item.subTitle}/>
                            })}
                        </S.ContactList>
                    </S.ContactInfoWrapper>
                    <S.StyledForm ref={form} onSubmit={sendEmail}>
                        <S.Field required placeholder={'name'} name={'user_name'}/>
                        <S.Field type={"email"} required placeholder={'email'} name={'email'}/>
                        <S.Field required placeholder={'message'} name={'message'} as={'textarea'}/>
                        <S.FormBtn type={'submit'}>SEND MESSAGE</S.FormBtn>
                    </S.StyledForm>
                </S.WrapperContact>
            </Container>
        </S.Contacts>
    )
        ;
};


