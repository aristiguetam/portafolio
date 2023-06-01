'use client';
import { Certificates } from "@/components/certificates/Certificates";
import { Hero } from "@/components/hero/Hero";
import { Projects } from "@/components/projects/Projects";
import { TecnologiesList } from "@/components/tecnologies/TecnologiesList";
import { motion } from "framer-motion";

export default function Home() {
  return (
    < motion.div
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0 }}
    >
      <Hero />
      <TecnologiesList />
      <Projects />
      <Certificates />
    </ motion.div>
  )
}
