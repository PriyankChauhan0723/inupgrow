"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const testimonials = [
    {
        id: 1,
        name: "Neha",
        role: "Student, Class 9",
        image: "/avatar-1.png",
        quote:
            "I applied to three schools using the same profile — no more paperwork stress! Inupgro saved me days. I could track my application status in real-time and got accepted without ever visiting an office. It felt like the entire school system came online — just for me.",
    },
    {
        id: 2,
        name: "Anjali Sharma",
        role: "Teacher, Science",
        image: "/avatar-2.png",
        quote:
            "One video earned me ₹6,000 last month! Teaching online could feel this rewarding? It let me see where my students are from and what topics work best. It's like having a digital classroom without the walls.",
    },
    {
        id: 3,
        name: "Rahul Verma",
        role: "Administrator",
        image: "/Icons.png",
        quote:
            "Managing admissions was a nightmare before. Now, everything is streamlined. We can focus on education rather than administration.",
    },
    {
        id: 4,
        name: "Priya Singh",
        role: "Student, Class 11",
        image: "/Icons-1.png",
        quote:
            "The learning resources are top-notch. I found exactly what I needed to prepare for my exams.",
    },
    {
        id: 5,
        name: "Vikram Das",
        role: "Parent",
        image: "/Icons-2.png",
        quote:
            "I can finally track my child's progress without constant calls to the school. Transparency at its best.",
    },
    {
        id: 6,
        name: "Sonia Mehta",
        role: "Principal",
        image: "/Icons-3.png",
        quote:
            "Our institution's reach has expanded significantly. We are now connecting with students from all over the region.",
    },
];

const logos = [
    { name: "Unilever", src: "/uniliver.svg" },
    { name: "The Navigator Company", src: "/navigator.svg" },
    { name: "IBM", src: "/ibm.svg" },
    { name: "Abstract", src: "/circle.svg" },
    { name: "CALEM", src: "/calem.svg" },
    { name: "Aquafresh", src: "/aquafresh.svg" },
];

export default function TestimonialSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <section className="relative w-full bg-[#E0F2F7] py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background2.png"
                    alt="Background Pattern"
                    fill
                    className="object-cover opacity-50"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <SectionTitle sectionNumber={5} title="TESTIMONIALS" showTopBorder={false} className="mb-8 md:mb-10 lg:mb-12" />

                <div className="text-center mb-10 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto px-0">
                        Hear how Inupgro is transforming lives and institutions across India.
                    </h2>
                </div>

                <div className="lg:w-[100vw] lg:max-w-[100vw] lg:relative lg:left-1/2 lg:right-1/2 lg:-ml-[50vw] lg:-mr-[50vw]">
                    <div className="relative w-full lg:w-[100vw] lg:max-w-[100vw] lg:overflow-hidden mb-8 md:mb-10 lg:mb-20 lg:ml-[max(0px,calc(50vw-350px))]">
                        <div className="flex items-center gap-8 w-full lg:w-[calc(100vw-32px)] lg:flex-shrink-0">

                        <div className="w-full max-w-full lg:w-[700px] flex-shrink-0 bg-white rounded-2xl md:rounded-3xl lg:rounded-[32px] p-5 md:p-6 lg:p-8 xl:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] relative z-20 border-2 border-[#ADD8E6] transform transition-all duration-500 ease-in-out">
                            <div
                                className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0 relative overflow-hidden border-2 border-[#ADD8E6] bg-[#E0F2F7] mb-4 md:mb-5 lg:mb-6"
                                style={{
                                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                                }}
                            >
                                <Image
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <blockquote>
                                <p className="text-[#333333] text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-5 lg:mb-6 font-medium">
                                    "{testimonials[currentIndex].quote}"
                                </p>
                            </blockquote>

                            <div>
                                <h4 className="font-bold text-[#333333] text-sm md:text-base lg:text-lg">{testimonials[currentIndex].name}</h4>
                                <p className="text-[#333333] text-xs md:text-sm font-normal">{testimonials[currentIndex].role}</p>
                            </div>
                        </div>

                        <div className="hidden lg:block lg:w-[calc(100vw-764px)] lg:min-w-[200px] flex-shrink-0 bg-white rounded-[32px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] relative z-10 select-none pointer-events-none">
                            <div
                                className="w-20 h-20 flex-shrink-0 relative overflow-hidden bg-[#E0F2F7] mb-4"
                                style={{
                                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                                }}
                            >
                                <Image
                                    src={testimonials[(currentIndex + 1) % testimonials.length].image}
                                    alt="Next"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <blockquote>
                                <p className="text-[#333333] text-sm leading-relaxed mb-4 font-medium line-clamp-4">
                                    "{testimonials[(currentIndex + 1) % testimonials.length].quote}"
                                </p>
                            </blockquote>
                            <div>
                                <h4 className="font-bold text-[#333333] text-sm">{testimonials[(currentIndex + 1) % testimonials.length].name}</h4>
                                <p className="text-[#333333] text-xs font-normal">{testimonials[(currentIndex + 1) % testimonials.length].role}</p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-8 md:mt-10 lg:mt-12 lg:w-[100vw] lg:relative lg:-ml-[max(0px,calc(50vw-350px))] lg:flex lg:justify-center">
                    <div className="flex items-center justify-between gap-4 md:gap-6 bg-white/40 backdrop-blur-sm rounded-full py-2.5 px-4 md:px-6 w-full lg:w-[700px] border border-white/50">
                        <span className="text-gray-600 font-medium font-mono text-sm md:text-base">
                            {String(currentIndex + 1).padStart(2, '0')} — {String(testimonials.length).padStart(2, '0')}
                        </span>

                        <div className="flex gap-1 md:gap-2">
                            <button
                                onClick={prevSlide}
                                className="min-w-[44px] min-h-[44px] w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/50 transition-colors text-gray-600 text-sm md:text-base"
                                aria-label="Previous testimonial"
                            >
                                Prev
                            </button>
                            <button
                                onClick={nextSlide}
                                className="min-w-[44px] min-h-[44px] w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/50 transition-colors text-gray-900 font-bold text-sm md:text-base"
                                aria-label="Next testimonial"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div className="border-t border-gray-200/30 pt-10 md:pt-12 lg:pt-16">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-6 lg:gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {logos.map((logo) => (
                            <div key={logo.name} className="flex items-center justify-center h-10 md:h-12 lg:h-16 min-w-[70px] md:min-w-[90px] lg:min-w-[100px]">
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    width={160}
                                    height={80}
                                    className="h-8 md:h-10 lg:h-14 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
