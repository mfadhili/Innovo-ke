import {serifFont} from "@/app/fonts";
import Image from "next/image";
import {Buttons} from "@/components/Button";
import React from "react";
import HeroSection from "@/app/MainContent/HeroSection";
import Carousel from "@/app/MainContent/Carousel";



function MainContent() {
    return (
        <div className={"bg-white flex flex-row w-full"}>
            {/*Content*/}
            <div className="bg-white overflow-hidden w-full">
                {/*Sections*/}
                <HeroSection/>
                <Carousel />
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