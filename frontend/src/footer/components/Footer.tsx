import { socials } from "../data/socials"
import type { SocialLink } from "../interfaces/SocialLink"

const Footer = () => {
    return (
        <section className="flex flex-wrap items-container justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
            <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-600 to-transparent h-[1px] w-full"/>
                <div className="flex gap-2">
                    <p>Ing. Thomas Noori</p>
                </div>
                <div className="flex gap-3">
                    {socials.map((social: SocialLink) => (
                        <a href={social.href} target="_blank"
                            rel="noopener noreferrer" key={social.name} aria-label={social.name}>
                            <span><img src={social.icon} className="h-5" alt={social.name}/></span>
                        </a>
                    ))}
                </div>
        </section>
    )
}

export default Footer