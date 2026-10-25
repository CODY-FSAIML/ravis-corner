'use client'

import { ArrowUpRight, Coffee, Code2, Mail, MapPin, Menu, Sparkles } from 'lucide-react'

const heroImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cozy%20Caf%C3%A9%20Contemplation-jRtsHGyOuiy5PMYh3ETr1nc5g2zMFP.png'

const projects = [
  { name: 'Gigflow Smart Leads', type: 'MERN CRM', text: 'A production-minded sales workspace with JWT auth, role-based access, filtering, pagination, and Dockerized services.', stack: 'React · Node · MongoDB · Docker', href: 'https://github.com/CODY-FSAIML/gigflow-smart-leads-dashboard' },
  { name: 'Ravis AI.control', type: 'Decision intelligence', text: 'A CatBoost-powered command center that analyzes Bengaluru incidents and predicts road-closure risk.', stack: 'Python · CatBoost · Pandas · Streamlit', href: 'https://github.com/CODY-FSAIML/Gridlock_prototype' },
  { name: 'Rebelions Resolve', type: 'Local Code AI', text: 'An offline-first coding agent with repository retrieval, symbol extraction, code verification, and controlled tools.', stack: 'Python · Qwen · llama.cpp · Vulkan', href: 'https://github.com/The-Rebelions/Rebelions_resolve' },
  { name: 'E-commerce BDD', type: 'Test automation', text: 'A maintainable SauceDemo automation framework covering login, cart, product validation, screenshots, and JUnit reports.', stack: 'Behave · Gherkin · Selenium · POM', href: 'https://github.com/CODY-FSAIML/E-commerce-BBD-automation' },
]

const skills = ['Python', 'SQL / MySQL', 'Django / FastAPI', 'React / TypeScript', 'AI / ML / RAG', 'Selenium / BDD', 'PostgreSQL / MongoDB', 'Docker / AWS']

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="mb-12"><p className="eyebrow">{eyebrow}</p><h2 className="display mt-3">{title}</h2></div>
}

function App() {
  return <main>
    <nav className="nav"><a href="#home" className="brand"><Coffee size={18} /> <span>Ravi&apos;s <i>corner</i></span></a><div className="nav-links"><a href="#about">about</a><a href="#work">work</a><a href="#skills">skills</a><a href="#contact">contact</a></div><a href="mailto:vvsravis@gmail.com" className="nav-cta">say hello <ArrowUpRight size={15} /></a><button className="menu" aria-label="Open menu"><Menu /></button></nav>

    <section id="home" className="hero"><div className="hero-art"><img src={heroImage} alt="Ravi Sankar working in a warm café with a laptop and coffee" /><div className="sunwash" /></div><div className="hero-copy"><p className="eyebrow">CSE student · builder · curious mind</p><h1 className="display">Good ideas<br /><em>start warm.</em></h1><p className="hero-text">I&apos;m Ravi Sankar, a Computer Science Engineering student who likes turning coffee, curiosity, and complex problems into useful software.</p><div className="hero-actions"><a className="button dark" href="#work">Explore my work <ArrowUpRight size={16} /></a><a className="text-link" href="#about">My story ↓</a></div></div><div className="hero-note"><Sparkles size={16} /> Sunrise systems & cyberpunk dreams</div></section>

    <section id="about" className="section about"><div><SectionTitle eyebrow="01 / the person behind the code" title="A little less noise. A lot more intent." /><p className="large-copy">I&apos;m a 2027 B.Tech Computer Science student at Raghu Engineering College, Visakhapatnam. My sweet spot is the space between a thoughtful product, reliable systems, and the small details that make software feel human.</p></div><div className="about-card"><MapPin size={18} /><p>Visakhapatnam,<br /><strong>Andhra Pradesh, India</strong></p><span>Available for internships & entry-level roles</span></div></section>

    <section id="work" className="section work"><SectionTitle eyebrow="02 / things I&apos;ve made" title="Projects worth a second cup." /><div className="project-grid">{projects.map((project, index) => <a className="project" key={project.name} href={project.href} target="_blank" rel="noreferrer"><div className="project-top"><span>0{index + 1}</span><ArrowUpRight size={18} /></div><p className="project-type">{project.type}</p><h3>{project.name}</h3><p>{project.text}</p><small>{project.stack}</small></a>)}</div></section>

    <section id="skills" className="section skills"><div><SectionTitle eyebrow="03 / my toolkit" title="Practical, polyglot, always learning." /><p className="large-copy">From backend APIs to browser automation and local AI, I enjoy learning the layer that makes the whole system work better.</p></div><div className="skill-list">{skills.map((skill, index) => <div key={skill}><span>0{index + 1}</span><strong>{skill}</strong></div>)}</div></section>

    <section className="section experience"><SectionTitle eyebrow="04 / experience" title="Learning in the real world." /><div className="experience-row"><div><p className="project-type">Jun 2026 — Aug 2026</p><h3>Software Developer Intern</h3><p className="large-copy">Heal Bharat Services LLP</p></div><p>Contributed to Quick-Check-Desk, an enterprise Hospital OPD Management System across web, desktop, and mobile. Worked with React Native, Expo, TypeScript, Firebase, GitHub, and feature validation across patient registration, check-ins, queue management, and notifications.</p></div></section>

    <section id="contact" className="contact"><p className="eyebrow">05 / pull up a chair</p><h2 className="display">Let&apos;s make<br /><em>something useful.</em></h2><p>Have a project, opportunity, or good question? My inbox is open.</p><a className="button light" href="mailto:vvsravis@gmail.com">vvsravis@gmail.com <ArrowUpRight size={16} /></a><div className="socials"><a href="https://github.com/CODY-FSAIML" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 /><span className="social-popup">GitHub</span></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Code2 /><span className="social-popup">LinkedIn</span></a><a href="mailto:vvsravis@gmail.com" aria-label="Email"><Mail /><span className="social-popup">Email</span></a></div></section>
    <footer><span>© 2027 V.V.S. Ravi Sankar</span><span>Made with coffee & curiosity</span></footer>
  </main>
}

export default function Page() { return <App /> }
