"use client";
import React from "react";



const achievementsList = [
    {
        metric: "Projetoss",
        value: "+100",
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Experiência",
        value: "+4",
    },

    {
        metric: "Anos",
        value: "+3",
    },
];

const AchievementsSection = () => {
    return (
        <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className="border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between">
                {achievementsList.map((achievement, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center justify-center mx-4">
                            <h2 className="text-white text-4xl font-bold">{achievement.value}</h2>
                            <p className="text-slate-400 text-base">{achievement.metric}</p>
                        </div>
                    );
                })}
            </div>
        </div>

    );
};

export default AchievementsSection;