import Image from "next/image";
import SectionTitle from "./SectionTitle";

export default function JoinGroupSection() {
    const cards = [
        {
            id: 1,
            image: "/joingroup1.png",
            role: "Students",
            action: "Join as Student",
            subTitle: "GET STARTED AS",
            buttonColor: "bg-[#2563EB]", // Blue
        },
        {
            id: 2,
            image: "/joingroup2.png",
            role: "Teacher",
            action: "Start Teaching",
            subTitle: "START CREATING AS A",
            buttonColor: "bg-[#2563EB]", // Blue
        },
        {
            id: 3,
            image: "/joingroup3.png",
            role: "Schools",
            action: "Register School",
            subTitle: "DIGITIZE YOUR",
            buttonColor: "bg-[#2563EB]", // Blue
        },
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 xl:py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <SectionTitle sectionNumber={6} title="JOIN INUPGRO" className="mb-8 md:mb-10 lg:mb-12" />

                <div className="text-center mb-10 md:mb-14 lg:mb-20 max-w-3xl mx-auto">
                    <h2
                        className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-medium text-black mb-4 md:mb-6 leading-tight"
                        style={{ fontFamily: 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif' }}
                    >
                        Ready to Take the<br />Next Step?
                    </h2>
                    <p
                        className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                        style={{ fontFamily: 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif' }}
                    >
                        Whether you're a student, teacher, or school — Inupgro has a<br className="hidden md:block" />
                        journey mapped just for you.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-end gap-6 lg:gap-4">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`relative group rounded-2xl md:rounded-[2rem] overflow-hidden h-[340px] sm:h-[380px] md:h-[420px] lg:h-[500px] w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none lg:w-[min(100%,360px)] mx-auto lg:mx-0 shadow-2xl transition-all duration-500 ease-out hover:z-50 hover:scale-105 flex-shrink-0
                                ${index === 0 ? 'lg:rotate-[-8deg] lg:translate-y-6 z-10' : ''}
                                ${index === 1 ? 'z-30' : ''}
                                ${index === 2 ? 'lg:rotate-[8deg] lg:translate-y-6 z-20' : ''}
                            `}
                        >
                            {index === 0 ? (
                                <div className="absolute inset-0 origin-center transition-transform duration-700 group-hover:scale-105 scale-[1.15] lg:rotate-[7deg]">
                                    <Image src={card.image} alt={card.role} fill className="object-cover" priority />
                                </div>
                            ) : index === 2 ? (
                                <div className="absolute inset-0 origin-center transition-transform duration-700 group-hover:scale-105 scale-[1.15] lg:-rotate-[7deg]">
                                    <Image src={card.image} alt={card.role} fill className="object-cover" priority />
                                </div>
                            ) : (
                                <Image
                                    src={card.image}
                                    alt={card.role}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />

                            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 lg:p-8 flex flex-col items-center text-center pb-8 md:pb-10 lg:pb-12">
                                <p className="text-white/80 text-[10px] md:text-xs lg:text-sm font-bold tracking-wider uppercase mb-1">
                                    {card.subTitle}
                                </p>
                                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-5 lg:mb-6">
                                    {card.role}
                                </h3>

                                <button className={`${card.buttonColor} hover:bg-blue-700 text-white text-sm md:text-base font-semibold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:scale-105 min-h-[44px]`}>
                                    {card.action}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
