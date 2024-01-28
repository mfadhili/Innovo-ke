import React from 'react';
import Image from "next/image";

function AboutSection({}) {
    return (
        <section className={' flex justify-center bg-[#093c88] '}>
            {/*About Us*/}
            <div className="flex flex-row-reverse w-5/6 justify-evenly items-center gap-4 pl-10">
                <Image src={"/images/pexels-fauxels-3183165.jpg"} alt={"About"} height={704} width={603} className={"h-full"}/>
                <div className="flex flex-col justify-center items-center gap-40 p-4 w-[40%]">
                    {/*Text*/}
                    <p className={"font-normal text-slate-50 text-2xl text-center"}>
                        We don&#39;t just offer cloud solutions, we are your trusted technology advisors, tailoring services to
                        your needs and goals.
                    </p>
                    <p className={"font-bold text-white text-4xl text-center tracking-[0] leading-relaxed"}>
                        For all businesses, from startups to enterprises, we help you&nbsp;&nbsp;navigate the cloud and reach
                        your&nbsp;&nbsp;full potential.
                    </p >
                    <p className={"font-normal text-slate-50 text-2xl text-center"}>
                        Choose us for a dedicated partner who cares about your success.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;