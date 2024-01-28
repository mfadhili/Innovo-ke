import {serifFont} from "@/app/fonts";
import Image from "next/image";

function MainContent() {
    return (
        <div className={"bg-white flex flex-row w-full"}>
            {/*Content*/}
            <div className="bg-white overflow-hidden w-full">
                {/*Sections*/}
                <section className={''}>
                    {/*Hero section*/}
                    <div className="bg-black   h-[964px]   w-full relative">
                        <img src={"/images/pexels-oleksandr-p-1004366.jpg"} className={"w-full h-full object-cover absolute bg-blend-overlay" }/>
                        <p className={`absolute w-[386px] top-[285px] left-[737px] ${serifFont.className} font-normal text-white text-[48px] tracking-[0] leading-[normal]`}>
                            Your Cloud Journey Starts Now
                        </p>
                        <p className={"absolute w-[329px] top-[524px] left-[496px] font-normal text-slate-300 text-[18px] tracking-[0] leading-[30px]"}>
                            Work from anywhere, connect with everyone: Unify your communication with cloud-powered PBX.
                        </p>

                    </div>
                </section>
                <section className={''}>
                    Carousel
                </section>
                <section className={''}>
                    About Us
                </section>
                <section className={''}>
                    Our solutions
                </section>
                <section className={''}>
                    Customer Testimonials
                </section>
                <section className={''}>
                    Contact us
                </section>
                <footer className={''}>
                    Footerz
                </footer>

            </div>
        </div>
    );
}

export default MainContent