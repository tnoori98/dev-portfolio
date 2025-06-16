import { useRef } from "react";
import { variants } from "../data/variants";
import type { ModalProps } from "../interfaces/ModalProps";
import { motion } from "framer-motion"

const ProjectModal = ({ project, closeModal }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if(modalRef.current && e.target === modalRef.current){
      closeModal();
    }
  }

  return (
    <motion.div 
    initial="hidden"
    animate="visible"
    exit="exit"
    onClick={handleBackdropClick}
    ref={modalRef}
    variants={variants}
    transition={{duration: 0.3}}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative max-w-2xl w-full mx-4 border border-white/10 shadow-lg rounded-2xl bg-gradient-to-l from-midnight to-navy">
        <button
            onClick={closeModal}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-white text-xl rounded-full hover:bg-white/10 transition"
            aria-label="Close modal"
            >
            &times;
        </button>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-t-2xl"
        />
        <div className="p-6 text-white">
          <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
          <p className="text-neutral-400 mb-3">{project.description}</p>
          {Array.isArray(project.details) ? (
            <ul className="list-disc list-inside text-neutral-300 space-y-1 mb-3">
              {project.details.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          ) : (
            <p className="text-neutral-300 mb-3">{project.details}</p>
          )}
          <div className="flex flex-wrap gap-2 text-sm mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-neutral-800 text-binaryGlow shadow-sm hover:bg-blue-200 transition"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.demo && (
            <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-animation inline-flex items-center gap-1 text-binaryGlow hover:text-white transition"
                >
                Live Demo
                <span className="text-sm font-bold translate-y-[-1px]">↗</span>
            </a>
            )}
            {project.github && (
            <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-animation inline-flex items-center gap-1 text-binaryGlow hover:text-white transition"
                >
                GitHub
                <span className="text-sm font-bold translate-y-[-1px]">↗</span>
            </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectModal;