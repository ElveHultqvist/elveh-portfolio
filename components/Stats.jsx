"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 11,
        text: "Years Of Expirience",
    },
    {
        num: 500,
        text: "Projects Completed",
    },
    {
        num: 348,
        text: "Technologies Mastered",
    },
    {
        num: 999,
        text: "Coffe Consumed",
    },
]

const Stats = () => {
  return (
    <section className="pt-10 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index) => {
                    return (
                        <div 
                        key={index}
                        className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                        >
                            <CountUp
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold"                                
                            />
                            <p className={`${
                                item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                                } leading-snug text-white/80`}
                                >
                                    {item.text}
                                </p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  );
};

export default Stats
