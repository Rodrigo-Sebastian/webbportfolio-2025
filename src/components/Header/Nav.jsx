import React from 'react'
import DarkModeToggle from '../Darkmode/DarkModeToggle';

const NavLinks = [
    { id: 1, name: 'Om', href: '#om' },
    { id: 2, name: 'Projekt', href: '#projekt' },
    { id: 3, name: 'Kontakt', href: '#kontakt' },    
];

const Nav = () => {
  return (
    <div>
        <ul className='flex flex-row items-center gap-14 text-sm'>
            {NavLinks.map((link) =>(
                <li className='relative group' key={link.name}>
                    <a href={link.href} className='text-white uppercase'>{link.name}</a>
                    <span className="absolute left-0 top-8 h-0.5 w-full bg-blue-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </li>
            ))}
            <DarkModeToggle/>
        </ul>
    </div>
  )
}

export default Nav