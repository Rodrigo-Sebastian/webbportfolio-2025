import React, { useEffect } from 'react';

const ProjektDetail = ({ project, onBack }) => {

    if (!project) {
        return <h2>Ingen projektinformation tillgänglig.</h2>;
    }

    return (
        <div className="p-4 mt-20 flex flex-col lg:flex-row lg:justify-between gap-2 lg:w-[1480px] lg:m-auto lg:mt-20">
            <div className='flex-1 flex flex-col gap-8'>
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <p>{project.description}</p>
                <button onClick={onBack} className='bg-black rounded-md text-white text-center px-6 py-4 w-[250px] transition-colors duration-300 ease-out hover:bg-blue-400'>Tillbaka till projekt</button>
                <h3 className='font-bold text-xl'>Om Projektet</h3>
                <p>{project.about}</p>
                <h3 className='font-bold text-xl'>År då sidan/appen byggdes</h3>
                <p>{project.year}</p>
                <p className='font-bold text-xl'>Besök Github Repo:</p>
                <a href={project.githubLink} target='_blank' rel="noopener noreferrer" className='p-4 w-[200px] bg-black rounded-md text-white text-center transition duration-300 ease-in-out hover:bg-blue-400'>Github Repo</a>
            </div>
            <img src={project.image} alt={project.title} className="flex-1 lg:w-[200px] mt-10" />
        </div>
    );
};

export default ProjektDetail;
