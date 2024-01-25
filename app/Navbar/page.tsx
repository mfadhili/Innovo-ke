import React from 'react';
import Image from "next/image";
import {serifFont} from "@/app/fonts";
import NavItems from "@/app/Navbar/NavItems";

function Logo() {
    return (
        <div className={"flex flex-row gap-4"}>
            <Image
                className="object-contain "
                alt="Logo"
                src="/images/logo/logo-85.svg"
                width={40}
                height={40}
            />
            <div className={`${serifFont.className} font-normal text-white text-2xl tracking-normal leading-normal`}>
                Innovo <br />
                Networks
            </div>
        </div>
    );
}



function Navbar({}) {
    return (
        <header className={"fixed top-0 z-10 bg-blue-500  w-full p-4 flex justify-center"}>
            <nav className={"flex flex-row items-center justify-between md:w-1/5"}>
                {/*Nav Section*/}
                <Logo />
                <NavItems />
            </nav>
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