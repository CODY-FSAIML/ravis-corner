'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, PerspectiveCamera, Sparkles } from '@react-three/drei'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUp, ArrowUpRight, Code2, Mail, Terminal, Zap } from 'lucide-react'
import { useRef } from 'react'
import * as THREE from 'three'

const images = {
  portrait: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-25%20at%2021.40.47-RYYO8InPxCVckT8OoPwyzUJdx8a7vJ.jpeg',
  street: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-25%20at%2021.46.55-wpPCJSWbWMNccRl0Qe0zhkOuNa9gxu.jpeg',
  beach: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-25%20at%2021.41.21-F7olfj34Fgw4uPmh3z3Pbwmpl5q4t3.jpeg',
  hoodie: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-25%20at%2021.49.07-zqjDtEmnkSJynIETliuOnQa6Sd2rTB.jpeg',
  uniform: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-25%20at%2021.48.16-iKmcRJGhdKslxR0lQzmSaClKr26RXe.jpeg',
}

function NeonScene() {
  const group = useRef<THREE.Group>(null)
  useFrame((state) => { if (group.current) group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.035, 0.04) })
  return <group ref={group}>
    <fog attach="fog" args={['#050510', 8, 28]} />
    <ambientLight intensity={0.35} color="#635bff" />
    <pointLight position={[-4, 3, 2]} intensity={18} color="#265dff" distance={14} />
    <pointLight position={[5, 1, -2]} intensity={12} color="#f10bff" distance={12} />
    {Array.from({ length: 24 }).map((_, i) => <mesh key={i} position={[(i % 6 - 2.5) * 2.2, ((i * 7) % 9) / 2 - 2, -i * 0.36 - 1]}>
      <boxGeometry args={[1.25, (i % 5 + 2) * 1.3, 1.1]} /><meshStandardMaterial color={i % 3 === 0 ? '#100d34' : '#071629'} emissive={i % 2 ? '#173b9a' : '#8b12a8'} emissiveIntensity={1.8} metalness={0.65} roughness={0.3} />
    </mesh>)}
    <Sparkles count={160} scale={[18, 10, 13]} size={1.5} speed={0.2} color="#4fe9ff" />
    <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.7}><mesh position={[0, 0.7, -2]}><torusGeometry args={[2.2, 0.012, 12, 80]} /><meshBasicMaterial color="#e22aff" /></mesh></Float>
  </group>
}

function WebGLBackdrop() {
  return <div className="fixed inset-0 -z-10 bg-[#050510]" aria-hidden="true"><Canvas dpr={[1, 1.5]} gl={{ antialias: true }}><PerspectiveCamera makeDefault position={[0, 1, 13]} fov={42} /><NeonScene /></Canvas><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,#050510aa_65%,#050510_100%)]" /></div>
}

const chapters = ['arrival', 'story', 'lab', 'toolkit', 'experience', 'mission']

function Nav() {
  return <header className="fixed left-0 right-0 top-0 z-30 flex items-center justify-between px-6 py-5 md:px-12"><a href="#arrival" className="font-mono text-xs tracking-[0.35em] text-cyan-200">VVS<span className="text-fuchsia-400">/</span>27</a><nav className="hidden gap-7 font-mono text-[10px] uppercase tracking-[0.25em] text-white/60 md:flex">{chapters.map((c, i) => <a key={c} href={`#${c}`} className="transition hover:text-cyan-200">0{i + 1} / {c}</a>)}</nav><a href="mailto:hello@example.com" className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80 transition hover:border-cyan-300 hover:text-cyan-200"><Mail size={13} /> connect</a></header>
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll(); const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return <motion.div className="fixed left-0 right-0 top-0 z-40 h-px origin-left bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500" style={{ scaleX }} />
}

function Label({ number, children }: { number: string; children: React.ReactNode }) { return <div className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.38em] text-cyan-200"><span className="text-fuchsia-400">{number}</span><span className="h-px w-8 bg-cyan-300/60" />{children}</div> }
function ImageCard({ src, alt, className = '' }: { src: string; alt: string; className?: string }) { return <div className={`relative overflow-hidden border border-white/15 bg-white/5 p-1 shadow-2xl shadow-fuchsia-950/30 ${className}`}><img src={src} alt={alt} className="h-full w-full object-cover grayscale-[20%] transition duration-700 hover:scale-105" /><div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08051488] to-transparent" /></div> }

