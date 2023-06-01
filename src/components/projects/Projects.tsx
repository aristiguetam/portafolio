import React from 'react'
import CardProjects from './CardProjects'
import { projects } from '../../../imageBase/projectsImage'

export const Projects = () => {

    return (
        <>
            <div className='flex flex-col space-y-2 mx-2  justify-center items-center h-[200px] sm:mx-0 sm:space-y-0 sm:flex-row' >
                <h2 className='text-3xl  font-bold  text-[#2B2C34] dark:text-white w-auto  sm:text-start sm:w-[500px]'>
                    Conoce mis proyectos
                </h2>
                <p className='text-lg text-[#2B2C34] dark:text-[#94A1B2] text-ellipsis text-center w-auto sm:text-start sm:w-[500px]'>
                    Proyectos en los cuales hago uso de mis conocimientos como programador Full Stack, integrando las tecnologías más utilizadas en el mercado.
                </p>
            </div>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 '>
                {
                    projects.MyProjects.map(project =>
                    (
                        <div key={project.id} className={`mb-10 sm:mb-0 `}>
                            <CardProjects projects={project} />
                        </div>
                    )
                    )
                }
            </div>

        </>
    )
}
