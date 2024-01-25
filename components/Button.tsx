/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
    property1: "variant-4" | "variant-2" | "variant-3" | "default";
    className: any;
    divClassName: any;
    text: string;
}

export const Buttons = ({ property1, className, divClassName, text = "Enquire Now" }: Props): JSX.Element => {
    return (
        <div
            className={`w-[143px] flex items-center gap-[10px] px-[8px] py-[20px] h-[49px] justify-center relative ${
                ["variant-3", "variant-4"].includes(property1) ? "border border-solid" : ""
            } ${property1 === "variant-3" ? "border-[#c8dcfb]" : property1 === "variant-4" ? "border-white" : ""} ${
                property1 === "default" ? "bg-[#fff9f9]" : "bg-[#093c88]"
            } ${className}`}
        >
            <div
                className={`[font-family:'Inter',Helvetica] w-fit mt-[-8.50px] tracking-[0] text-[20px] font-normal leading-[normal] whitespace-nowrap mb-[-6.50px] relative ${
                    property1 === "variant-2"
                        ? "text-[#fefdfd]"
                        : property1 === "variant-3"
                            ? "text-[#c8dcfb]"
                            : property1 === "variant-4"
                                ? "text-white"
                                : "text-[#093c88]"
                } ${divClassName}`}
            >
                {text}
            </div>
        </div>
    );
};