function App() {
  const { scrollYProgress } = useScroll(); const y = useTransform(scrollYProgress, [0, 1], [0, -90])
  return <main className="relative overflow-hidden bg-[#050510] text-white selection:bg-fuchsia-400 selection:text-black"><WebGLBackdrop /><ScrollProgress /><Nav />
    <section id="arrival" className="relative flex min-h-screen items-center px-6 pb-20 pt-28 md:px-16 lg:px-24"><div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]"><motion.div style={{ y }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}><Label number="01">The arrival</Label><p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-fuchsia-300">Computer science / 2027</p><h1 className="max-w-3xl text-[clamp(3.5rem,10vw,9rem)] font-black leading-[.82] tracking-[-.08em]">RAVI<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-400 to-fuchsia-400">SANKAR.</span></h1><p className="mt-8 max-w-md text-sm leading-7 text-white/60">Engineering intelligence. Building what&apos;s next. A student exploring AI/ML, backend systems, developer tools, cybersecurity, and software quality.</p><div className="mt-9 flex flex-wrap gap-4"><a href="#story" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-black transition hover:bg-cyan-200">Enter my world <ArrowDown size={15} className="transition group-hover:translate-y-1" /></a><a href="#lab" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/70 hover:border-fuchsia-300 hover:text-fuchsia-200">View the lab <ArrowUpRight size={14} /></a></div></motion.div><motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: .2 }} className="relative mx-auto w-full max-w-[410px] lg:mt-16"><div className="absolute -inset-5 rounded-full bg-fuchsia-600/15 blur-3xl" /><ImageCard src={images.portrait} alt="Portrait of Ravi Sankar" className="aspect-[4/5] rotate-2" /><div className="absolute -bottom-5 -left-5 border border-cyan-300/35 bg-[#071125]/90 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-100">identity file<br /><span className="text-white/50">V.V.S. / active</span></div></motion.div></div></section>

    <section id="story" className="relative mx-auto min-h-screen max-w-7xl px-6 py-32 md:px-16 lg:px-24"><div className="grid items-center gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><Label number="02">The story</Label><h2 className="max-w-xl text-5xl font-bold tracking-[-.06em] md:text-7xl">A learner.<br /><span className="text-fuchsia-300">A builder.</span><br />A dreamer.</h2><p className="mt-7 max-w-sm text-sm leading-7 text-white/55">Curiosity becomes code. Experiments become tools. Every environment reveals another way to think, make, and keep moving.</p></div><div className="grid grid-cols-2 gap-4"><ImageCard src={images.hoodie} alt="Ravi in a pink hoodie indoors" className="mt-12 aspect-[3/4] -rotate-2" /><ImageCard src={images.beach} alt="Ravi standing by the ocean" className="aspect-[3/4] rotate-2" /></div></div></section>

    <section id="lab" className="relative mx-auto min-h-screen max-w-7xl px-6 py-32 md:px-16 lg:px-24"><div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]"><div><Label number="03">The engineering lab</Label><h2 className="max-w-2xl text-5xl font-bold tracking-[-.06em] md:text-7xl">Ideas into<br /><span className="text-cyan-200">reality.</span></h2><p className="mt-7 max-w-md text-sm leading-7 text-white/55">A collection of systems, experiments, and product ideas built at the edge of software and curiosity.</p><div className="mt-10 flex items-center gap-4 font-mono text-xs text-white/40"><Terminal size={16} className="text-cyan-300" /> LIVE PROJECT INDEX</div></div><div className="grid gap-3 sm:grid-cols-2">{[['Local Code AI','Offline-first coding assistant','Python / GGUF / llama.cpp'],['TruthGuard','Multimodal authenticity analysis','AI / Research / Trust'],['ZAARAVA','E-commerce application','React / APIs / Data'],['BDD Framework','Reliable test automation','Python / Behave / Selenium']].map(([title, desc, tags], i) => <article key={title} className="group border border-white/10 bg-[#0c0a1d]/75 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-300/60"><div className="mb-12 flex justify-between font-mono text-[10px] text-white/35"><span>0{i + 1}</span><ArrowUpRight size={14} className="text-cyan-300 opacity-0 transition group-hover:opacity-100" /></div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 text-sm text-white/55">{desc}</p><p className="mt-6 font-mono text-[10px] uppercase tracking-wider text-fuchsia-300/80">{tags}</p></article>)}</div></div></section>

    <section id="toolkit" className="relative mx-auto min-h-screen max-w-7xl px-6 py-32 md:px-16 lg:px-24"><Label number="04">The toolkit</Label><div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]"><h2 className="text-5xl font-bold tracking-[-.06em] md:text-7xl">Curious by<br /><span className="text-blue-400">default.</span></h2><div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">{[['Languages','Python · Java · JavaScript · TypeScript · C'],['Frontend','React · Next.js · React Native · Expo'],['Backend','Django · REST APIs'],['Data','PostgreSQL · SQL · MySQL · Supabase'],['AI & tools','Qwen · GGUF · llama.cpp · Git'],['Testing','Behave · Gherkin · Selenium']].map(([name, list]) => <div key={name} className="bg-[#09091b]/85 p-5"><Zap size={16} className="mb-8 text-cyan-300" /><h3 className="font-mono text-xs uppercase tracking-widest text-white">{name}</h3><p className="mt-3 text-xs leading-6 text-white/50">{list}</p></div>)}</div></div></section>

    <section id="experience" className="relative mx-auto min-h-screen max-w-7xl px-6 py-32 md:px-16 lg:px-24"><div className="grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]"><ImageCard src={images.uniform} alt="Ravi in a khaki uniform outdoors" className="mx-auto aspect-[3/4] w-full max-w-sm -rotate-2" /><div><Label number="05">Experience / real-world learning</Label><p className="font-mono text-xs uppercase tracking-[.25em] text-cyan-200">Jun — Aug 2026</p><h2 className="mt-5 text-4xl font-bold tracking-[-.05em] md:text-6xl">Software Developer<br /><span className="text-fuchsia-300">Internship.</span></h2><p className="mt-6 text-lg text-white/70">Heal Bharat Services LLP</p><div className="mt-8 grid gap-3 text-sm text-white/55"><p className="border-l border-cyan-300/60 pl-4">React Native / Expo UI layout work</p><p className="border-l border-cyan-300/60 pl-4">Cross-platform manual and functional validation</p><p className="border-l border-cyan-300/60 pl-4">Patient registration, check-in, queue, and status workflows</p><p className="border-l border-cyan-300/60 pl-4">Collaboration with Firebase Auth and Firestore</p></div></div></div></section>

    <section id="mission" className="relative flex min-h-screen items-center px-6 py-32 md:px-16 lg:px-24"><div className="mx-auto w-full max-w-7xl"><Label number="06">The next mission</Label><div className="max-w-3xl"><h2 className="text-6xl font-black leading-[.9] tracking-[-.08em] md:text-9xl">STILL<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-fuchsia-400">BUILDING.</span></h2><p className="mt-10 max-w-md text-lg leading-8 text-white/60">Let&apos;s build something meaningful. The next chapter is always one experiment away.</p><div className="mt-10 flex flex-wrap gap-5"><a href="mailto:hello@example.com" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-mono text-[10px] uppercase tracking-[.25em] text-black hover:bg-cyan-200">Get in touch <ArrowUpRight size={15} /></a><a href="#arrival" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.25em] text-white/50 hover:text-white"><ArrowUp size={14} /> return to beginning</a></div></div><div className="mt-24 flex gap-5 border-t border-white/10 pt-6"><a href="#" aria-label="GitHub" className="text-white/40 hover:text-white"><Code2 size={18} /></a><a href="#" aria-label="LinkedIn" className="text-white/40 hover:text-white"><Code2 size={18} /></a><a href="mailto:hello@example.com" aria-label="Email" className="text-white/40 hover:text-white"><Mail size={18} /></a><span className="ml-auto font-mono text-[10px] uppercase tracking-[.2em] text-white/30">V.V.S. Ravi Sankar / 2027</span></div></div></section>
  </main>
}

export default function Page() { return <App /> }
