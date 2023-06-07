'use client';
import CardProjects from './CardProjects'
import { projects } from '../../../imageBase/projectsDb'
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';


export const Projects = () => {

    const ref = useRef(null);
    const ref2 = useRef(null);
    const isInView = useInView(ref, { once: true });
    const isInView2 = useInView(ref2, { once: true });
    const mainControls = useAnimation();
    const sliderControls = useAnimation();

    useEffect(() => {
        if (isInView2) {
            mainControls.start('visible');
            sliderControls.start('visible');
        }

    }, [isInView2]);

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
            sliderControls.start('visible');
        }

    }, [isInView]);



    return (
        <>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
                ref={ref2}
                id='projects'
                className=' container mx-auto flex flex-col space-y-2  justify-center items-center h-[200px]  sm:space-y-0 sm:flex-row' >
                <h2 className='text-3xl  font-bold  text-[#2B2C34] dark:text-white w-auto  sm:text-start sm:w-[500px]'>
                    Conoce mis proyectos
                </h2>
                <p className='text-lg sm:text-xl p-2 text-[#2B2C34] dark:text-[#94A1B2] text-ellipsis text-center w-auto sm:text-start sm:w-[500px]'>
                    Proyectos en los cuales hago uso de mis conocimientos como programador Full Stack, integrando las tecnologías más utilizadas en el mercado.
                </p>
            </motion.div>
            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className='container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 '>

                {
                    projects.myProjects.map(project =>
                    (
                        <div key={project.id} className={`mb-10 sm:mb-0 `}>
                            <CardProjects projects={project} />
                        </div>
                    )
                    )
                }


            </motion.div>



        </>
    )
}
