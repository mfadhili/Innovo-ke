import {serifFont} from "@/app/fonts";
import Image from "next/image";
import {Buttons} from "@/components/Button";
import React from "react";
import HeroSection from "@/app/MainContent/HeroSection";
import Carousel from "@/app/MainContent/Carousel";
import AboutSection from "@/app/MainContent/AboutSection";
import ServicesSection from "@/app/MainContent/ServicesSection";
import TestimonialSection from "@/app/MainContent/TestimonialSection";
import {Contact} from "lucide-react";
import ContactSection from "@/app/MainContent/ContactSection";
import Footer from "@/app/MainContent/Footer";



function MainContent() {
    return (
        <div className={"bg-white flex flex-row w-full"}>
            {/*Content*/}
            <div className="bg-white overflow-hidden w-full">
                {/*Sections*/}
                <HeroSection/>
                <Carousel />
                <AboutSection />
                <ServicesSection />
                <TestimonialSection />
                <ContactSection />
                <Footer />
            </div>
        </div>
    );
}

export default MainContent