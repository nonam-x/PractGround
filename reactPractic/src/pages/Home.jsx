import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <main className="bg-[#0c0c0c] text-[#ececec] min-h-screen font-sans selection:bg-white/10">
      {/* Refined Navigation */}
      {/* <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-5 md:px-16 backdrop-blur-lg">
        <span className="text-sm font-bold tracking-widest uppercase">Portfolio.</span>
        <div className="flex gap-8 text-[11px] font-medium tracking-[0.2em] text-gray-400">
          <a href="#work" className="hover:text-white transition-colors">PROJECTS</a>
          <a href="#contact" className="hover:text-white transition-colors">CONNECT</a>
        </div>
      </nav> */}
      <Navbar/>

      {/* Hero: Balanced & Approachable */}
      <section className="pt-44 pb-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
            Practice Ground React
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
         practicing data fetching in react js from free api website .. and apply design for this app ..
          </p>
        </div>
      </section>

      {/* Project Grid: Simplified Bento */}
      <section id="work" className="px-6 md:px-16 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Footer: Professional & Clean */}
      <footer id="contact" className="px-6 md:px-16 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="text-sm text-gray-500 mb-2 font-mono uppercase tracking-widest">Available for projects</p>
            <a  className="text-2xl font-medium hover:text-gray-400 transition-colors">
              
            </a>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}