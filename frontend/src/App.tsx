import Navbar from "./navbar/components/Navbar";
import Spotlight from "./spotlight/components/Spotlight";
import About from "./about/components/About";
import ProjectOverview from "./projects/components/ProjectOverview";
import WorkExperience from "./experiences/components/WorkExperience";
import Contact from "./contact/components/Contact";
import Footer from "./footer/components/Footer";

const App = () => {
  return(
    <div className="container mx-auto max-w-7xl">
      <Navbar/>
      <Spotlight/>
      <About/>
      <ProjectOverview/>
      <WorkExperience/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App