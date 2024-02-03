'use client' // SOLVES ERROR: Error: (0 , react__WEBPACK_IMPORTED_MODULE_0__.createContext) is not a function

import React from 'react';
import *  as Form from "@radix-ui/react-form";
import {Buttons} from "@/components/Button";
import {serifFont} from "@/app/fonts";

function ContactForm() {
    /*TODO FIX CONTACT FORM ENQUIRY BOX OVER SCROLL AND WORD LIMIT*/
    return (
        <Form.Root className={"w-[350px] flex flex-col gap-8 justify-center items-center"} >
            {/*Email Field*/}
            <Form.Field name={"email"} className={"flex flex-col mb-2 gap-2"} >
                <div className="flex items-baseline justify-between">
                    <Form.Label className={"font-medium text-lg  text-slate-900 tracking-[0] leading-[normal]"}>Email</Form.Label>
                    <Form.Message className={"font-normal text-lg  text-slate-400 tracking-[0] leading-[normal]"} match={"valueMissing"}>
                        Please enter your email
                    </Form.Message>
                    <Form.Message className={"font-normal text-lg  text-slate-400 tracking-[0] leading-[normal]"} match={"typeMismatch"}>
                        Please provide a valid email
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <input
                        className={"w-[320px] h-[44px] px-5 bg-[#c8dcfb] border border-solid border-[#093c88] box-border appearance-none text-lg leading-none text-slate-800 outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_1px_black] selection:text-white selection:bg-black"}
                        type={"email"}
                        required
                    />
                </Form.Control>
            </Form.Field>
            {/*Company Field*/}
            <Form.Field name={"Name"} className={"flex flex-col mb-2 gap-2"} >
                <div className="flex items-baseline justify-between">
                    <Form.Label className={"font-medium text-lg  text-slate-900 tracking-[0] leading-[normal]"}>Name</Form.Label>
                </div>
                <Form.Control asChild>
                    <input
                        className={"w-[320px] h-[44px] px-5 bg-[#c8dcfb] border border-solid border-[#093c88] box-border appearance-none text-lg leading-none text-slate-800 outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_1px_black] selection:text-white selection:bg-black"}
                        type={"text"}
                        required
                    />
                </Form.Control>
            </Form.Field>
            {/*Company Contact*/}
            <Form.Field name={"Contact"} className={"flex flex-col mb-2 gap-2"} >
                <div className="flex items-baseline justify-between">
                    <Form.Label className={"font-medium text-lg  text-slate-900 tracking-[0] leading-[normal]"}>Contact</Form.Label>
                </div>
                <Form.Control asChild>
                    <input
                        className={"w-[320px] h-[44px] px-5 bg-[#c8dcfb] border border-solid border-[#093c88] box-border appearance-none text-lg leading-none text-slate-800 outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_1px_black] selection:text-white selection:bg-black"}
                        type={"tel"}
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field name={"email"} className={"flex flex-col mb-2 gap-2"} >
                <div className="flex items-baseline justify-between">
                    <Form.Label className={"font-medium text-lg  text-slate-900 tracking-[0] leading-[normal]"}>Enquiry</Form.Label>
                </div>
                <Form.Control asChild>
                    <textarea
                        className={"resize-none w-[320px] h-[120px] p-5 bg-[#c8dcfb] border border-solid border-[#093c88] box-border appearance-none overscroll-contain text-lg leading-none text-slate-800 outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_1px_black] selection:text-white selection:bg-black"}
                    />
                </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
                <Buttons
                    className="!h-[44px] !w-[320px]"
                    divClassName="!mt-[-7.50px] !text-[14px] !mb-[-5.50px] ![white-space:unset] !font-medium"
                    property1="variant-2"
                    text="Send a Quick Enquiry"
                />
            </Form.Submit>
        </Form.Root>
    );
}

function ContactSection({}) {
    return (
        <section className={'w-full flex justify-center h-[750px] bg-[#363131]'}>
            <div className="w-3/5 flex flex-row justify-between">
                {/*Contact content*/}
                <div className="relative flex flex-col pt-40">
                    {/*Contact form*/}
                    <div className="absolute h-[600px] top-[50px] bg-[#fff6f6] p-10 flex ">
                        <ContactForm />
                    </div>
                </div>
                <div className="w-1/2 flex flex-col justify-evenly">
                    {/*Contacts and Button*/}
                    <div className="flex flex-row gap-12">
                        {/*Contact Text*/}
                        <div className={`${serifFont.className} font-normal text-white text-5xl tracking-[0] leading-[normal]`}>
                            Contact Us
                        </div>
                        <div className="flex flex-col items-start gap-2 ">
                            <div className="font-medium text-white text-xl tracking-[0] leading-[normal]">
                                +254 727 501 860
                            </div>
                            <div className="font-medium text-white text-xl tracking-[0] leading-[normal]">
                                info@innovo.co.ke
                            </div>
                            <div className="font-medium text-white text-xl tracking-[0] leading-[normal]">
                                P.O.BOX 479 -00100
                            </div>
                            <div className="font-medium text-white text-xl tracking-[0] leading-[normal]">
                                NAIROBI
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {/*Email Button*/}
                        <Buttons
                            className="!w-[222px]"
                            divClassName="!mt-[-4.00px] !text-[12px] !mb-[-2.00px] ![white-space:unset] !font-semibold"
                            property1="variant-3"
                            text="SEND US AN EMAIL"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;