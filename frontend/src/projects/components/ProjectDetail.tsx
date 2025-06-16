import { useState } from "react";
import type { Project } from "../interfaces/Project";
import ProjectModal from "./ProjectModal";
import { AnimatePresence } from "framer-motion";

const ProjectDetail = ({ project }: { project: Project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="py-10 space-y-4 border-b border-white/10">
        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        <div className="flex flex-wrap gap-2 text-sm text-binaryGlow">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1 text-sm rounded-full bg-neutral-800 text-binaryGlow shadow-sm hover:bg-blue-200 transition">
              {tech}
            </span>
          ))}
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="text-binaryGlow underline hover:text-white transition"
        >
          More Details
        </button>
      </div>
      <AnimatePresence>
      {isOpen && (
        <ProjectModal
          project={project}
          closeModal={() => setIsOpen(false)}
        />
      )}
      </AnimatePresence>
    </>
  );
};

export default ProjectDetail;