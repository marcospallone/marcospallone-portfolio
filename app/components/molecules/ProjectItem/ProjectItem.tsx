'use client';

import { ProjectProps } from '@/app/data/projects';
import { getTechColor } from '@/app/utils/colors-map';
import { Box } from '@mui/material';
import { ExternalLink, GitBranch, Github, Terminal, User } from 'lucide-react';
import { motion } from 'motion/react';

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
          style={{ transformStyle: 'preserve-3d', height: '100%' }}
        >
          <Box
            className={`absolute inset-0 bg-gradient-to-r rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity`}
          />
          <Box className="relative bg-black/60 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-500 transition-colors flex flex-col h-full">
            <Box className="bg-black/80 border-b border-cyan-500/20 p-4">
              <Box className="flex items-center justify-between mb-3">
                <Box className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 font-mono text-sm">{project.repo}</span>
                </Box>
                <Box className="flex items-center gap-2">
                  {project.github && (
                    <a
                      className="flex min-w-auto !px-0 !py-0 text-xs text-zinc-400 hover:text-cyan-400"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-5 h-5 mr-0" />
                    </a>
                  )}
                  {project.url && (
                    <a
                      className="flex min-w-auto !px-0 !py-0 text-xs text-zinc-400 hover:text-cyan-400"
                      onClick={() => window.open(project.url, '_blank')}
                    >
                      <ExternalLink className="w-5 h-5 mr-0" />
                    </a>
                  )}
                </Box>
              </Box>
              <Box className="flex items-center gap-2">
                <span className="flex items-center gap-1 px-2 py-1 bg-purple-500/20 border border-purple-500/40 rounded text-purple-300 text-xs">
                  <User className="w-3 h-3" />
                  {project.role}
                </span>
              </Box>
            </Box>

            <Box className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
              <img
                src={project.media}
                alt={project.title}
                className={`w-full h-full opacity-80 group-hover:scale-110 transition-transform duration-500 ${project.imageSize === 'contain' ? 'object-contain' : 'object-cover'}`}
              />
              <Box className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </Box>

            <Box className="p-6 flex flex-col flex-1">
              <h3 className="text-cyan-400 mb-2">{project.title}</h3>
              <p className="text-zinc-300 text-sm mb-4 flex-grow">{project.description}</p>
              <Box className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 border rounded text-xs ${getTechColor(tech)}`}
                  >
                    {tech}
                  </span>
                ))}
              </Box>

              <Box className="bg-black/60 border border-cyan-500/20 rounded p-3 font-mono text-sm mt-auto">
                <Box className="flex items-center gap-2 text-green-400">
                  <Terminal className="w-4 h-4" />
                  <span className="text-zinc-400">$</span>
                  <span>{project.command}</span>
                </Box>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectItem;
