import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import IlDivino from '../../images/il-divino.png';
import Ehandel from '../../images/E-handel.png';
import StklmEats from '../../images/stklm-eats.png';
import ZoomRedesign from '../../images/zoom-redesign.png';
import ChasMovies from '../../images/chas-movies.png';

const projects = [
    { id: 1, year: 2023, title: 'IL-Divino', image: IlDivino, link: '/projekt-1', githubLink: 'https://github.com/Rodrigo-Sebastian/IL-Divino-restaurang', description: 'Beskrivning av IL-Divino', about: 'En av mina första projekt, byggd med html, sass & javascript', borderColor: 'border-red-950' },
    { id: 2, year:2024, title: 'STKL-eats', image: StklmEats, link: '/projekt-2', githubLink: 'https://github.com/Rodrigo-Sebastian/stklm-eats', description: 'Design och utveckling av en interaktiv landingsida för Stklm-eat', about: 'En Uber Eats clone, byggd med react.jsm tailwind & next.js', borderColor: 'border-green-800' },
    { id: 3, year:2024, title: 'Zoom-redesign', image: ZoomRedesign, link: '/projekt-3', githubLink: 'https://github.com/Rodrigo-Sebastian/zoom-redesign', description: 'Design och utveckling av en interaktiv landingsida för Stklm-eat', about: 'En clonesite av Zoom:s hero-section, byggd med tailwind & React.', borderColor: 'border-yellow-500' },
    { id: 4, year:2024, title: 'E-handel', image: Ehandel, link: '/projekt-4', githubLink: '', description: 'Beskrivning av E-handel', about: 'En Ehandels platform byggd med React.js, Tailwind & Next.js med tillämpad inloggnind och registrerings sidor.', borderColor: 'border-blue-500' },
    { id: 5, year:2024, title: 'Chas-Movies', image: ChasMovies, link: '/projekt-5', githubLink: 'https://github.com/Rodrigo-Sebastian/chas-movies', description: 'Beskrivning av Chas-Movies', about: 'En React & vite movie-app med API ', borderColor: 'border-purple-500' },   
];

const Carousel = ({ onSelect }) => {
    return (
        <div className='z-10'>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                }}
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id} className={`border ${project.borderColor} bg-white rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-xl`}>
                        <img src={project.image} alt={project.title} className="h-70 w-full object-cover mb-2"/>
                        <div className='flex flex-col lg:flex-row items-center gap-6 justify-between w-full p-4'>
                            <h2 className='font-bold'>{project.title}</h2>
                            <button 
                                onClick={() => onSelect(project)}
                                className='px-8 py-3 rounded-md bg-black text-white transition-colors duration-300 ease-out hover:bg-blue-400'>
                                Läs mer
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
