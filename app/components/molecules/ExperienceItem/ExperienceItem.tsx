import { ExperienceProps } from '@/app/data/experience';
import { getTechColor } from '@/app/utils/colors-map';
import { Box } from '@mui/material';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

interface ExperienceItemProps {
  experience: ExperienceProps;
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, index }) => {
  return (
    <Box>
      <motion.div
        key={index}
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="relative mb-12 md:pl-1/2 md:ml-auto md:text-left"
      >
        <Box className="flex items-center gap-4">
          <Box className="flex-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <Box
                className={`absolute inset-0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity ${
                  experience.type === 'work'
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20'
                    : 'bg-gradient-to-r from-purple-500/20 to-rose-500/20'
                }`}
              />
              <Box
                className={`relative backdrop-blur-sm cursor-pointer border rounded-lg p-6 transition-colors ${
                  experience.type === 'work'
                    ? 'bg-cyan-950/30 border-cyan-500/30 hover:border-cyan-500'
                    : 'bg-purple-950/30 border-purple-500/30 hover:border-purple-500'
                }`}
              >
                <Box className="flex items-start gap-4 mb-3">
                  <Box
                    className={`rounded-lg ${
                      experience.type === 'work'
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'bg-purple-500/20 text-purple-400'
                    }`}
                  >
                    <Image
                      src={experience.image}
                      alt="Entity Image"
                      width={40}
                      height={40}
                      style={{ width: '40px', height: '40px' }}
                    />
                  </Box>
                  <Box className="flex-1">
                    <h3
                      className={`font-semibold text-lg ${
                        experience.type === 'work'
                          ? 'text-cyan-400 mb-1'
                          : 'text-purple-400 mb-1'
                      }`}
                    >
                      {experience.title}
                    </h3>
                    <p className="text-zinc-300 mb-2">{experience.entity}</p>
                    <Box className="flex items-center gap-2 text-zinc-400 text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </Box>
                  </Box>
                </Box>
                <p className="text-zinc-400 text-base mb-4">{experience.description}</p>
                <Box className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 border rounded text-xs ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>

        {/* Timeline dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
          className={`absolute left-1/2 top-3 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-[#0a0a0f] ${
            experience.type === 'work'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
              : 'bg-gradient-to-r from-purple-500 to-rose-500'
          }`}
        />
      </motion.div>
    </Box>
  );
};

export default ExperienceItem;
