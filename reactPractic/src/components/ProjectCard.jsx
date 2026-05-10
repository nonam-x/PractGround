"use client";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <Link to={project.link} className="group block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col"
      >
        {/* Project Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#1a1a1a] border border-white/5 mb-4">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" 
            style={{ backgroundImage: `url(${project.image})` }} 
          />
          {/* Subtle hover reveal for the link */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span 
              className="px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full transform translate-y-2 group-hover:translate-y-0 transition-transform"
            >
              View Project
            </span>
          </div>
        </div>

        {/* Project Details */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-baseline">
            <h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-gray-300 transition-colors">
              {project.title}
            </h3>
            <span className="text-[10px] text-gray-500 font-mono">{project.tags[0]}</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}