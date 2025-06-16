import { Timeline } from "../../timeline/components/Timeline"
import { experience } from "../data/experience"

const WorkExperience = () => {
    return(
        <section id="experience">
            <Timeline data={experience}/>
        </section>
    )
}

export default WorkExperience