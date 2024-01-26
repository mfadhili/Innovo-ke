import React from 'react';
import Image from "next/image";
import {serifFont} from "@/app/fonts";
import NavItems from "@/app/Navbar/NavItems";

function Logo() {
    return (
        <div className={"flex flex-row gap-4 items-center justify-between"}>
            <Image
                className="object-contain "
                alt="Logo"
                src="/images/logo/logo-85.svg"
                width={40}
                height={40}
            />
            <p className={`${serifFont.className} font-normal text-white text-2xl tracking-normal leading-normal`}>
                Innovo <br/>Networks
            </p>
        </div>
    );
}


function Action() {
    return (
        <div>
            Call To Action
        </div>
    );
}

function Navbar({}) {
    return (
        <header className={"fixed top-0 z-10 bg-blue-500  w-full p-4 flex flex-row justify-center"}>
                {/*Nav Section*/}
            <div className="flex flex-row items-center justify-between w-2/3">
                <Logo />
                <NavItems />
                <Action/>
            </div>
        </header>
    );
}

const Links : {
    title: string,
    description: string
}[] = [
    {
        title: "Home",
        description: "Home page items"
    },{
        title: "Resources",
        description: "Resources page items"
    },{
        title: "Solutions",
        description: "Solutions page items"
    },{
        title: "Contact",
        description: "Contact page items"
    },{
        title: "About",
        description: "About page items"
    },

]

export default Navbar;