import React from 'react';

function TestimonialSection({}) {
    return (
        <section className={'flex justify-center h-[547px] bg-[#23262962] w-full'}>
            {/*Customer Testimonials*/}
            <div className="flex w-full">
                <div className="w-full flex flex-row">
                    <div className="bg-testimonials-image h-[547px] w-[576px] bg-cover bg-[50%_50%]">
                        <div className="flex items-center w-[297px] h-[49px] gap-[10px] pl-[29px] py-[8px] bg-[#c8dcfb]  ">
                            <div className="w-fit text-lg opacity-40 text-black font-medium tracking-normal leading-normal ">
                                CUSTOMER TESTIMONIALS
                            </div>
                        </div>
                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;