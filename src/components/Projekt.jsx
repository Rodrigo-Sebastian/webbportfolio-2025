import React, { useState, useRef } from 'react';
import Carousel from '../components/Carousel/Carousel';
import ProjektDetail from '../components/ProjektDetail/ProjektDetail';

const Projekt = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projektDetailRef = useRef(null); 

  const handleProjectSelect = (project) => {
    console.log('Project selected:', project);
    setSelectedProject(project);
    if (projektDetailRef.current) {
      projektDetailRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    console.log('Going back to project list');
    setSelectedProject(null);
  };

  return (
    <div id='projekt' className='mt-28 lg:w-[1480px] lg:m-auto lg:mt-32 mx-4'>
      <span className='w-full h-[1px] block bg-gray-200 mb-10'></span>
      <h1 className='text-2xl mb-20'>Mina Projekt</h1>
      <div>
        {selectedProject ? (
          <div ref={projektDetailRef}>
            <ProjektDetail project={selectedProject} onBack={handleBack} />
          </div>
        ) : (
          <Carousel onSelect={handleProjectSelect} />
        )}
      </div>
    </div>
  );
}

export default Projekt;
