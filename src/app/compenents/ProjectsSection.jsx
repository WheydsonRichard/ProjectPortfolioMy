"use client";
import React, { useState, useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';



const projectsData = [
    {
        id:1,
        title:"Website",
        description:"Site Personalizado",
        image: "/images/projeto4.png",
        tag: ['Todos', "Web"],
        gitUrl: "/",
        previewUrl: "/",

    },
    {
        id:2,
        title:"Sitema Juridico",
        description:"Sitema operacional Juridíco",
        image: "/images/projeto3.png",
        tag: ['Todos', "Web"],
        gitUrl: "/",
        previewUrl: "/",

    },
    {
        id:3,
        title:"Sitema de Incidência",
        description:"Sistema de chamados de suporte para sistema juridíco",
        image: "/images/projeto2.png",
        tag: ['Todos', "Web"],
        gitUrl: "/",
        previewUrl: "/",

    },
    {
        id:4,
        title:"Automação ChatBOT FAQ",
        description:"Sistema e Automação whatssap para cliente juridico empresa de supermercado",
        image: "/images/projeto5.png",
        tag: ['Todos', "Web", "Aplicativos"],
        gitUrl: "/",
        previewUrl: "/",

    },
    {
        id:5,
        title:"Automação Dowloand Pje",
        description:"Automação Dowloand de arquivo de processo juridico sistem PJE",
        image: "/images/projeto6.png",
        tag: ['Todos', "Aplicativos"],
        gitUrl: "/",
        previewUrl: "/",

    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("Todos");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) => 
       project.tag.includes(tag)
    );

  return (
    <section id='projects'>
    
    <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>Projetos</h2>
    <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Aplicativos"
          isSelected={tag === "Aplicativos"}
        />
    </div>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
    {filteredProjects.map((project) => 
    <ProjectCard 
    key={project.id} 
    title={project.title} 
    description={project.description} 
    imgUrl={project.image}
    tags={project}
    gitUrl={project.gitUrl}
    previewUrl={project.previewUrl}
    />
    )}</div></section>
  );
};

export default ProjectsSection