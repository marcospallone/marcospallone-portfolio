'use client';

import { ProjectProps } from '@/app/data/projects';
import { getTechColor } from '@/app/utils/colors-map';
import { ExternalLink, GitBranch, Github, Terminal, User } from 'lucide-react';
import { motion } from 'motion/react';
import CustomButton from '../../atoms/CustomButton/CustomButton';

interface ProjectItemProps {
  project: ProjectProps;
  index: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, index }) => {
  return (
    <>
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="relative group"
      >
        <motion.div
          transition={{ duration: 0.3 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-r rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity`}
          />
          <div className="relative bg-black/60 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-500 transition-colors">
            <div className="bg-black/80 border-b border-cyan-500/20 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 font-mono text-sm">{project.repo}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CustomButton
                    size="small"
                    customClass="flex min-w-auto !px-0 !py-0 text-xs text-zinc-400 hover:text-cyan-400"
                    onClick={() => window.open(project.github, '_blank')}
                    startIcon={<Github className="w-5 h-5 mr-0" />}
                  />
                  <CustomButton
                    size="small"
                    customClass="flex min-w-auto !px-0 !py-0 text-xs text-zinc-400 hover:text-cyan-400"
                    onClick={() => window.open(project.url, '_blank')}
                    startIcon={<ExternalLink className="w-5 h-5 mr-0" />}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 px-2 py-1 bg-purple-500/20 border border-purple-500/40 rounded text-purple-300 text-xs">
                  <User className="w-3 h-3" />
                  {project.role}
                </span>
                <span className="text-zinc-500 text-xs">main</span>
              </div>
            </div>

            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
              <img
                src={project.media}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            <div className="p-6">
              <h3 className="text-cyan-400 mb-2">{project.title}</h3>
              <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 border rounded text-xs ${getTechColor(tech)}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="bg-black/60 border border-cyan-500/20 rounded p-3 font-mono text-sm">
                <div className="flex items-center gap-2 text-green-400">
                  <Terminal className="w-4 h-4" />
                  <span className="text-zinc-500">$</span>
                  <span>{project.command}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectItem;
