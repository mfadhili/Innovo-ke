import React from 'react';
import Image from "next/image";
import {serifFont} from "@/app/fonts";
import NavItems from "@/app/Navbar/NavItems";
import {Buttons} from "@/components/Button";

function Logo() {
    return (
        <div className={"flex flex-row gap-4"}>
            <Image
                className="object-contain "
                alt="Logo"
                src="/images/logo/logo-86.svg"
                width={30}
                height={30}
            />
            <div className={`${serifFont.className} font-normal text-black text-2xl tracking-normal leading-normal`}>
                Innovo <br />
                Networks
            </div>
        </div>
    );
}

function Footer({}) {
    return (
        <footer className={'h-[333px] bg-white w-full flex justify-center'}>
            {/*Footerz*/}
            <div className="w-3/4 flex justify-between pt-10">
                {/*Footer Content*/}
                <div className="flex flex-col gap-14">
                    {/*Logo and Info*/}
                    <Logo />
                    <div className="">
                        <p className="w-[308px] font-normal text-black text-lg leading-normal tracking-normal">
                            Innovo Networks® is a leading Communications Service Provider, and together with our partners we strive to
                            offer a superior client service experience for client and partner organisations.
                        </p>
                    </div>
                    <Buttons
                        className=""
                        divClassName="!mt-[-6.00px] !text-[16px] !mb-[-4.00px]"
                        property1="variant-4"
                        text="Enquire Now"
                    />
                </div>
                <div className="w-2/3">
                    {/*Nav and Socials*/}
                    <NavItems />
                </div>
            </div>
        </footer>
    );
}

export default Footer;