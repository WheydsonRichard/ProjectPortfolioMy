"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image';
import TabButton from './TabButton';
import { AcademicCapIcon, CodeBracketIcon } from "@heroicons/react/24/solid";


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='pl-2'>
                <li><CodeBracketIcon className="h-5 w-5 inline-block mr-2" />Node.js</li>
                <li><CodeBracketIcon className="h-5 w-5 inline-block mr-2" />PostgreSQL</li>
                <li><CodeBracketIcon className="h-5 w-5 inline-block mr-2" />Python</li>
                <li><CodeBracketIcon className="h-5 w-5 inline-block mr-2" />React</li>
                <li><CodeBracketIcon className="h-5 w-5 inline-block mr-2" />JavaScprit</li>
            </ul>
        )

    },
    {
        title: "Educação",
        id: "education",
        content: (
            <ul className='pl-2'>
                <li><AcademicCapIcon className="h-5 w-5 inline-block mr-2" />Analista e Desenvolvimento de sistema</li>
                <li><AcademicCapIcon className="h-5 w-5 inline-block mr-2" />Universidade Anhaguera, Fortaleza-ce</li>
            </ul>
        )

    },
    {
    title: "Certificados",
    id: "certifications",
    content: (
        <ul className='list-disc pl-2'>
            <li>Manager Project</li>
            <li>SalesForce Administration</li>
        </ul>
    )

}
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }
    return (
        <section className='text-white' id="about">
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image
                    src="/images/pc.png"
                    width={500}
                    height={500}
                />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>Sobre Mim</h2>
                    <p className='text-base lg:text-lg'>
                        Sou um desenvolvedor software apaixonado por criar sistema,
                        aplicativos e  web interativas e responsivas. Tenho experiência
                        em trabalhar com Javascript, react, node.js, python, postgreSQL, servidor cloud, e git.
                        Sou um aprendiz rápido e estou sempre buscando expandir meu conhecimento e conjunto de habilidades.
                        Trabalho em equipe e estou animado para trabalhar com outras pessoas para criar projetos incríveis.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton selecTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {""}
                            Skills {""}
                        </TabButton>
                        <TabButton selecTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {""}
                            Educação {""}
                        </TabButton>
                        <TabButton selecTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {""}
                            Certificados {""}
                        </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id == tab).content}</div>
                </div>
            </div>
        </section>
    )
};

export default AboutSection