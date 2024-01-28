import React from 'react';
import {serifFont} from "@/app/fonts";
import {Buttons} from "@/components/Button";

function TestimonialSection({}) {
    return (
        <section className={'flex justify-center h-[547px] bg-[#23262962] w-full'}>
            {/*Customer Testimonials*/}
            <div className="flex w-full">
                <div className="w-full flex flex-row justify-between">
                    <div className="bg-testimonials-image h-[547px] w-[576px] bg-cover bg-[50%_50%]">
                        <div className="flex items-center w-[297px] h-[49px] gap-[10px] pl-[29px] py-[8px] bg-[#c8dcfb]  ">
                            <div className="w-fit text-lg opacity-40 text-black font-medium tracking-normal leading-normal ">
                                CUSTOMER TESTIMONIALS
                            </div>
                        </div>
                    </div>
                    <div className="w-3/5 p-10 flex flex-col pt-15 gap-14">
                        <p className={` w-1/2 font-normal text-5xl ${serifFont.className} leading-snug tracking-normal`}>
                            <span className="italic text-[#e6e2e2]">How</span>
                            <span className="text-[#e6e2e2]"> Innovo Networks </span>
                            <span className="text-[#0c51b8]">support</span>
                            <span className="text-[#e6e2e2]"> the </span>
                            <span className="text-[#093c88]">Public Protectorate</span>
                            <span className="text-[#e6e2e2]">
                            {" "}
                            of <br />
                            South Africa
                            <br />
                            </span>
                        </p>
                        <p className={"w-1/2 pl-12 font-medium text-[#093c88] text-xl leading-[25px] tracking-[0"}>
                            Innovo Networks was apppointed by public Protectorate for the provision of Internet and voice services.
                        </p>
                        <div className="flex flex-row w-1/2 pl-16 items-center gap-6">
                            <div className={`${serifFont.className} font-semibold text-slate-300 text-5xl  tracking-[0.70px] leading-normal`}>
                                99%
                            </div>
                            <div className={`font-semibold  text-2xl text-[#f5f4f4] tracking-[0] leading-[normal] whitespace-nowrap`}>
                                SLA and Reliability
                            </div>
                        </div>
                        <Buttons
                            className="!w-[220px]"
                            divClassName="!mt-[-4.00px] !text-[12px] !mb-[-2.00px] ![white-space:unset] !font-medium"
                            property1="variant-3"
                            text="SEE MORE CUSTOMER STORIES"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;