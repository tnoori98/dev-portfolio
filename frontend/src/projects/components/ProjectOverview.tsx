import { projectlist } from "../data/projectlist";
import ProjectDetail from "./ProjectDetail";
import { tabs } from "../data/tabs";
import { useState } from "react";
import type { Tab } from "../interfaces/Tab";

const ProjectOverview = () => {
const [activeTab, setActiveTab] = useState("personal");

const filterProjcts = projectlist.filter((proj)=>proj.category === activeTab);

  return (
    <section id="projects" className="relative spacing section-spacing">
      <h2 className="text-heading">My Projects</h2>
      <div className="flex gap-4 mt-6 mb-8">
        {tabs.map((tab: Tab) => (
            <button key={tab.value}
                    onClick={()=>setActiveTab(tab.value)}
                    className={`px-4 py-2 text-sm rounded-full transition ${activeTab === tab.value 
                        ? "bg-aurora text-deepNight"
                        : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
                        }`}>
                        {tab.label}
            </button>
        ))}
      </div>
      <div className="mt-12 space-y-12">
        {filterProjcts.map((project) => (
          <div key={project.github + project.title}>
            <ProjectDetail project={project} />
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectOverview;