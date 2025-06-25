import { techStack } from "../data/techStack"
import { AnimatedSpan, Terminal, TypingAnimation } from "../../terminal/components/AnimatedSpan"
import type { TechStack } from "../interfaces/TechStack"

const About = () => {
    return(
      <section id="about" className="spacing section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
       <div className="relative flex flex-col md:flex-row items-end justify-start grid-about-me-intro overflow-hidden rounded-2xl">
        <img
            src="/assets/profile.webp"
            alt="Portrait of Noori"
            className="absolute inset-0 w-full h-full object-cover object-[center_35%] md:object-center opacity-90"
        />
        <div className="relative z-10 p-4 m-4 rounded-xl text-white w-full md:max-w-md md:absolute md:bottom-4 md:left-4">
            <p className="head-text-about-me">That's me</p>
            <p className="sub-text-about-me">
            I have over 5 years of experience in building frontend applications using React,
            TypeScript and JavaScript, along with a strong background in back-end development
            using C#
            </p>
        </div>
        </div>
        <div className="grid-techstack-color grid-about-me-techstack from-auroraStart via-auroraMid to-auroraEnd p-6 rounded-2xl text-binaryGlow h-auto md:h-full">
          <h2 className="text-2xl font-bold mb-4">&lt;/&gt; My Tech Stack</h2>
          <div className="space-y-6 text-sm">
            {techStack.map((group: TechStack) => (
              <div key={group.label}>
                <h3 className="font-semibold text-white">{group.label}</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm rounded-full bg-neutral-800 text-binaryGlow shadow-sm hover:bg-blue-200 transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid-techstack-color grid-about-me-main p-6 rounded-2xl text-white flex flex-col justify-center">
        <Terminal>
        <TypingAnimation delay={0}>
          <TypingAnimation>$ whoami && timedatectl | grep "Time zone"</TypingAnimation>
          <AnimatedSpan delay={3000}>👨‍💻 noori | contact@nooridev.com</AnimatedSpan>
          <AnimatedSpan delay={3100}>📍 Location Austria</AnimatedSpan>
          <AnimatedSpan delay={3200}>🕒 Timezone GMT+1</AnimatedSpan>
          <AnimatedSpan delay={3300}>🧭 Available 09:00 - 18:00</AnimatedSpan>
          <AnimatedSpan delay={3400}>🌐 Available for Remote Work</AnimatedSpan>
          <AnimatedSpan delay={3500}>$</AnimatedSpan>
        </TypingAnimation>
      </Terminal>
        </div>
        <div className="grid-techstack-color grid-about-me-main p-6 rounded-2xl text-white flex flex-col justify-center">
        <h3 className="text-xl font-semibold mb-2 text-binaryGlow">Beyond Code</h3>
        <p className="text-sm text-neutral-200">
        When I'm not writing code, I enjoy kayaking, hiking, and exploring nature's wild landscapes.  
        I'm also a big fan of psychological thrillers and always the support player in both games and real life
        </p>
        </div>
        <div className="grid-techstack-color grid-about-me-blog p-6 rounded-2xl text-white flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-2 text-binaryGlow">Blog Post: Software Challenge</h3>
          <p className="text-sm text-neutral-200 mb-2">
            I wrote a blog post about one of my hardest software challenges and how this experience helped
            shape my path to becoming a Freelance Software Developer
          </p>
          <a
            href="https://app.daily.dev/posts/new-job-hotel-opening-in-5-months-i4kgaw2ld"
            target="_blank"
            rel="noopener noreferrer"
            className="text-binaryGlow underline hover:text-white transition"
          >
            You can read the full story on daily.dev →
          </a>
        </div>
      </div>
    </section>
    )
}

export default About