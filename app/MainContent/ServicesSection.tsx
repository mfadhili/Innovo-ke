import React from 'react';
import {serifFont} from "@/app/fonts";

function ServicesSection({}) {
    return (
        <section className={'flex w-full justify-center bg-white'}>
            {/*Our solutions*/}
            <div className="w-3/4 flex flex-col pt-10 items-center gap-8">
                {/*Services*/}
                <p className={`font-normal text-4xl ${serifFont.className}`}>
                    <span className="text-[#093c88] ">Explore our </span>
                    <span className="text-[#aca1a1] text-4xl">Solutions</span>
                </p>
                <div className="flex flex-row gap-10">
                    <div className="relative flex w-[450px] h-[230px]  px-[10px] py-[31px] bg-card-image1 bg-cover bg-[50%_50%]">
                        <div className="flex justify-between w-[325px] h-[69px] bg-[#093c88] absolute top-[150px] left-[110px]  ">
                            <div className="pt-10 px-4 text-2xl font-light text-slate-50 tracking-normal leading-normal">
                                COMMUNICATIONS
                            </div>
                            <div className="inline-flex items-center relative flex-[0_0_auto] mt-[-33.27px] mb-[-33.27px] mr-[-10.00px]">
                                <div className="w-[12px] bg-[#403c3c] relative h-[74px]" />
                                <div className="w-[12px] bg-[#392b2b] relative h-[74px]" />
                                <div className="w-[18px] bg-white relative h-[74px]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[392px] h-[230px]  px-[10px] py-[31px] bg-card-image2 bg-cover bg-[50%_50%]"></div>
                    <div className="flex w-[392px] h-[230px]  px-[10px] py-[31px] bg-card-image3 bg-cover bg-[50%_50%]"></div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;