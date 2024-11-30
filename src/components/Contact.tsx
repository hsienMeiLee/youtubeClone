import React from 'react';
import { BsGithub } from 'react-icons/bs';

const links = [
    {
        href : "https://github.com/hsienMeiLee",
        label : 'Github',
        icon : <BsGithub className='h-6 w-6 text-blue-500' />
    },{
        href : "https://github.com/hsienMeiLee",
        label : 'Github',
        icon : <BsGithub className='h-6 w-6 text-red-600' />
    },{
        href : "https://github.com/hsienMeiLee",
        label : 'Github',
        icon : <BsGithub className='h-6 w-6 text-gray-800' />
    }
]

const Contact = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Contact Me
        </h2>
        <div className="flex items-center">
            {links.map((link)=>(
                <a href={link.href} key={link.label} target='_blank' className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 mr-[2rem]">
                    {link.icon}
                    <span className="text-lg">{link.label}</span>
                </a>
            ))}
        </div>
    </section>
  )
}

export default Contact