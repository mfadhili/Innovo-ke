import React from 'react';
import {serifFont} from "@/app/fonts";
import Image from "next/image";

function Carousel({}) {
    return (
        <section className={'h-[301px]'}>
            {/*Carousel*/}
            <div className="flex flex-col items-center justify-center py-10 gap-8">
                <div className={`text-[#093c88] font-normal italic ${serifFont.className} text-4xl leading-normal tracking-normal`}>
                    Trusted by leading organisations
                </div>
                <div className="flex p-4 justify-center items-center gap-8">
                    {images.map((image,index) => (
                        <Image key={index} src={image.url} alt={image.alt} width={200} height={200} className={"object-contain h-20 flex items-center justify-center mx-auto" }/>
                    ))}
                </div>
            </div>
        </section>
    );
}


const images: {
    url: string,
    alt: string
}[] = [
    {
        url: "/images/logos/Frame.svg",
        alt: "logo"
    },
    {
        url: "/images/logos/Frame2.svg",
        alt: "logo"
    },
    {
        url: "/images/logos/Frame3.svg",
        alt: "logo"
    },
    {
        url: "/images/logos/Frame4.svg",
        alt: "logo"
    },
    {
        url: "/images/logos/Frame5.svg",
        alt: "logo"
    },
    {
        url: "/images/logos/Frame6.svg",
        alt: "logo"
    },
    {
        url: "/images/logos/Frame7.svg",
        alt: "logo"
    },
    {
        url: "/images/logos/Frame8.svg",
        alt: "logo"
    },
    {
        url: "/images/logos/Frame9.svg",
        alt: "logo"
    },

]
export default Carousel;